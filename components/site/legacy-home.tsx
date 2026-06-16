import Script from "next/script";

type LegacyHomePageProps = {
  locale?: "en" | "zh";
};

export function LegacyHomePage({ locale = "en" }: LegacyHomePageProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/assets/home.css?v=20260611-stars-3" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400;500&display=swap" />
      {locale === "zh" ? <LegacyHomeZh /> : <LegacyHomeEn />}
      <Script src="/assets/home.js?v=20260615-stars-398" strategy="afterInteractive" />
    </>
  );
}

function LegacyHomeEn() {
  return (
    <div>
      <nav className="nav" data-scrolled={0} aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="brand" href="#top"><img className="brand-mark" src="/assets/brand/vibearound-mark.svg?v=20260610-brand-2" alt="" width={26} height={26} /><span className="brand-name">Vibe<span className="brand-around">Around</span></span></a>
          <div className="nav-links">
            <a href="#launch">Launch</a>
            <a href="#control">Control</a>
            <a href="#workspace">Workspace</a>
            <a href="#download">Download</a>
            <a href="#faq">FAQ</a>
            <a href="/zh/" lang="zh-CN">中文</a>
          </div>
          <div className="nav-right">
            <a className="stars-pill btn btn-sm" href="/github">
              <svg className="os-logo" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-github-mark" /></svg>
              <span className="mono" data-count={398}>398</span>
            </a>
            <a className="btn btn-primary btn-sm" href="#download"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-download" /></svg>Download</a>
          </div>
        </div>
      </nav>
      <main>
        <header className="hero hero-terminal" id="top">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="container">
            <div className="eyebrow-row">
              <span className="ver-tag"><span className="dot" aria-hidden="true" /><span data-count-version="v0.7.3" className="mono">v0.7.3</span> · Unified AI Agent Workspace</span>
            </div>
            <h1 className="hero-h1">
              Keep your AI coding agents
              <span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator>around</span></span><span className="rot-dot">.</span></span>
            </h1>
            <p className="hero-sub">
              Run AI coding agents side by side on your computer. Control them from anywhere, continue previous sessions, and preview what they build.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#download">Download <span data-count-version="v0.7.3" className="mono">v0.7.3</span></a>
              <a className="btn btn-ghost" href="/docs/">Read the docs <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></a>
            </div>
            <div className="hero-meta" aria-label="VibeAround project facts">
              <span className="mi"><span className="mono">macOS · Windows · Linux</span></span>
              <span className="sep" aria-hidden="true" />
              <span className="mi">Open source</span>
            </div>
            <div className="hero-art hero-cover reveal" data-d={1}>
              <figure className="cover-window" aria-label="VibeAround Web Dashboard cover screenshot">
                <img src="/assets/vibearound-dashboard-cover.png?v=20260610-real-shots-1" alt="VibeAround Web Dashboard with browser frame, agent selector, model profiles, workspaces, and local agent status" width={1898} height={916} fetchPriority="high" />
              </figure>
            </div>
          </div>
        </header>
        <section className="proof" aria-label="Supported agents, providers, and channels">
          <div className="container proof-rows">
            <div className="proof-row reveal">
              <div className="proof-label"><span data-scramble="Agents">Agents</span></div>
              <div className="marquee" data-marquee><div className="marquee-track"><div className="chip-row marquee-group">
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-claude.svg?v=20260610-icons-1" alt="Claude Desktop" /></span>Claude Desktop</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-codex-desktop.png?v=20260610-icons-1" alt="Codex desktop app" /></span>Codex Desktop</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-claude.svg?v=20260610-icons-1" alt="Claude Code" /></span>Claude Code</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-codex-desktop.png?v=20260610-icons-1" alt="Codex CLI" /></span>Codex CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-gemini.svg?v=20260610-icons-1" alt="Gemini CLI" /></span>Gemini CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-cursor.svg?v=20260610-icons-1" alt="Cursor CLI" /></span>Cursor CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-kiro.svg?v=20260610-icons-1" alt="Kiro CLI" /></span>Kiro CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-qwen.svg?v=20260610-icons-1" alt="Qwen Code" /></span>Qwen Code</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-opencode.svg?v=20260610-icons-1" alt="OpenCode" /></span>OpenCode</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-openai.svg?v=20260610-icons-1" alt="OpenAI" /></span>OpenAI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-pi.svg?v=20260610-icons-1" alt="Pi" /></span>Pi</span>
                  </div></div></div>
            </div>
            <div className="proof-row reveal" data-d={1}>
              <div className="proof-label"><span data-scramble="Providers">Providers</span></div>
              <div className="marquee" data-marquee data-marquee-reverse><div className="marquee-track"><div className="chip-row marquee-group">
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-deepseek-color.svg?v=20260610-icons-1" alt="DeepSeek" /></span>DeepSeek</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-dashscope.svg?v=20260610-icons-1" alt="DashScope" /></span>DashScope</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-moonshot.webp?v=20260610-icons-1" alt="Kimi" /></span>Kimi</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-minimax-color.svg?v=20260610-icons-1" alt="MiniMax" /></span>MiniMax</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-zai-color.svg?v=20260610-icons-1" alt="Z.AI / GLM" /></span>Z.AI / GLM</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-openrouter-color.svg?v=20260610-icons-1" alt="OpenRouter" /></span>OpenRouter</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-azure.svg?v=20260610-icons-1" alt="Azure" /></span>Azure</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-gemini-color.svg?v=20260610-icons-1" alt="Gemini" /></span>Gemini</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-nvidia.svg?v=20260610-icons-1" alt="NVIDIA NIM" /></span>NVIDIA NIM</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-mimo.svg?v=20260610-icons-1" alt="Mimo" /></span>Mimo</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-volcengine.svg?v=20260610-icons-1" alt="VolcEngine" /></span>VolcEngine</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-zai.svg?v=20260610-icons-1" alt="Z.AI" /></span>Z.AI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-xai.svg?v=20260610-icons-1" alt="xAI" /></span>xAI</span>
                  </div></div></div>
            </div>
            <div className="proof-row reveal" data-d={2}>
              <div className="proof-label"><span data-scramble="Messaging apps">Messaging apps</span></div>
              <div className="marquee" data-marquee><div className="marquee-track"><div className="chip-row marquee-group">
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-telegram.svg?v=20260610-icons-1" alt="Telegram" /></span>Telegram</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-feishu.svg?v=20260610-icons-1" alt="Lark" /></span>Lark</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-slack.svg?v=20260610-icons-1" alt="Slack" /></span>Slack</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-discord.svg?v=20260610-icons-1" alt="Discord" /></span>Discord</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-wechat.svg?v=20260610-icons-1" alt="WeChat" /></span>WeChat</span>
                    <span className="chip"><span className="chip-icon chip-font"><span className="material-symbols-outlined">language</span></span>Web chat</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-wecom.svg?v=20260610-icons-1" alt="WeCom" /></span>WeCom</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-dingtalk.svg?v=20260610-icons-1" alt="DingTalk" /></span>DingTalk</span>
                  </div></div></div>
            </div>
          </div>
        </section>
        <section className="section" id="launch">
          <div className="container">
            <div className="reveal"><span className="kicker" data-scramble="Agent Launcher">Agent Launcher</span><h2 className="sec-h2 feature-title title-nowrap">Launch the right <span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="agent|terminal|desktop">agent</span></span></span> with the right <span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="model|profile|session|workspace">model</span></span></span>.</h2></div>
            <div className="feature">
              <div className="reveal">
                <p className="sec-copy">
                  Pick an agent, choose a model profile, and start working without editing each agent's config files. VibeAround launches Claude Desktop, the Codex desktop app, Claude Code, Codex CLI, Gemini CLI, Qwen Code, and more with third-party AI APIs.
                </p>
                <div className="feature-list">
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>AI agent launcher</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>AI API profiles across agents</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>AI API bridge for model freedom</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>No changes to each agent's own config files</div>
                </div>
              </div>
              <div className="feature-art reveal" data-d={1}>
                <figure className="product-shot product-shot--launch" aria-label="VibeAround desktop agent launch screenshot">
                  <img src="/assets/vibearound-desktop-launch.webp?v=20260612-desktop-apps-2" alt="VibeAround desktop app launching Claude Desktop with API Bridge profiles, workspace selection, and Codex desktop app support" width={674} height={474} loading="lazy" decoding="async" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="control">
          <div className="container">
            <div className="reveal"><span className="kicker" data-scramble="Remote Control">Remote Control</span><h2 className="sec-h2 feature-title title-nowrap">Step away, stay <span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="in control|connected|in flow|available">in control</span></span></span>.</h2></div>
            <div className="feature reverse">
              <div className="reveal">
                <p className="sec-copy">
                  Continue your latest session from messaging apps, web, or mobile. Switch workspaces and agents with commands, and preview results remotely when an agent finishes a task.
                </p>
                <div className="feature-list">
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Messaging app chat</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Continue the session from where you left</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Quick switch between workspaces and agents</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Remote preview for results agents built</div>
                </div>
              </div>
              <div className="feature-art reveal" data-d={1}>
                <figure className="product-shot product-shot--preview-flow" aria-label="VibeAround remote preview flow screenshot">
                  <img src="/assets/vibearound-preview-flow.png?v=20260610-real-shots-1" alt="Four phone screenshots showing messaging app preview request, browser pairing, web preview, and Markdown preview" width={2105} height={1076} loading="lazy" decoding="async" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="workspace">
          <div className="container">
            <div className="reveal"><span className="kicker" data-scramble="Unified Workspace">Unified Workspace</span><h2 className="sec-h2 feature-title title-nowrap">One <span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="workspace|dashboard|terminal|hub|runtime">workspace</span></span></span> for every agent.</h2></div>
            <div className="feature">
              <div className="reveal">
                <p className="sec-copy">
                  Coordinate agents and sessions from a single workspace. Run agents side by side, or as a team, and drop into a real Web Terminal when chat is not enough.
                </p>
                <div className="feature-list">
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Manage agents and sessions from a single place</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>AI agent teams with three modes</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Remote access with tunnel</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Web Terminal</div>
                </div>
              </div>
              <div className="feature-art reveal" data-d={1}>
                <figure className="product-shot product-shot--terminal" aria-label="VibeAround Web Terminal screenshot">
                  <img src="/assets/vibearound-web-terminal.png?v=20260610-real-shots-1" alt="VibeAround Web Terminal showing multiple AI coding agents running side by side in browser panes" width={939} height={538} loading="lazy" decoding="async" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-alt">
          <div className="container">
            <div className="reveal">
              <span className="kicker" data-scramble="The v0.6 workspace loop">The v0.6 workspace loop</span>
              <h2 className="sec-h2 feature-title title-nowrap">A daily hub for <span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="starting|checking|continuing">starting</span></span></span> agent work.</h2>
            </div>
            <div className="loop-grid">
              <div className="loop-cell reveal">
                <div className="ln" data-scramble="01">01</div>
                <h4>Launch and resume</h4>
                <p>Start any agent in the right local workspace and pick sessions back up.</p>
              </div>
              <div className="loop-cell reveal" data-d={1}>
                <div className="ln" data-scramble="02">02</div>
                <h4>Work from the browser</h4>
                <p>Switch agents, attach files, inspect output, keep the session visible.</p>
              </div>
              <div className="loop-cell reveal" data-d={2}>
                <div className="ln" data-scramble="03">03</div>
                <h4>Review code changes</h4>
                <p>Rendered diffs and artifact views show what each agent changed.</p>
              </div>
              <div className="loop-cell reveal">
                <div className="ln" data-scramble="04">04</div>
                <h4>Terminal and previews</h4>
                <p>Open PTY/tmux sessions and share authenticated dev-server previews.</p>
              </div>
              <div className="loop-cell reveal" data-d={1}>
                <div className="ln" data-scramble="05">05</div>
                <h4>Switch agents and providers</h4>
                <p>Move between agents and saved profiles while API Bridge routes models.</p>
              </div>
              <div className="loop-cell reveal" data-d={2}>
                <div className="ln" data-scramble="06">06</div>
                <h4>Continue from phone</h4>
                <p>Hand over and resume from web chat or your messaging apps.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="download">
          <div className="container">
            <div className="reveal">
              <span className="kicker" data-scramble="Download - latest stable">Download - latest stable</span>
              <h2 className="sec-h2 feature-title title-nowrap">Get VibeAround <span data-count-version="v0.7.3" className="mono">v0.7.3</span>.</h2>
              <p className="sec-copy">The latest stable release ships macOS, Windows, and Linux packages. Your repositories, credentials, and terminals stay on your machine.</p>
            </div>
            <div className="dl-grid">
              <a className="dl-card reveal" href="/download/mac">
                <div className="dl-os"><svg className="os-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg></div>
                <h4>macOS</h4>
                <span className="dl-meta">Apple Silicon · DMG</span>
                <span className="dl-go">Download .dmg <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></span>
              </a>
              <a className="dl-card reveal" data-d={1} href="/download/windows">
                <div className="dl-os"><svg className="os-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801" /></svg></div>
                <h4>Windows</h4>
                <span className="dl-meta">x64 · EXE / ZIP</span>
                <span className="dl-go">Download setup <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></span>
              </a>
              <a className="dl-card reveal" data-d={2} href="/download/linux">
                <div className="dl-os"><svg className="os-logo" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-os-linux" /></svg></div>
                <h4>Linux</h4>
                <span className="dl-meta">x64 · AppImage / deb</span>
                <span className="dl-go">Download package <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></span>
              </a>
            </div>
          </div>
        </section>
        <section className="section section-alt" id="faq">
          <div className="container">
            <div className="reveal">
              <span className="kicker" data-scramble="FAQ">FAQ</span>
              <h2 className="sec-h2 feature-title title-nowrap">Questions, answered.</h2>
            </div>
            <div className="faq-list">
              <div className="faq-item reveal" data-d={0}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-1">
                    <h4>Is VibeAround a cloud workspace?</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-1">
                    <div className="faq-a-inner">No. It coordinates local agent sessions running on your own machine, beside your existing repositories, terminals, credentials, and tools.</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={1}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-2">
                    <h4>Which agents does it support?</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-2">
                    <div className="faq-a-inner">Claude Code, Claude Desktop, Codex CLI, Codex desktop app, Gemini CLI, Cursor CLI, Kiro CLI, Qwen Code, and OpenCode - launched without editing each agent's own config files.</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={2}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-3">
                    <h4>Which model providers can I use?</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-3">
                    <div className="faq-a-inner">First-party APIs, OpenAI-compatible endpoints, and API Bridge profiles such as DeepSeek, DashScope, Kimi, MiniMax, Z.AI/GLM, Gemini, OpenRouter, Azure, and custom endpoints.</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={3}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-4">
                    <h4>Can I control local agents from my phone?</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-4">
                    <div className="faq-a-inner">Yes. Session handover through browser and messaging channels lets you continue agent work away from the desktop.</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={3}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-5">
                    <h4>Is it open source?</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-5">
                    <div className="faq-a-inner">Yes. Source, issues, and release notes live on GitHub.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="brand" href="#top"><img className="brand-mark" src="/assets/brand/vibearound-mark-light.svg?v=20260610-brand-2" alt="" width={26} height={26} /><span className="brand-name">Vibe<span className="brand-around">Around</span></span></a>
              <p className="footer-tag">One local workspace for every coding agent you run - launch, resume, switch, inspect, and steer, from anywhere.</p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h5>Product</h5>
                <a href="/docs/">Web workspace</a>
                <a href="/docs/provider-profiles/">API Bridge</a>
                <a href="/docs/local-ai-switch/">Local AI switch</a>
                <a href="/docs/session-handover/">Web Terminal</a>
              </div>
              <div className="footer-col">
                <h5>Use cases</h5>
                <a href="/docs/codex-mobile/">Codex mobile</a>
                <a href="/docs/codex-remote/">Codex remote</a>
                <a href="/docs/claude-remote/">Claude remote</a>
                <a href="/docs/gemini-remote/">Gemini remote</a>
              </div>
              <div className="footer-col">
                <h5>Resources</h5>
                <a href="/docs/">Docs</a>
                <a href="/github">GitHub</a>
                <a href="/privacy/">Privacy</a>
                <a href="/terms/">Terms</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 VibeAround</span>
            <span className="mono">macOS · Windows · Linux · <span data-count-version="v0.7.3" className="mono">v0.7.3</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LegacyHomeZh() {
  return (
    <div lang="zh-CN">
      <nav className="nav" data-scrolled={0} aria-label="主导航">
        <div className="container nav-inner">
          <a className="brand" href="#top"><img className="brand-mark" src="/assets/brand/vibearound-mark.svg?v=20260610-brand-2" alt="" width={26} height={26} /><span className="brand-name">Vibe<span className="brand-around">Around</span></span></a>
          <div className="nav-links">
            <a href="#launch">启动</a>
            <a href="#control">控制</a>
            <a href="#workspace">工作空间</a>
            <a href="#download">下载</a>
            <a href="#faq">FAQ</a>
            <a href="/" lang="en">English</a>
          </div>
          <div className="nav-right">
            <a className="stars-pill btn btn-sm" href="/github">
              <svg className="os-logo" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-github-mark" /></svg>
              <span className="mono" data-count={398}>398</span>
            </a>
            <a className="btn btn-primary btn-sm" href="#download"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-download" /></svg>下载</a>
          </div>
        </div>
      </nav>
      <main>
        <header className="hero hero-terminal" id="top">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="container">
            <div className="eyebrow-row">
              <span className="ver-tag"><span className="dot" aria-hidden="true" /><span data-count-version="v0.7.3" className="mono">v0.7.3</span> · 统一的 AI Agent 工作空间</span>
            </div>
            <h1 className="hero-h1">
              让你的 AI 编程 Agent
              <span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="常伴左右|并行工作|随时待命|触手可及">常伴左右</span></span><span className="rot-dot">。</span></span>
            </h1>
            <p className="hero-sub">
              让 AI 编程 Agent 在你的电脑上并行工作。即使离开电脑，也能远程接入，继续之前的会话，预览 AI Agent 生成的结果。
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#download">下载 <span data-count-version="v0.7.3" className="mono">v0.7.3</span></a>
              <a className="btn btn-ghost" href="/zh/docs/">阅读文档 <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></a>
            </div>
            <div className="hero-meta" aria-label="VibeAround 项目信息">
              <span className="mi"><span className="mono">macOS · Windows · Linux</span></span>
              <span className="sep" aria-hidden="true" />
              <span className="mi">开源项目</span>
            </div>
            <div className="hero-art hero-cover reveal" data-d={1}>
              <figure className="cover-window" aria-label="VibeAround Web Dashboard 封面截图">
                <img src="/assets/vibearound-dashboard-cover.png?v=20260610-real-shots-1" alt="VibeAround Web Dashboard，带浏览器外框，展示 Agent 选择器、模型配置、工作空间和本地 Agent 状态" width={1898} height={916} fetchPriority="high" />
              </figure>
            </div>
          </div>
        </header>
        <section className="proof" aria-label="支持的 Agent、模型供应商和消息应用">
          <div className="container proof-rows">
            <div className="proof-row reveal">
              <div className="proof-label"><span data-scramble="支持的 Agent">支持的 Agent</span></div>
              <div className="marquee" data-marquee><div className="marquee-track"><div className="chip-row marquee-group">
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-claude.svg?v=20260610-icons-1" alt="Claude Desktop" /></span>Claude Desktop</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-codex-desktop.png?v=20260610-icons-1" alt="Codex 桌面应用" /></span>Codex Desktop</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-claude.svg?v=20260610-icons-1" alt="Claude Code" /></span>Claude Code</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-codex-desktop.png?v=20260610-icons-1" alt="Codex CLI" /></span>Codex CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-gemini.svg?v=20260610-icons-1" alt="Gemini CLI" /></span>Gemini CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-cursor.svg?v=20260610-icons-1" alt="Cursor CLI" /></span>Cursor CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-kiro.svg?v=20260610-icons-1" alt="Kiro CLI" /></span>Kiro CLI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-qwen.svg?v=20260610-icons-1" alt="Qwen Code" /></span>Qwen Code</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-opencode.svg?v=20260610-icons-1" alt="OpenCode" /></span>OpenCode</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-openai.svg?v=20260610-icons-1" alt="OpenAI" /></span>OpenAI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/cli-pi.svg?v=20260610-icons-1" alt="Pi" /></span>Pi</span>
                  </div></div></div>
            </div>
            <div className="proof-row reveal" data-d={1}>
              <div className="proof-label"><span data-scramble="支持的模型供应商">支持的模型供应商</span></div>
              <div className="marquee" data-marquee data-marquee-reverse><div className="marquee-track"><div className="chip-row marquee-group">
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-deepseek-color.svg?v=20260610-icons-1" alt="DeepSeek" /></span>DeepSeek</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-dashscope.svg?v=20260610-icons-1" alt="DashScope" /></span>DashScope</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-moonshot.webp?v=20260610-icons-1" alt="Kimi" /></span>Kimi</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-minimax-color.svg?v=20260610-icons-1" alt="MiniMax" /></span>MiniMax</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-zai-color.svg?v=20260610-icons-1" alt="Z.AI / GLM" /></span>Z.AI / GLM</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-openrouter-color.svg?v=20260610-icons-1" alt="OpenRouter" /></span>OpenRouter</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-azure.svg?v=20260610-icons-1" alt="Azure" /></span>Azure</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-gemini-color.svg?v=20260610-icons-1" alt="Gemini" /></span>Gemini</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-nvidia.svg?v=20260610-icons-1" alt="NVIDIA NIM" /></span>NVIDIA NIM</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-mimo.svg?v=20260610-icons-1" alt="Mimo" /></span>Mimo</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-volcengine.svg?v=20260610-icons-1" alt="VolcEngine" /></span>VolcEngine</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-zai.svg?v=20260610-icons-1" alt="Z.AI" /></span>Z.AI</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/provider-xai.svg?v=20260610-icons-1" alt="xAI" /></span>xAI</span>
                  </div></div></div>
            </div>
            <div className="proof-row reveal" data-d={2}>
              <div className="proof-label"><span data-scramble="消息应用">消息应用</span></div>
              <div className="marquee" data-marquee><div className="marquee-track"><div className="chip-row marquee-group">
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-telegram.svg?v=20260610-icons-1" alt="Telegram" /></span>Telegram</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-feishu.svg?v=20260610-icons-1" alt="飞书" /></span>飞书 / Lark</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-slack.svg?v=20260610-icons-1" alt="Slack" /></span>Slack</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-discord.svg?v=20260610-icons-1" alt="Discord" /></span>Discord</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-wechat.svg?v=20260610-icons-1" alt="微信" /></span>微信</span>
                    <span className="chip"><span className="chip-icon chip-font"><span className="material-symbols-outlined">language</span></span>Web Chat</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-wecom.svg?v=20260610-icons-1" alt="企业微信" /></span>企业微信</span>
                    <span className="chip"><span className="chip-icon"><img src="/assets/brand/channel-dingtalk.svg?v=20260610-icons-1" alt="钉钉" /></span>钉钉</span>
                  </div></div></div>
            </div>
          </div>
        </section>
        <section className="section" id="launch">
          <div className="container">
            <div className="reveal"><span className="kicker" data-scramble="Agent 启动器">Agent 启动器</span><h2 className="sec-h2 feature-title title-nowrap">用合适的<span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="模型|配置|API">模型</span></span></span>，启动合适的<span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="Agent|终端|会话">Agent</span></span></span>。</h2></div>
            <div className="feature">
              <div className="reveal">
                <p className="sec-copy">
                  自由组合 AI Agent、模型配置或 API 接口和工作目录，VibeAround 帮你用第三方 AI API 启动 Claude Desktop、Codex 桌面应用、Claude Code、Codex CLI、Gemini CLI、Qwen Code 等工具，不用反复修改各个 Agent 的配置文件。
                </p>
                <div className="feature-list">
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>AI Agent 启动器</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>跨 Agent 复用 AI API 配置</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>API Bridge 实现模型自由</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>不改动每个 Agent 自己的配置文件</div>
                </div>
              </div>
              <div className="feature-art reveal" data-d={1}>
                <figure className="product-shot product-shot--launch" aria-label="VibeAround 桌面端 Agent 启动截图">
                  <img src="/assets/vibearound-desktop-launch.webp?v=20260612-desktop-apps-2" alt="VibeAround 桌面应用启动 Claude Desktop，展示 API Bridge 配置、工作空间选择和 Codex 桌面应用支持" width={674} height={474} loading="lazy" decoding="async" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="control">
          <div className="container">
            <div className="reveal"><span className="kicker" data-scramble="远程控制">远程控制</span><h2 className="sec-h2 feature-title title-nowrap">离开电脑，保持<span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="掌控|连接|心流|在线">掌控</span></span></span>。</h2></div>
            <div className="feature reverse">
              <div className="reveal">
                <p className="sec-copy">
                  从消息应用、电脑或手机浏览器继续最近的会话。使用快捷指令切换工作目录和 AI Agent，并在 Agent 完成任务后远程预览结果。
                </p>
                <div className="feature-list">
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>消息应用直接对话</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>从上次中断的地方继续会话</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>快速切换 Workspace 和 Agent</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>远程预览 Agent 生成的结果</div>
                </div>
              </div>
              <div className="feature-art reveal" data-d={1}>
                <figure className="product-shot product-shot--preview-flow" aria-label="VibeAround 远程预览流程截图">
                  <img src="/assets/vibearound-preview-flow.png?v=20260610-real-shots-1" alt="四张手机截图，展示从消息应用发起预览、浏览器配对、网页预览和 Markdown 预览" width={2105} height={1076} loading="lazy" decoding="async" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="workspace">
          <div className="container">
            <div className="reveal"><span className="kicker" data-scramble="统一工作空间">统一工作空间</span><h2 className="sec-h2 feature-title title-nowrap">一个<span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="工作空间|界面|终端|入口">工作空间</span></span></span>，容纳所有Agent。</h2></div>
            <div className="feature">
              <div className="reveal">
                <p className="sec-copy">
                  在同一个工作空间统一协调 Agent 和会话。让多个 Agent 并行工作或协同配合，聊天不够用时，随时进入真正的 Web Terminal。
                </p>
                <div className="feature-list">
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>在一个地方管理 Agent 和会话</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>三种模式的 AI Agent 团队</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>tunnel 远程访问</div>
                  <div className="feature-item"><span className="tick"><svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-check" /></svg></span>Web Terminal</div>
                </div>
              </div>
              <div className="feature-art reveal" data-d={1}>
                <figure className="product-shot product-shot--terminal" aria-label="VibeAround Web Terminal 截图">
                  <img src="/assets/vibearound-web-terminal.png?v=20260610-real-shots-1" alt="VibeAround Web Terminal，多个 AI 编程 Agent 在浏览器分屏中并行运行" width={939} height={538} loading="lazy" decoding="async" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-alt">
          <div className="container">
            <div className="reveal">
              <span className="kicker" data-scramble="v0.6 工作空间循环">v0.6 工作空间循环</span>
              <h2 className="sec-h2 feature-title title-nowrap">每天的 Agent 工作，在这里<span className="rot-line"><span className="rotator rx-glitch"><span className="rotator-word" data-rotator data-rotator-words="开始|检阅|继续">开始</span></span></span>。</h2>
            </div>
            <div className="loop-grid">
              <div className="loop-cell reveal">
                <div className="ln" data-scramble="01">01</div>
                <h4>启动与接续</h4>
                <p>在合适的本地工作目录启动任意 Agent，接续之前的会话。</p>
              </div>
              <div className="loop-cell reveal" data-d={1}>
                <div className="ln" data-scramble="02">02</div>
                <h4>在浏览器里工作</h4>
                <p>切换 Agent、上传文件、检查输出，会话始终可见。</p>
              </div>
              <div className="loop-cell reveal" data-d={2}>
                <div className="ln" data-scramble="03">03</div>
                <h4>审查代码变更</h4>
                <p>渲染好的 diff 和产物视图，看清每个 Agent 改了什么。</p>
              </div>
              <div className="loop-cell reveal">
                <div className="ln" data-scramble="04">04</div>
                <h4>终端与预览</h4>
                <p>打开 PTY/tmux 会话，分享带鉴权的 dev server 预览。</p>
              </div>
              <div className="loop-cell reveal" data-d={1}>
                <div className="ln" data-scramble="05">05</div>
                <h4>切换 Agent 与模型供应商</h4>
                <p>在 Agent 和已保存的配置之间切换，API Bridge 负责模型路由。</p>
              </div>
              <div className="loop-cell reveal" data-d={2}>
                <div className="ln" data-scramble="06">06</div>
                <h4>在手机上继续</h4>
                <p>通过 Web Chat 或消息应用交接并继续工作。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="download">
          <div className="container">
            <div className="reveal">
              <span className="kicker" data-scramble="下载 - 最新稳定版">下载 - 最新稳定版</span>
              <h2 className="sec-h2 feature-title title-nowrap">下载 VibeAround <span data-count-version="v0.7.3" className="mono">v0.7.3</span>。</h2>
              <p className="sec-copy">最新稳定版提供 macOS、Windows 和 Linux 安装包。你的代码仓库、密钥和终端始终留在自己的电脑上。</p>
            </div>
            <div className="dl-grid">
              <a className="dl-card reveal" href="/download/mac">
                <div className="dl-os"><svg className="os-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg></div>
                <h4>macOS</h4>
                <span className="dl-meta">Apple Silicon · DMG</span>
                <span className="dl-go">下载 .dmg <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></span>
              </a>
              <a className="dl-card reveal" data-d={1} href="/download/windows">
                <div className="dl-os"><svg className="os-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801" /></svg></div>
                <h4>Windows</h4>
                <span className="dl-meta">x64 · EXE / ZIP</span>
                <span className="dl-go">下载安装包 <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></span>
              </a>
              <a className="dl-card reveal" data-d={2} href="/download/linux">
                <div className="dl-os"><svg className="os-logo" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-os-linux" /></svg></div>
                <h4>Linux</h4>
                <span className="dl-meta">x64 · AppImage / deb</span>
                <span className="dl-go">下载软件包 <svg className="home-icon" aria-hidden="true"><use href="/assets/icons.svg?v=20260611-icons-3#i-arrow-right" /></svg></span>
              </a>
            </div>
          </div>
        </section>
        <section className="section section-alt" id="faq">
          <div className="container">
            <div className="reveal">
              <span className="kicker" data-scramble="FAQ">FAQ</span>
              <h2 className="sec-h2 feature-title title-nowrap">常见问题。</h2>
            </div>
            <div className="faq-list">
              <div className="faq-item reveal" data-d={0}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-1">
                    <h4>VibeAround 是在线云服务吗？</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-1">
                    <div className="faq-a-inner">不是。它在你自己的电脑上协调本地运行的 Agent 会话，代码仓库、终端、密钥和工具都留在本地电脑，不需要使用任何云端服务器。</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={1}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-2">
                    <h4>支持哪些 AI Agent？</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-2">
                    <div className="faq-a-inner">Claude Code、Claude Desktop、Codex CLI、Codex 桌面应用、Gemini CLI、Cursor CLI、Kiro CLI、Qwen Code 和 OpenCode —— 启动时不改动 AI Agent 自己的配置文件（如 SKILL、MCP 等）。</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={2}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-3">
                    <h4>可以使用哪些模型供应商？</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-3">
                    <div className="faq-a-inner">官方 API、OpenAI 兼容 endpoint，以及 DeepSeek、DashScope、Kimi、MiniMax、Z.AI/GLM、Gemini、OpenRouter、Azure 与自定义 endpoint 等 API Bridge 配置。</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={3}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-4">
                    <h4>能用手机控制本地 Agent 吗？</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-4">
                    <div className="faq-a-inner">可以。通过浏览器和消息应用交接会话，离开电脑也能继续指挥 Agent 工作。</div>
                  </div>
                </div>
              </div>
              <div className="faq-item reveal" data-d={3}>
                <div className="faq-item-inner" data-open={0}>
                  <button className="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-5">
                    <h4>是开源项目吗？</h4>
                    <span className="faq-ico" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id="faq-a-5">
                    <div className="faq-a-inner">是。源码、Issue 和 Release Note 都在 GitHub 上。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="brand" href="#top"><img className="brand-mark" src="/assets/brand/vibearound-mark-light.svg?v=20260610-brand-2" alt="" width={26} height={26} /><span className="brand-name">Vibe<span className="brand-around">Around</span></span></a>
              <p className="footer-tag">一个本地工作空间，容纳你运行的每个 AI 编程 Agent —— 随时随地启动、接续、切换、检查与操控。</p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h5>产品</h5>
                <a href="/zh/docs/">Web 工作台</a>
                <a href="/zh/docs/provider-profiles/">API Bridge</a>
                <a href="/zh/docs/local-ai-switch/">本地 AI 切换</a>
                <a href="/zh/docs/session-handover/">Web Terminal</a>
              </div>
              <div className="footer-col">
                <h5>使用场景</h5>
                <a href="/zh/docs/codex-mobile/">Codex 手机版</a>
                <a href="/zh/docs/codex-remote/">Codex 远程</a>
                <a href="/zh/docs/claude-remote/">Claude 远程</a>
                <a href="/zh/docs/gemini-remote/">Gemini 远程</a>
              </div>
              <div className="footer-col">
                <h5>资源</h5>
                <a href="/zh/docs/">文档</a>
                <a href="/github">GitHub</a>
                <a href="/zh/privacy/">隐私政策</a>
                <a href="/zh/terms/">服务条款</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 VibeAround</span>
            <span className="mono">macOS · Windows · Linux · <span data-count-version="v0.7.3" className="mono">v0.7.3</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
