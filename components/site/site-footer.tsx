import Link from "next/link";
import { site, type Locale } from "@/lib/site";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const docsHref = locale === "en" ? "/docs/" : "/zh/docs/";
  const privacyHref = locale === "en" ? "/privacy/" : "/zh/privacy/";
  const termsHref = locale === "en" ? "/terms/" : "/zh/terms/";

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 text-sm text-muted-foreground sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Link href={locale === "en" ? "/" : "/zh/"} className="mb-3 flex items-center gap-2 text-foreground">
            <img src="/assets/brand/vibearound-mark.svg" alt="" className="size-6" />
            <span className="font-semibold">VibeAround</span>
          </Link>
          <p className="max-w-xl">
            {locale === "en"
              ? "Local-first AI coding agent workspace for desktop, browser, terminal, mobile, messaging, provider profiles, and previews."
              : "本地优先的 AI 编程 Agent 工作空间，连接桌面、浏览器、终端、手机、消息频道、Provider Profile 和预览链接。"}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <Link href={docsHref}>{locale === "en" ? "Docs" : "文档"}</Link>
          <Link href={site.release}>{locale === "en" ? "Download" : "下载"}</Link>
          <Link href={site.github}>GitHub</Link>
          <Link href={privacyHref}>{locale === "en" ? "Privacy" : "隐私政策"}</Link>
          <Link href={termsHref}>{locale === "en" ? "Terms" : "服务条款"}</Link>
        </div>
      </div>
    </footer>
  );
}
