export const site = {
  name: "VibeAround",
  url: "https://vibearound.ai",
  description:
    "A workspace for AI coding agents: orchestrate and launch them locally, then control and preview their work remotely.",
  github: "https://github.com/jazzenchen/VibeAround",
  release: "https://github.com/jazzenchen/VibeAround/releases/latest",
  demo: "https://youtu.be/6kxNKTMz-AM",
  ogImage: "https://vibearound.ai/assets/og-image-20260620.png",
};

export type Locale = "en" | "zh";

export const localePath = (locale: Locale, path: string) => {
  if (locale === "en") return path;
  if (path === "/") return "/zh/";
  return `/zh${path}`;
};

export const withTrailingSlash = (path: string) => {
  if (!path || path === "/") return "/";
  if (path.includes(".") || path.endsWith("/")) return path;
  return `${path}/`;
};

export const navItems = {
  en: [
    { href: "/docs/", label: "Docs" },
    { href: "/docs/remote-coding/", label: "Remote Coding" },
    { href: "/docs/codex-mobile/", label: "Codex Mobile" },
    { href: "/docs/download/", label: "Download" },
  ],
  zh: [
    { href: "/zh/docs/", label: "文档" },
    { href: "/zh/docs/remote-coding/", label: "远程编程" },
    { href: "/zh/docs/codex-mobile/", label: "Codex 手机工作流" },
    { href: "/zh/docs/download/", label: "下载" },
  ],
} satisfies Record<Locale, Array<{ href: string; label: string }>>;

export const homeCopy = {
  en: {
    eyebrow: "Unified AI Agent Workspace",
    title: "Workspace for AI coding agents.",
    subtitle:
      "Orchestrate and launch AI coding agents locally, then control and preview their work remotely.",
    primary: "Download latest",
    secondary: "Read the docs",
    facts: ["Runs on your own computer", "Desktop + browser + mobile", "Messaging channels", "Provider profiles"],
  },
  zh: {
    eyebrow: "统一的 AI Agent 工作空间",
    title: "让你的 AI 编程 Agent 一直在身边。",
    subtitle:
      "让 AI 编程 Agent 在你自己的电脑上并行工作，即使离开电脑，也能远程接入、继续之前的会话，并预览它们生成的结果。",
    primary: "下载最新版",
    secondary: "阅读文档",
    facts: ["本地优先", "桌面 + 浏览器 + 手机", "消息频道", "Provider Profile"],
  },
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
  facts: string[];
}>;

export const legalSlugs = ["privacy", "terms"] as const;
export type LegalSlug = (typeof legalSlugs)[number];

export const legalRoutes = {
  en: [
    {
      slug: "privacy",
      title: "Privacy Policy",
      description:
        "How VibeAround's product, website, downloads, provider profiles, channels, and remote surfaces should be understood from a privacy perspective.",
      eyebrow: "Legal",
      updated: "2026-06-13",
    },
    {
      slug: "terms",
      title: "Terms of Use",
      description:
        "Terms for using the VibeAround website, documentation, downloads, releases, and local agent workspace software.",
      eyebrow: "Legal",
      updated: "2026-06-13",
    },
  ],
  zh: [
    {
      slug: "privacy",
      title: "隐私政策",
      description:
        "说明 VibeAround 本地优先产品、网站、下载、Provider Profile、消息频道和远程访问能力中的隐私边界。",
      eyebrow: "法律",
      updated: "2026-06-13",
    },
    {
      slug: "terms",
      title: "服务条款",
      description: "说明 VibeAround 网站、文档、下载、发布包和本地优先 Agent 工作空间软件的使用条款。",
      eyebrow: "法律",
      updated: "2026-06-13",
    },
  ],
} satisfies Record<
  Locale,
  Array<{
    slug: LegalSlug;
    title: string;
    description: string;
    eyebrow: string;
    updated: string;
  }>
>;

export type LegalRoute = (typeof legalRoutes)[Locale][number];

export function isLegalSlug(slug: string): slug is LegalSlug {
  return (legalSlugs as readonly string[]).includes(slug);
}

export function getLegalRoute(locale: Locale, slug: string) {
  if (!isLegalSlug(slug)) return undefined;
  return legalRoutes[locale].find((route) => route.slug === slug);
}
