import Link from "next/link";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getLegalRoute, type LegalSlug, type Locale } from "@/lib/site";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalContent = {
  intro: string;
  note: string;
  sections: LegalSection[];
};

const content: Record<Locale, Record<LegalSlug, LegalContent>> = {
  en: {
    privacy: {
      intro:
        "VibeAround is designed as a local-first product. The app coordinates agents, workspaces, provider profiles, channels, and preview surfaces on the user's own machine unless the user explicitly enables external services.",
      note:
        "This page is an operational privacy guide for the current website and product direction. It will be refined as the product, hosted services, and integrations evolve.",
      sections: [
        {
          title: "Local-first boundary",
          paragraphs: [
            "Repositories, working trees, terminals, local agent processes, workspace state, and most product configuration are intended to remain on the user's computer.",
            "Remote access features, tunnels, messaging channels, model providers, and shared preview links can move data outside the machine when the user configures them. Those surfaces should be treated as privileged integrations.",
          ],
        },
        {
          title: "Website and downloads",
          paragraphs: [
            "The public website provides documentation, release links, static assets, redirects, and machine-readable release metadata. Downloads are distributed through GitHub Releases.",
            "Hosting providers, GitHub, browsers, and network intermediaries may process standard request metadata such as IP address, user agent, URL, referrer, and timestamps according to their own systems and policies.",
          ],
        },
        {
          title: "Model providers and agents",
          paragraphs: [
            "When an agent sends prompts, tool results, files, images, or code context to a configured model provider, that traffic is governed by the selected agent, provider, API endpoint, and account settings.",
            "Provider profiles and API Bridge routes make routing explicit, but they do not remove the need to review each provider's privacy policy, retention behavior, regional routing, and acceptable use terms.",
          ],
        },
        {
          title: "Channels, tunnels, and previews",
          paragraphs: [
            "Messaging channels, browser pairing, Web Terminal, handover links, tunnel-backed access, and preview shares can expose local sessions or outputs to other devices or services.",
            "Use private channels first, scope preview links, rotate exposed tokens, and disable integrations that are no longer needed.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "For privacy questions about VibeAround, open an issue in the public GitHub repository and avoid posting secrets, tokens, private repository content, or personal data in the issue body.",
          ],
        },
      ],
    },
    terms: {
      intro:
        "These terms describe the basic operating boundaries for using the VibeAround website, documentation, downloads, releases, and local-first agent workspace software.",
      note:
        "VibeAround is evolving quickly. These terms are written to make the current expectations clear while the product and documentation continue to mature.",
      sections: [
        {
          title: "Use of the software",
          paragraphs: [
            "You are responsible for how you run VibeAround, which agents you launch, which repositories you connect, which provider profiles you configure, and which remote surfaces you enable.",
            "Use the software only with workspaces, accounts, credentials, and systems that you are authorized to access.",
          ],
        },
        {
          title: "Third-party services",
          paragraphs: [
            "VibeAround can connect to model providers, GitHub Releases, messaging platforms, tunnels, browsers, terminals, and agent CLIs. Each third-party service remains governed by its own terms, policies, pricing, limits, and availability.",
            "The presence of a provider, agent, or channel in documentation does not mean that VibeAround controls that service or guarantees compatibility forever.",
          ],
        },
        {
          title: "Downloads and documentation",
          paragraphs: [
            "Release packages, checksums, notes, and source archives are published through GitHub Releases. Verify the package and platform before installation.",
            "Documentation is provided to help users install, configure, operate, and understand the product. It may contain incomplete or evolving guidance while the project changes.",
          ],
        },
        {
          title: "No warranty",
          paragraphs: [
            "VibeAround is provided as-is, without a promise that it will be uninterrupted, error-free, secure for every configuration, or suitable for every project.",
            "Agentic coding tools can modify files, run commands, call external APIs, and expose information through configured integrations. Review important actions before applying them to valuable projects.",
          ],
        },
        {
          title: "Changes",
          paragraphs: [
            "The website, documentation, product behavior, releases, and these terms may change as VibeAround evolves. Continued use after changes means you accept the updated operating boundaries.",
          ],
        },
      ],
    },
  },
  zh: {
    privacy: {
      intro:
        "VibeAround 以本地优先为核心设计。除非用户明确开启外部服务，应用主要在用户自己的电脑上协调 Agent、工作空间、Provider Profile、消息频道和预览入口。",
      note:
        "这是一份面向当前网站和产品方向的隐私说明，会随着产品、托管服务和集成能力的发展继续完善。",
      sections: [
        {
          title: "本地优先边界",
          paragraphs: [
            "代码仓库、工作树、终端、本地 Agent 进程、工作空间状态和大部分产品配置，原则上都保留在用户自己的电脑上。",
            "当用户配置模型服务商、消息频道、远程隧道、浏览器配对或共享预览链接时，相关数据可能离开本机。这些入口应当被视为高权限集成。",
          ],
        },
        {
          title: "网站与下载",
          paragraphs: [
            "公开网站提供文档、发布链接、静态资源、重定向和机器可读的发布元数据。安装包通过 GitHub Releases 分发。",
            "托管平台、GitHub、浏览器和网络中间层可能按照各自系统和政策处理常见请求元数据，例如 IP 地址、用户代理、URL、来源和时间戳。",
          ],
        },
        {
          title: "模型服务商与 Agent",
          paragraphs: [
            "当 Agent 将提示词、工具结果、文件、图片或代码上下文发送到用户配置的模型服务商时，该流量受所选 Agent、服务商、API Endpoint 和账号设置约束。",
            "Provider Profile 和 API Bridge 会让路由更明确，但用户仍需了解各服务商的隐私政策、数据保留、区域路由和使用条款。",
          ],
        },
        {
          title: "频道、隧道与预览",
          paragraphs: [
            "消息频道、浏览器配对、Web Terminal、handover 链接、隧道访问和共享预览链接，都可能把本地会话或产物暴露给其他设备或外部服务。",
            "建议先使用私有频道，限制预览链接范围，轮换已暴露的 token，并关闭不再需要的集成。",
          ],
        },
        {
          title: "联系",
          paragraphs: [
            "如果有隐私相关问题，请在 GitHub 仓库提交 issue。不要在公开 issue 中粘贴密钥、token、私有仓库内容或个人敏感信息。",
          ],
        },
      ],
    },
    terms: {
      intro:
        "这些条款说明使用 VibeAround 网站、文档、下载、发布包和本地优先 Agent 工作空间软件时的基本边界。",
      note:
        "VibeAround 仍在快速演进。这些条款用于说明当前阶段的使用预期，并会随着产品和文档成熟继续更新。",
      sections: [
        {
          title: "软件使用",
          paragraphs: [
            "用户需自行负责如何运行 VibeAround、启动哪些 Agent、连接哪些仓库、配置哪些 Provider Profile，以及开启哪些远程入口。",
            "请只在你有权访问的工作空间、账号、凭据和系统中使用该软件。",
          ],
        },
        {
          title: "第三方服务",
          paragraphs: [
            "VibeAround 可以连接模型服务商、GitHub Releases、消息平台、隧道、浏览器、终端和 Agent CLI。每个第三方服务仍受其自身条款、政策、价格、限制和可用性约束。",
            "文档中出现某个服务商、Agent 或频道，并不意味着 VibeAround 控制该服务，也不代表永久保证兼容。",
          ],
        },
        {
          title: "下载与文档",
          paragraphs: [
            "发布包、校验信息、发布说明和源码归档通过 GitHub Releases 发布。安装前请确认平台、版本和包类型。",
            "文档用于帮助用户安装、配置、运行和理解产品。项目变化期间，文档可能仍有不完整或持续调整的内容。",
          ],
        },
        {
          title: "无担保",
          paragraphs: [
            "VibeAround 按现状提供，不承诺在所有配置下都不中断、无错误、绝对安全，或适合所有项目。",
            "Agentic coding 工具可能修改文件、执行命令、调用外部 API，并通过用户配置的集成暴露信息。对重要项目执行操作前，请先审阅关键动作。",
          ],
        },
        {
          title: "变更",
          paragraphs: [
            "网站、文档、产品行为、发布包和这些条款都可能随着 VibeAround 演进而调整。变更后继续使用，即表示接受更新后的使用边界。",
          ],
        },
      ],
    },
  },
};

export function LegalPage({ locale, slug }: { locale: Locale; slug: LegalSlug }) {
  const route = getLegalRoute(locale, slug);
  const page = content[locale][slug];
  const homeHref = locale === "zh" ? "/zh/" : "/";
  const docsHref = locale === "zh" ? "/zh/docs/" : "/docs/";

  if (!route) return null;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader locale={locale} />
      <main className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 lg:py-20">
        <nav className="mb-10 flex flex-wrap gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link className="hover:text-foreground" href={homeHref}>
            VibeAround
          </Link>
          <span>/</span>
          <Link className="hover:text-foreground" href={docsHref}>
            {locale === "zh" ? "文档" : "Docs"}
          </Link>
          <span>/</span>
          <span className="text-foreground">{route.title}</span>
        </nav>
        <header className="border-b pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{route.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{route.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{page.intro}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {locale === "zh" ? "最后更新：" : "Last updated:"} {route.updated}
          </p>
        </header>
        <div className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-100">
          {page.note}
        </div>
        <div className="mt-10 space-y-10">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
