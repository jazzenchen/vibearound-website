# Search Visibility Keyword Matrix

Updated: 2026-06-13

This document maps search demand to VibeAround pages. It is a maintenance artifact, not a public promise that a search engine will rank a page for a specific query.

Search traffic cannot be configured directly. We can only make the page intent, content, internal links, structured data, and external references clear enough that search engines and AI answer engines can confidently match the page to a query.

## Current Signals

| Source | Signal | Interpretation |
| --- | --- | --- |
| Google Search Console | `vibearound` is the main click driver; `vibearound proxy` has early impressions. | Brand intent already works. Expand non-brand pages around remote access, provider routing, and bridge language. |
| Bing Webmaster Tools | Search Performance showed 20 clicks and 93 impressions for the selected site window before the new sitemap was resubmitted. | Bing has enough data to iterate against, but the new 60-URL sitemap still needs processing time. |
| Bing Webmaster Tools | Old sitemap discovery was 26 URLs; the refreshed sitemap has 60 URLs. | Expect query/page mix to change after processing. Recheck in 7-14 days. |
| External SERP checks | Results cluster around Claude Code Remote Control, Codex mobile access, OpenCode remote bots, local desktop workspaces, and API/provider switching. | VibeAround should own "local-first, multi-agent, remote-access" phrasing rather than only brand terms. |

## External Reference Signals

These are not copied as product claims. They explain why the matrix emphasizes remote control, mobile continuation, local sessions, desktop workspaces, and provider switching.

