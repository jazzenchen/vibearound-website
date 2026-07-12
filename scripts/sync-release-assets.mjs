#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync
} from "node:fs";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";

const repo = process.env.GITHUB_REPOSITORY || "jazzenchen/VibeAround";
const bucket = process.env.R2_BUCKET || "vibearound-releases";
const downloadBaseUrl = process.env.DOWNLOAD_BASE_URL || "https://download.vibearound.ai";
const cacheDir = join(process.cwd(), ".cache", "releases");
const manifestPath = join(process.cwd(), "public", "releases", "latest.json");
const redirectsPath = join(process.cwd(), "public", "_redirects");

const packageDefs = [
  {
    key: "macosAppleSilicon",
    label: "macOS Apple Silicon DMG",
    route: "/download/mac",
    pattern: /(?:_arm64|macOS-arm64-[\d.]+)\.dmg$/i,
    fallbackToOlderRelease: true
  },
  {
    key: "windowsSetupX64",
    label: "Windows x64 setup EXE",
    route: "/download/windows",
    pattern: /(?:_x64-setup|Windows-x64-Setup-[\d.]+)\.exe$/i
  },
  {
    key: "windowsMsiX64",
    label: "Windows x64 MSI",
    route: null,
    pattern: /(?:_x64_en-US|Windows-x64-MSI-[\d.]+)\.msi$/i
  },
  {
    key: "windowsPortableX64",
    label: "Windows x64 portable ZIP",
    route: null,
    pattern: /(?:win-.*-portable|Windows-x64-Portable-[\d.]+)\.zip$/i
  },
  {
    key: "linuxAppImageX64",
    label: "Linux x64 AppImage",
    route: "/download/linux",
    pattern: /(?:_amd64|Linux-x64-AppImage-[\d.]+)\.AppImage$/i
  },
  {
    key: "linuxDebX64",
    label: "Linux x64 deb",
    route: null,
    pattern: /(?:_amd64|Linux-x64-DEB-[\d.]+)\.deb$/i
  }
];

async function githubJson(path) {
  const headers = {
    "Accept": "application/vnd.github+json",
    "User-Agent": "vibearound-website-release-sync"
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const response = await fetch(`https://api.github.com/repos/${repo}${path}`, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  }
  return response.json();
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: options.capture ? ["ignore", "pipe", "pipe"] : "inherit",
    encoding: "utf8"
  });
  if (result.status !== 0) {
    const output = [result.stdout, result.stderr].filter(Boolean).join("\n");
    throw new Error(`${command} ${args.join(" ")} failed${output ? `\n${output}` : ""}`);
  }
  return result.stdout || "";
}

function runWrangler(args, options) {
  return run("npx", ["wrangler@latest", ...args], options);
}

function contentTypeFor(name, fallback) {
  if (/\.dmg$/i.test(name)) return "application/x-apple-diskimage";
  if (/\.exe$/i.test(name)) return "application/vnd.microsoft.portable-executable";
  if (/\.msi$/i.test(name)) return "application/x-msi";
  if (/\.AppImage$/i.test(name)) return "application/octet-stream";
  if (/\.deb$/i.test(name)) return "application/vnd.debian.binary-package";
  if (/\.zip$/i.test(name)) return "application/zip";
  if (/\.json$/i.test(name)) return "application/json";
  return fallback || "application/octet-stream";
}

function cleanDigest(digest) {
  return digest?.startsWith("sha256:") ? digest.slice("sha256:".length) : digest || null;
}

function selectPackages(releases) {
  const selected = {};
  for (const def of packageDefs) {
    const candidateReleases = def.fallbackToOlderRelease ? releases : releases.slice(0, 1);
    for (const release of candidateReleases) {
      const asset = release.assets.find((item) => def.pattern.test(item.name));
      if (asset) {
        const version = release.tag_name.replace(/^v/, "");
        selected[def.key] = {
          label: def.label,
          tag: release.tag_name,
          version,
          fileName: asset.name,
          size: asset.size,
          sha256: cleanDigest(asset.digest),
          url: `${downloadBaseUrl}/releases/${release.tag_name}/${asset.name}`,
          sourceUrl: asset.browser_download_url,
          contentType: contentTypeFor(asset.name, asset.content_type)
        };
        break;
      }
    }
  }
  return selected;
}

