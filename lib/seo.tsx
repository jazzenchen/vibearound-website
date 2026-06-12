import { latestRelease } from "@/lib/release";
import { site, type LegalRoute, type Locale } from "@/lib/site";

export const seoKeywords = [
  "VibeAround",
  "AI coding agents",
  "local AI coding agent",
  "remote coding",
  "Codex CLI",
  "Codex desktop app",
  "Claude Code",
  "Claude Desktop",
  "Gemini CLI",
  "OpenCode",
  "AI provider switcher",
  "API Bridge",
  "local-first workspace",
  "web terminal",
  "session handover",
  "live preview",
];

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function homeJsonLd(locale: Locale) {
  const isZh = locale === "zh";
  const url = isZh ? `${site.url}/zh/` : `${site.url}/`;
  const docsUrl = isZh ? `${site.url}/zh/docs/` : `${site.url}/docs/`;
  const name = isZh ? "VibeAround - 统一的 AI Agent 工作空间" : "VibeAround - Keep your AI coding agents around";
  const description = isZh
    ? "VibeAround 是本地优先的 AI Agent 工作空间，让 AI 编程 Agent 在自己的电脑上并行工作，并从桌面、浏览器、手机和消息频道继续会话。"
    : "VibeAround is a local-first desktop app and web workspace that keeps AI coding agents reachable across desktop, browser, terminal, mobile, and messaging.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/assets/vibearound-logo.png`,
        sameAs: [site.github],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: ["en", "zh-CN"],
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name,
        url,
        description,
        inLanguage: isZh ? "zh-CN" : "en",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#software` },
        primaryImageOfPage: site.ogImage,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#software`,
        name: site.name,
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "AI coding agent orchestration",
        operatingSystem: ["macOS", "Windows", "Linux"],
        description,
        url,
        image: site.ogImage,
        downloadUrl: latestRelease.latestUrl,
        installUrl: latestRelease.latestUrl,
        releaseNotes: latestRelease.releaseUrl,
        softwareVersion: latestRelease.version,
        datePublished: latestRelease.publishedAt,
        codeRepository: site.github,
        isAccessibleForFree: true,
        audience: { "@type": "Audience", audienceType: "Software developers" },
        featureList: [
          "AI agent launcher",
          "Provider profiles",
          "API Bridge",
          "Messaging app channels",
          "Session handover",
          "Web Terminal",
          "Live Preview",
          "Local-first workspace",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          url: latestRelease.latestUrl,
        },
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "SiteNavigationElement",
        name: isZh ? "文档" : "Documentation",
        url: docsUrl,
      },
    ],
  };
}

export function legalPageJsonLd(route: LegalRoute, locale: Locale) {
  const path = locale === "zh" ? `/zh/${route.slug}/` : `/${route.slug}/`;
  const url = `${site.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: route.title,
    url,
    description: route.description,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#software` },
    dateModified: route.updated,
    primaryImageOfPage: site.ogImage,
  };
}

export function docsPageJsonLd({
  title,
  description,
  url,
  locale,
}: {
  title: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${site.url}${url}#article`,
    headline: title,
    description,
    url: `${site.url}${url}`,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    image: site.ogImage,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/assets/vibearound-logo.png`,
      },
    },
    mainEntityOfPage: `${site.url}${url}`,
  };
}