| Signal | Reference |
| --- | --- |
| Claude Code has official remote-control language around continuing local sessions from phone, tablet, or browser. | [Claude Code Remote Control docs](https://code.claude.com/docs/en/remote-control) |
| Codex mobile/anywhere language emphasizes monitoring and steering coding tasks across devices while work stays connected to the machine or environment where Codex runs. | [OpenAI: Work with Codex from anywhere](https://openai.com/index/work-with-codex-from-anywhere/) |
| OpenCode positions itself as an AI coding agent for terminal, IDE, and desktop with multi-session behavior. | [OpenCode](https://opencode.ai/) |
| Community discussions show recurring demand for controlling Codex/OpenCode/Claude-style agents from phones, browsers, Discord, Telegram, or similar remote surfaces. | [Hacker News: remote-opencode](https://news.ycombinator.com/item?id=47021346) |

## Priority Keyword Groups

| Priority | Query Cluster | Search Intent | Primary Page | Supporting Pages | Content Action |
| --- | --- | --- | --- | --- | --- |
| P0 | `VibeAround`, `VibeAround download`, `VibeAround docs` | Brand navigation and install | `/docs/download/`, `/docs/` | `/`, `/zh/docs/download/` | Keep release metadata current, ensure download page mentions platforms and GitHub Releases. |
| P0 | `remote coding with local AI agents`, `remote control coding agent`, `continue coding from phone` | User wants to keep local work reachable remotely | `/docs/remote-coding/` | `/docs/session-handover/`, `/docs/remote-messaging-terminal/`, `/docs/local-first-security/` | Make the page explicitly compare local remote access with cloud IDE movement. |
| P0 | `Codex CLI from phone`, `remote Codex CLI`, `control Codex from mobile` | Codex user wants mobile continuation | `/docs/codex-mobile/` | `/docs/codex-remote/`, `/docs/remote-coding/`, `/docs/provider-profiles/` | Include independent-software disclaimer, setup path, and when to use VibeAround alongside official options. |
| P0 | `Claude Code remote access`, `Claude Code Remote Control`, `Claude Code from phone` | Claude Code user wants mobile/browser continuation | `/docs/claude-remote/` | `/docs/claude-code-switcher/`, `/docs/local-first-security/` | Mention official Remote Control as related context while positioning VibeAround as local workflow coordination. |
| P1 | `AI coding agent desktop app`, `multi agent desktop workspace`, `AI agents side by side` | User compares desktop workspaces for agent orchestration | `/docs/unified-workspace/` | `/docs/agent-launch/`, `/docs/supported-agents/` | Strengthen language around multiple sessions, state, runtime health, and parallel agents. |
| P1 | `OpenCode remote access`, `OpenCode from phone`, `OpenCode messaging workflow` | OpenCode user wants remote or messaging control | `/docs/opencode-remote/` | `/docs/remote-messaging-terminal/`, `/docs/channels/` | Make Discord/Telegram-style intent visible without overclaiming specific integration behavior. |
| P1 | `Gemini CLI remote access`, `Gemini CLI from phone` | Gemini CLI user wants mobile or remote access | `/docs/gemini-remote/` | `/docs/remote-coding/`, `/docs/live-preview/` | Mirror Codex/Claude page structure for scannability. |
| P1 | `Claude Code provider switcher`, `AI provider switcher`, `OpenAI compatible API bridge` | User wants model/provider routing | `/docs/provider-profiles/`, `/docs/claude-code-switcher/` | `/docs/providers/`, `/docs/local-ai-switch/` | Tie "provider profile", "API Bridge", "model alias", and "OpenAI/Anthropic/Gemini-compatible" phrasing together. |
| P1 | `AI coding agent security`, `local-first AI security`, `remote coding security` | User is evaluating risk | `/docs/local-first-security/` | `/docs/channels/`, `/docs/remote-messaging-terminal/` | Make threat boundaries explicit: local host, provider traffic, tunnels, messaging, browser pairing. |
| P2 | `AI coding live preview`, `preview local dev server remotely`, `share local preview link` | User wants to inspect outputs remotely | `/docs/live-preview/` | `/docs/remote-coding/`, `/docs/session-handover/` | Add examples for dev server, Markdown, HTML, generated assets, owner/scoped links. |
| P2 | `supported AI coding agents`, `Claude Code Codex Gemini OpenCode` | User checks compatibility | `/docs/supported-agents/` | `/docs/agent-launch/`, `/docs/providers/` | Keep list current and avoid implying vendor affiliation. |
| P2 | `VibeAround troubleshooting`, `remote coding not working`, `provider profile troubleshooting` | User has an operational issue | `/docs/troubleshooting/` | Related setup pages | Expand with symptom-driven sections as support questions arrive. |

## English Keyword System

English search behavior spans broad category terms, exact tool names, remote-control workflows, desktop workspace comparisons, provider routing, and security/troubleshooting questions. The strategy should cover a wide universe, but each page should still have a narrow ownership role.

| Layer | Better English Terms | Why It Matters | Primary Pages |
| --- | --- | --- | --- |
| Category | `AI coding assistant`, `AI code assistant`, `AI coding agent`, `coding agent`, `agentic coding`, `vibe coding`, `AI developer tools` | Captures top-of-funnel users who know the category but not VibeAround. | `/docs/`, `/docs/why-vibearound/`, `/docs/supported-agents/` |
| Product Shape | `AI agent workspace`, `AI coding workspace`, `AI agent desktop app`, `agentic coding workspace`, `AI agent control panel`, `multi-agent coding` | Positions VibeAround as a workspace/control layer, not another single model chat UI. | `/docs/unified-workspace/`, `/docs/agent-launch/` |
| Remote Access | `remote coding`, `remote development with AI agents`, `remote control coding agent`, `control coding agent from phone`, `local workspace remote access`, `local session remote access`, `cloud IDE alternative`, `keep code local remote coding` | Best non-brand intent for VibeAround's local-first remote access story. | `/docs/remote-coding/`, `/docs/session-handover/`, `/docs/local-first-security/` |
| Codex Intent | `Codex CLI from phone`, `Codex mobile workflow`, `Codex remote control`, `Codex remote connections`, `Codex mobile setup`, `monitor Codex from phone`, `Codex SSH alternative` | Codex mobile/remote access is a fast-moving query family with strong tool-specific intent. | `/docs/codex-mobile/`, `/docs/codex-remote/` |
| Claude Intent | `Claude Code remote access`, `Claude Code Remote Control`, `Claude Code mobile`, `control Claude Code from phone`, `Claude Code web vs local`, `continue Claude Code session` | Users often compare official remote control, web, and local-machine workflows. | `/docs/claude-remote/` |
| OpenCode/Gemini Intent | `OpenCode remote access`, `OpenCode mobile workflow`, `OpenCode Telegram`, `OpenCode Discord`, `Gemini CLI remote access`, `control Gemini CLI from phone` | Tool-specific pages should capture exact agent names and remote surfaces. | `/docs/opencode-remote/`, `/docs/gemini-remote/` |
| Provider/API | `AI provider profiles`, `LLM provider switcher`, `OpenAI compatible API bridge`, `Anthropic API bridge`, `Gemini API bridge`, `custom LLM endpoint`, `model alias routing`, `AI API gateway`, `OpenRouter DeepSeek provider profile` | High-intent technical searches from users already trying to route coding agents across providers. | `/docs/provider-profiles/`, `/docs/providers/`, `/docs/claude-code-switcher/`, `/docs/local-ai-switch/` |
| Messaging | `AI agent messaging bot`, `Telegram AI coding agent`, `Slack AI coding agent`, `Discord AI coding agent`, `Lark Feishu AI agent`, `remote terminal for AI agents` | Messaging surfaces are a clear differentiator and should not be buried under generic remote coding. | `/docs/channels/`, `/docs/remote-messaging-terminal/` |
| Preview | `AI coding live preview`, `preview local dev server remotely`, `remote preview local development`, `preview AI generated code`, `share local preview link` | Captures review/inspection intent after an agent has produced output. | `/docs/live-preview/` |
| Security | `local-first AI security`, `keep code local AI`, `AI coding privacy`, `remote terminal security`, `provider data privacy`, `AI agent tunnel safety` | Trust and risk queries are critical for local-control products. | `/docs/local-first-security/` |
| Troubleshooting | `AI coding agent troubleshooting`, `Codex remote not working`, `Claude Code remote not working`, `Web Terminal connection issue`, `AI provider switcher not working` | Support intent should be turned into docs pages instead of scattered issue replies. | `/docs/troubleshooting/` |

## English Prioritization

| Priority | Target Query Family | Reason |
| --- | --- | --- |
| P0 | `remote control coding agent`, `control coding agent from phone`, `local workspace remote access`, `cloud IDE alternative` | Directly matches the core value: remote control without moving the workspace. |
| P0 | `Codex CLI from phone`, `Codex remote connections`, `Claude Code Remote Control`, `Claude Code mobile` | Tool-specific remote access is likely to produce high-intent traffic. |
| P0 | `OpenAI compatible API bridge`, `Claude Code provider switcher`, `LLM provider switcher`, `custom LLM endpoint` | Technical users searching these terms are close to configuration or adoption. |
| P1 | `AI agent workspace`, `AI coding workspace`, `AI agent desktop app`, `multi-agent coding` | Builds the category language VibeAround should own. |
| P1 | `Telegram AI coding agent`, `Slack AI coding agent`, `Discord AI coding agent`, `remote terminal for AI agents` | Differentiates VibeAround's messaging and terminal surfaces. |
| P1 | `keep code local AI`, `local-first AI security`, `AI coding privacy` | Trust-building traffic; important for users evaluating remote-control tools. |
| P2 | `AI coding assistant`, `AI code assistant`, `agentic coding`, `vibe coding tools` | Broad category traffic; useful after the more specific pages have authority. |

## Chinese Keyword System

Chinese search behavior is mixed-language and intent-heavy. A stronger Chinese strategy should not simply translate English keywords. The site should cover the words Chinese developers actually use when they search for tools, guides, comparisons, and troubleshooting.

| Layer | Better Chinese Terms | Why It Matters | Primary Pages |
| --- | --- | --- | --- |
| Category | `AI 编程助手`, `AI 代码助手`, `AI 编程 Agent`, `编程智能体`, `代码智能体` | These are broader than "coding agent" and match Chinese readers who do not consistently use the English term. | `/zh/docs/`, `/zh/docs/supported-agents/` |
| Product Shape | `AI Agent 工作台`, `AI Agent 控制台`, `AI 编程 Agent 工作空间`, `多 Agent 桌面工作空间` | Describes VibeAround as a workspace/control surface rather than only a single assistant. | `/zh/docs/unified-workspace/`, `/zh/docs/agent-launch/` |
| Remote Access | `手机远程控制`, `手机继续编程`, `手机远程控制电脑编程`, `本地会话远程访问`, `远程开发`, `云 IDE 替代` | This is the strongest non-brand intent: users want to leave the desk while local tools keep running. | `/zh/docs/remote-coding/`, `/zh/docs/session-handover/` |
| Codex Intent | `Codex CLI 手机`, `手机控制 Codex`, `iPhone 访问 Codex CLI`, `远程 Codex CLI`, `手机查看 Codex 进度` | Chinese search results show explicit demand for phone access to Codex CLI and local Codex workflows. | `/zh/docs/codex-mobile/`, `/zh/docs/codex-remote/` |
| Claude Intent | `Claude Code 远程控制`, `Claude Code Remote Control`, `手机使用 Claude Code`, `继续 Claude Code 会话`, `Claude Code 本地会话` | Users often keep the official English feature name while searching in Chinese. | `/zh/docs/claude-remote/` |
| OpenCode/Gemini Intent | `OpenCode 远程控制`, `OpenCode Telegram`, `OpenCode Discord`, `Gemini CLI 远程访问`, `手机使用 Gemini CLI` | Tool-specific pages should capture mixed Chinese/English queries rather than only generic remote-coding searches. | `/zh/docs/opencode-remote/`, `/zh/docs/gemini-remote/` |
| Provider/API | `Claude Code 切换模型`, `Claude Code 第三方模型`, `Claude Code 接入 DeepSeek`, `OpenRouter 接入 Claude Code`, `OpenAI 兼容接口`, `自定义 API Endpoint`, `模型路由` | Chinese users commonly search by provider workaround, cost routing, and "third-party model" language. | `/zh/docs/provider-profiles/`, `/zh/docs/claude-code-switcher/`, `/zh/docs/providers/` |
| Messaging | `飞书控制 AI Agent`, `Telegram 控制 AI Agent`, `企业微信控制 AI Agent`, `钉钉 AI Agent`, `消息应用控制 AI Agent` | VibeAround's channel capability has a natural Chinese distribution surface. | `/zh/docs/channels/`, `/zh/docs/remote-messaging-terminal/` |
| Security | `本地优先 AI 安全`, `代码不上传云端`, `本地运行 AI Agent`, `远程终端安全`, `模型 Provider 隐私` | Remote-control tools need trust language; security pages should answer these queries directly. | `/zh/docs/local-first-security/` |
| Troubleshooting | `手机连接不上 Agent`, `Web Terminal 连接失败`, `模型切换失败`, `Tunnel 访问失败`, `Provider Profile 排障` | Support intent should become docs content, not only GitHub issues or chat support. | `/zh/docs/troubleshooting/` |

## Chinese Prioritization

| Priority | Target Query Family | Reason |
| --- | --- | --- |
| P0 | `手机远程控制 Claude Code/Codex/OpenCode`, `手机继续本地会话`, `本地会话远程访问` | Directly matches VibeAround's strongest product difference and current market demand. |
| P0 | `Claude Code 切换模型`, `Claude Code 接入 DeepSeek/OpenRouter`, `OpenAI 兼容接口` | High-intent technical searches from users already configuring coding agents. |
| P1 | `AI Agent 工作台`, `AI 编程 Agent 工作空间`, `多 Agent 并行开发` | Helps VibeAround own category language beyond brand searches. |
| P1 | `飞书/Telegram/企业微信 控制 AI Agent` | Good fit for Chinese distribution and messaging-channel workflows. |
| P1 | `代码不上传云端`, `本地运行 AI Agent`, `远程终端安全` | Trust-building searches; useful for conversion even if volume is lower. |
| P2 | `AI 编程助手安装`, `支持哪些 AI 编程助手`, `AI 编程工具排障` | Broader top-of-funnel terms; useful after the core pages are stronger. |

## Page-Level Ownership

| Page | Primary Role | Main Keyword Family |
| --- | --- | --- |
| `/docs/` | Documentation hub | VibeAround docs, local AI agent manual |
| `/docs/quick-start/` | First successful session | quick start, first AI coding agent workflow |
| `/docs/installation/` | Install prerequisites and platform setup | install VibeAround, setup AI coding agent workspace |
| `/docs/download/` | Release and package navigation | VibeAround download, latest release |
| `/docs/remote-coding/` | Non-brand remote access landing page | remote coding, local workspace remote access |
| `/docs/codex-mobile/` | Codex mobile intent | Codex CLI from phone, remote Codex CLI |
| `/docs/claude-remote/` | Claude remote intent | Claude Code remote access, Claude Code Remote Control |
| `/docs/opencode-remote/` | OpenCode remote intent | OpenCode remote access, OpenCode from phone |
| `/docs/provider-profiles/` | Provider routing intent | API Bridge, provider profile, model switcher |
| `/docs/local-first-security/` | Security and privacy intent | local-first AI security, remote coding security |
| `/docs/unified-workspace/` | Multi-agent workspace intent | AI coding agent desktop app, multi-agent workspace |

## Measurement Routine

1. Weekly: export GSC and Bing query data for the last 28 days.
2. Group each query into brand, remote access, agent-specific, provider/API, security, troubleshooting, or unknown.
3. For queries with impressions but low CTR, adjust title and description first.
4. For queries with low average position but clear relevance, expand the target page body and add internal links from related pages.
5. For queries that do not match an existing page, create a page only when the search intent is distinct enough to deserve one.
6. Recheck after sitemap processing and crawl windows, usually 7-14 days.

## Rules

- Do not create thin keyword pages.
- Do not rely on `meta keywords`; they are support metadata, not a ranking switch.
- Do not hide SEO-only text from users.
- Prefer precise reader language: install, continue, control, route, preview, secure, troubleshoot.
- Keep vendor names factual and avoid affiliation claims.
- When a query has commercial or ecosystem intent, answer the comparison directly instead of forcing readers back to the homepage.
