import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { site, type Locale } from "@/lib/site";

export function baseOptions(locale: Locale): BaseLayoutProps {
  const switchHref = locale === "en" ? "/zh/docs/" : "/docs/";

  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <img src="/assets/brand/vibearound-mark.svg" alt="" className="size-6" />
          <span>{site.name}</span>
        </span>
      ),
    },
    links: [
      { text: "Home", url: locale === "en" ? "/" : "/zh/" },
      { text: "Download", url: locale === "en" ? "/docs/download/" : "/zh/docs/download/" },
      { text: locale === "en" ? "中文" : "English", url: switchHref },
      { text: "GitHub", url: site.github, external: true },
    ],
    githubUrl: site.github,
    searchToggle: {
      enabled: true,
    },
    themeSwitch: {
      enabled: true,
    },
  } satisfies BaseLayoutProps;
}
