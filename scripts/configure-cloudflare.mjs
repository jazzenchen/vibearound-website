#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const accountIdFromEnv = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID;
const apiTokenFromEnv =
  process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN || process.env.CLOUDFLARE_API_KEY;

const zoneName = process.env.CLOUDFLARE_ZONE_NAME || "vibearound.ai";
const pagesProject = process.env.PAGES_PROJECT || "vibearound-ai";
const r2Bucket = process.env.R2_BUCKET || "vibearound-releases";
const pagesDomains = (process.env.PAGES_DOMAINS || "vibearound.ai,www.vibearound.ai")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);
const downloadDomain = process.env.DOWNLOAD_DOMAIN || "download.vibearound.ai";
const pagesDnsTarget = process.env.PAGES_DNS_TARGET || `${pagesProject}.pages.dev`;

function tokenFromWranglerConfig() {
  if (apiTokenFromEnv) return apiTokenFromEnv;
  const configPath = join(homedir(), "Library", "Preferences", ".wrangler", "config", "default.toml");
  if (!existsSync(configPath)) return null;
  const contents = readFileSync(configPath, "utf8");
  const match = contents.match(/oauth_token\s*=\s*"([^"]+)"/);
  return match?.[1] || null;
}

const token = tokenFromWranglerConfig();
if (!token) {
  console.error("No Cloudflare token found. Run `npx wrangler@latest login` or set CLOUDFLARE_API_TOKEN.");
  process.exit(1);
}

async function cf(path, init = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(init.headers || {})
    }
  });
  const body = await response.json();
  if (!response.ok || body.success === false) {
    const messages = [...(body.errors || []), ...(body.messages || [])]
      .map((item) => `${item.code || "message"}: ${item.message}`)
      .join("; ");
    throw new Error(`${init.method || "GET"} ${path} failed: ${messages || response.status}`);
  }
  return body.result;
}

function runWrangler(args, options = {}) {
  const result = spawnSync("npx", ["wrangler@latest", ...args], {
    stdio: options.capture ? ["ignore", "pipe", "pipe"] : "inherit",
    encoding: "utf8"
  });
  return {
    ok: result.status === 0,
    output: [result.stdout, result.stderr].filter(Boolean).join("\n")
  };
}

async function getAccountId() {
  if (accountIdFromEnv) return accountIdFromEnv;
  const accounts = await cf("/accounts");
  if (!accounts.length) {
    throw new Error("No Cloudflare accounts are visible to this token.");
  }
  if (accounts.length > 1) {
    console.warn(`Multiple accounts found; using ${accounts[0].name}. Set CLOUDFLARE_ACCOUNT_ID to override.`);
  }
  return accounts[0].id;
}

async function getZoneId() {
  const zones = await cf(`/zones?name=${encodeURIComponent(zoneName)}`);
  const zone = zones.find((item) => item.name === zoneName);
  if (!zone) {
    throw new Error(`Cloudflare zone not found: ${zoneName}`);
  }
  return zone.id;
}

async function ensurePagesProject() {
  const list = runWrangler(["pages", "project", "list"], { capture: true });
  if (!list.output.includes(pagesProject)) {
    const created = runWrangler([
      "pages",
      "project",
      "create",
      pagesProject,
      "--production-branch",
      "main",
      "--compatibility-date",
      "2026-05-08"
    ]);
    if (!created.ok) {
      throw new Error(created.output);
    }
  }
}

async function ensureR2Bucket() {
  const list = runWrangler(["r2", "bucket", "list"], { capture: true });
  if (!list.output.includes(`name:           ${r2Bucket}`) && !list.output.includes(`name: ${r2Bucket}`)) {
    const created = runWrangler(["r2", "bucket", "create", r2Bucket, "--update-config=false"]);
    if (!created.ok) {
      throw new Error(created.output);
    }
  }
}

async function ensurePagesDomain(accountId, domainName) {
  const domains = await cf(`/accounts/${accountId}/pages/projects/${pagesProject}/domains`);
  if (domains.some((item) => item.name === domainName)) {
    console.log(`Pages domain already attached: ${domainName}`);
    return;
  }
  await cf(`/accounts/${accountId}/pages/projects/${pagesProject}/domains`, {
    method: "POST",
    body: JSON.stringify({ name: domainName })
  });
  console.log(`Attached Pages domain: ${domainName}`);
}

async function ensurePagesDns(zoneId, domainName) {
  const records = await cf(`/zones/${zoneId}/dns_records?name=${encodeURIComponent(domainName)}&per_page=100`);
  const relevant = records.filter((record) => ["A", "AAAA", "CNAME"].includes(record.type));
  if (
    relevant.length === 1 &&
    relevant[0].type === "CNAME" &&
    relevant[0].content === pagesDnsTarget &&
    relevant[0].proxied === true
  ) {
    console.log(`DNS already points to Pages: ${domainName}`);
    return;
  }

  for (const record of relevant) {
    await cf(`/zones/${zoneId}/dns_records/${record.id}`, { method: "DELETE" });
    console.log(`Removed conflicting ${record.type} record: ${domainName}`);
  }

  await cf(`/zones/${zoneId}/dns_records`, {
    method: "POST",
    body: JSON.stringify({
      type: "CNAME",
      name: domainName,
      content: pagesDnsTarget,
      proxied: true,
      ttl: 1
    })
  });
  console.log(`Created Pages CNAME: ${domainName} -> ${pagesDnsTarget}`);
}

function printDnsFallback(error) {
  console.warn("Could not update Pages DNS records automatically.");
  console.warn(error.message);
  console.warn("Manual DNS records needed in the vibearound.ai Cloudflare zone:");
  console.warn(`- CNAME @ -> ${pagesDnsTarget}, proxied`);
  console.warn(`- CNAME www -> ${pagesDnsTarget}, proxied`);
  console.warn("Remove any existing A, AAAA, or CNAME records for @ and www first. Do not change download.vibearound.ai.");
}

async function ensureR2Domain(zoneId) {
  const list = runWrangler(["r2", "bucket", "domain", "list", r2Bucket], { capture: true });
  if (list.output.includes(downloadDomain)) {
    console.log(`R2 domain already attached: ${downloadDomain}`);
    return;
  }
  const added = runWrangler([
    "r2",
    "bucket",
    "domain",
    "add",
    r2Bucket,
    "--domain",
    downloadDomain,
    "--zone-id",
    zoneId,
    "--min-tls",
    "1.2",
    "--force"
  ]);
  if (!added.ok) {
    const retryList = runWrangler(["r2", "bucket", "domain", "list", r2Bucket], { capture: true });
    if (!retryList.output.includes(downloadDomain)) {
      throw new Error(added.output);
    }
  }
  console.log(`Attached R2 domain: ${downloadDomain}`);
}

async function main() {
  await ensurePagesProject();
  await ensureR2Bucket();
  const accountId = await getAccountId();
  const zoneId = await getZoneId();

  for (const domainName of pagesDomains) {
    await ensurePagesDomain(accountId, domainName);
  }
  try {
    for (const domainName of pagesDomains) {
      await ensurePagesDns(zoneId, domainName);
    }
  } catch (error) {
    printDnsFallback(error);
  }
  await ensureR2Domain(zoneId);
  console.log("Cloudflare project, bucket, and domains are configured.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
