import type { Metadata } from "next";
import { LegacyHomePage } from "@/components/site/legacy-home";
import { homeJsonLd, JsonLd, seoKeywords } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "VibeAround - 让你的 AI 编程 Agent 一直在身边",
  description:
    "VibeAround 是本地优先的 AI Agent 工作空间，让 AI 编程 Agent 在你自己的电脑上并行工作，并从桌面、浏览器、手机和消息频道继续会话。",
  keywords: [...seoKeywords, "AI Agent 工作空间", "远程编程", "本地优先", "模型 Provider 切换"],
  alternates: {
    canonical: "/zh/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "VibeAround - 让你的 AI 编程 Agent 一直在身边",
    description:
      "VibeAround 是本地优先的 AI Agent 工作空间，让 AI 编程 Agent 在你自己的电脑上并行工作，并从桌面、浏览器、手机和消息频道继续会话。",
    url: `${site.url}/zh/`,
    locale: "zh_CN",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "VibeAround local AI coding agents preview" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("zh")} />
      <LegacyHomePage locale="zh" />
    </>
  );
}