async function download(url, targetPath, expectedSize) {
  if (existsSync(targetPath) && statSync(targetPath).size === expectedSize) return;
  rmSync(targetPath, { force: true });
  mkdirSync(dirname(targetPath), { recursive: true });
  const partialPath = `${targetPath}.part`;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    rmSync(partialPath, { force: true });
    try {
      const response = await fetch(url, {
        headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : undefined
      });
      if (!response.ok || !response.body) {
        throw new Error(`Download failed ${response.status}: ${url}`);
      }
      await pipeline(Readable.fromWeb(response.body), createWriteStream(partialPath));
      const actualSize = statSync(partialPath).size;
      if (actualSize !== expectedSize) {
        throw new Error(`Download size mismatch: expected ${expectedSize}, received ${actualSize}`);
      }
      renameSync(partialPath, targetPath);
      return;
    } catch (error) {
      rmSync(partialPath, { force: true });
      if (attempt === 3) throw error;
      console.warn(`Download attempt ${attempt} failed; retrying...`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }
}

function ensureBucket() {
  const list = runWrangler(["r2", "bucket", "list"], { capture: true });
  if (!list.includes(`name:           ${bucket}`) && !list.includes(`name: ${bucket}`)) {
    runWrangler(["r2", "bucket", "create", bucket, "--update-config=false"]);
  }
}

function writeRedirects(latestRelease, packages) {
  const latestReleaseUrl = latestRelease.html_url;
  const lines = [
    `/download ${latestReleaseUrl} 302`
  ];
  for (const def of packageDefs) {
    if (def.route) {
      lines.push(`${def.route} ${packages[def.key]?.url || latestReleaseUrl} 302`);
    }
  }
  lines.push("/github https://github.com/jazzenchen/VibeAround 302");
  lines.push("/demo https://youtu.be/6kxNKTMz-AM 302");

  const managedRoutes = new Set(lines.map((line) => line.split(/\s+/, 1)[0]));
  const preserved = existsSync(redirectsPath)
    ? readFileSync(redirectsPath, "utf8")
        .split("\n")
        .filter((line) => {
          const route = line.trim().split(/\s+/, 1)[0];
          return route && !managedRoutes.has(route);
        })
    : [];
  writeFileSync(redirectsPath, `${[...preserved, ...lines].join("\n")}\n`);
}

function writeManifest(latestRelease, packages, mirroredAssets) {
  const notes = [
    "GitHub is the canonical source for release notes and source archives.",
    `The latest desktop GitHub release at generation time is ${latestRelease.tag_name}.`
  ];
  if (packages.macosAppleSilicon?.tag !== latestRelease.tag_name) {
    notes.push(
      `The macOS Apple Silicon package points to ${packages.macosAppleSilicon.tag} because ${latestRelease.tag_name} did not expose a DMG asset when checked.`
    );
  }
  const manifest = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    source: {
      repository: repo,
      latestRelease: latestRelease.tag_name,
      latestReleaseUrl: latestRelease.html_url,
      publishedAt: latestRelease.published_at
    },
    downloadBaseUrl,
    packages,
    mirroredAssets,
    notes
  };
  mkdirSync(dirname(manifestPath), { recursive: true });
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  return manifest;
}

function isDesktopRelease(release) {
  return /^v\d+\.\d+\.\d+$/.test(release.tag_name);
}

async function main() {
  ensureBucket();

  const releases = (await githubJson("/releases?per_page=10")).filter(
    (release) => !release.draft && !release.prerelease
  );
  if (!releases.length) {
    throw new Error(`No stable releases found for ${repo}`);
  }

  const desktopReleases = releases.filter(isDesktopRelease);
  if (!desktopReleases.length) {
    throw new Error(`No stable desktop releases found for ${repo}`);
  }

  const latestRelease = desktopReleases[0];
  const packages = selectPackages(desktopReleases);
  const latestAssets = latestRelease.assets.map((asset) => ({ release: latestRelease, asset }));
  const selectedAssets = Object.values(packages).map((pkg) => {
    const release = releases.find((item) => item.tag_name === pkg.tag);
    return {
      release,
      asset: release.assets.find((item) => item.name === pkg.fileName)
    };
  });

  const uploadMap = new Map();
  for (const item of [...latestAssets, ...selectedAssets]) {
    if (!item.release || !item.asset) continue;
    uploadMap.set(`${item.release.tag_name}/${item.asset.name}`, item);
  }

  const mirroredAssets = [];
  for (const { release, asset } of uploadMap.values()) {
    const localPath = join(cacheDir, release.tag_name, asset.name);
    const objectKey = `releases/${release.tag_name}/${asset.name}`;
    const hostedUrl = `${downloadBaseUrl}/${objectKey}`;
    const contentType = contentTypeFor(asset.name, asset.content_type);

    console.log(`Downloading ${asset.name}`);
    await download(asset.browser_download_url, localPath, asset.size);

    console.log(`Uploading ${objectKey}`);
    runWrangler([
      "r2",
      "object",
      "put",
      `${bucket}/${objectKey}`,
      "--remote",
      "--file",
      localPath,
      "--content-type",
      contentType,
      "--cache-control",
      "public, max-age=31536000, immutable",
      "--content-disposition",
      `attachment; filename="${asset.name.replaceAll('"', "")}"`
    ]);

    mirroredAssets.push({
      tag: release.tag_name,
      fileName: asset.name,
      size: asset.size,
      sha256: cleanDigest(asset.digest),
      url: hostedUrl,
      sourceUrl: asset.browser_download_url,
      contentType
    });
  }

  writeRedirects(latestRelease, packages);
  writeManifest(latestRelease, packages, mirroredAssets);

  runWrangler([
    "r2",
    "object",
    "put",
    `${bucket}/releases/latest.json`,
    "--remote",
    "--file",
    manifestPath,
    "--content-type",
    "application/json",
    "--cache-control",
    "public, max-age=300"
  ]);

  console.log(`Synced ${mirroredAssets.length} release asset(s) to ${bucket}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
