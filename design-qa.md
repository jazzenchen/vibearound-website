**Source Visual Truth**
- Current screenshot set:
  - `/Users/jazzen/Development/vibe-coding/VibeAround/assets/marketing/screenshots/en/cover-web-dashboard.png`
  - `/Users/jazzen/Development/vibe-coding/VibeAround/assets/marketing/screenshots/en/desktop-launch.png`
  - `/Users/jazzen/Development/vibe-coding/VibeAround/assets/marketing/screenshots/en/preview-in-a-row.png`
  - `/Users/jazzen/Development/vibe-coding/VibeAround/assets/marketing/screenshots/en/web-terminal.png`
- User direction: keep page copy unchanged and replace fake UI with useful real screenshots.

**Implementation Evidence**
- Local URL: `http://localhost:8788/`
- Homepage no longer loads `/assets/home-mocks.css`.
- Real screenshot assets copied into `/public/assets/`:
  - `vibearound-dashboard-cover.png` at `1898x916`
  - `vibearound-desktop-launch.webp` at `674x474`
  - `vibearound-preview-flow.png` at `2105x1076`
  - `vibearound-web-terminal.png` at `939x538`
- Browser viewport checks:
  - Desktop `1280x720`: no horizontal overflow.
  - Mobile `390x844`: no page-level horizontal overflow.

**Rendered Sizes Observed**
- Desktop hero dashboard: `1114x538`.
- Desktop launch screenshot: `554x389`.
- Desktop preview flow screenshot: `646x330`.
- Desktop Web Terminal screenshot: `554x317`.
- Mobile hero dashboard: `348x168`.
- Mobile launch screenshot: `348x245`.
- Mobile preview flow: container `348px`, inner image `620x317` with internal horizontal scroll.

**Findings**
- No actionable P0/P1/P2 issues remain.
- The old CSS-drawn launcher, phone chat, and terminal mocks were removed from homepage markup.
- The mobile reverse feature layout needed an override after widening the preview image column; fixed with `.feature.reverse { grid-template-columns: 1fr; }` at the tablet/mobile breakpoint.
- Long-cache query strings were bumped to `20260610-real-shots-3`.

**Verification**
- `node --check public/assets/home.js`
- `curl http://localhost:8788/` confirms the new stylesheet and all four screenshot references.
- Asset HEAD requests return `200 OK`.
- In-app Browser confirms screenshot rendering and no horizontal overflow on desktop and mobile.

final result: passed
