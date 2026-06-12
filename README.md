# VibeAround Website

Next.js static-export website, documentation, and Cloudflare deployment scripts for `vibearound.ai`.

The app builds to `out/` and is deployed as a static Cloudflare Pages site. Product documentation is authored as MDX in `content/docs/en` and `content/docs/zh`.

## Local Preview

```bash
npm run dev
```

Production-like static preview:

```bash
npm run preview
```

## Deploy Site

```bash
npm run deploy
```

The site is deployed to the Cloudflare Pages project `vibearound-ai` from the generated `out/` directory.

## Sync Release Packages To R2

```bash
npm run sync:releases
```

The script reads GitHub Releases from `jazzenchen/VibeAround`, mirrors the latest stable release assets to the `vibearound-releases` R2 bucket, and updates `public/releases/latest.json`. If the latest release does not include a macOS DMG, it uses the newest stable release that does.

Public website download buttons and `/download/*` redirects should be updated with each stable release. The canonical release notes remain on `https://github.com/jazzenchen/VibeAround/releases/latest`.

## Configure Cloudflare Domains

```bash
npm run setup:cloudflare
```

This attaches `vibearound.ai` and `www.vibearound.ai` to the Pages project, and attaches `download.vibearound.ai` to the R2 bucket. It uses `CLOUDFLARE_API_TOKEN` if set, otherwise it can use the local Wrangler OAuth token created by `wrangler login`.

Wrangler OAuth can deploy Pages and R2, but it may not include DNS edit permissions. If the script cannot update DNS, create a Cloudflare API token scoped to the `vibearound.ai` zone with `DNS:Edit`, then run:

```bash
CLOUDFLARE_API_TOKEN=... npm run setup:cloudflare
```

Required Pages DNS records:

- `CNAME @ -> vibearound-ai.pages.dev`, proxied
- `CNAME www -> vibearound-ai.pages.dev`, proxied

Remove conflicting `A`, `AAAA`, or `CNAME` records for `@` and `www` first. Do not change `download.vibearound.ai`, which is bound to the R2 bucket.
