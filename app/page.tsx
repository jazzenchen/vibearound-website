import type { Metadata } from "next";
import { LegacyHomePage } from "@/components/site/legacy-home";
import { homeJsonLd, JsonLd, seoKeywords } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "VibeAround - Keep your AI coding agents around",
  description:
    "Run AI coding agents side by side on your computer. Control them from anywhere, continue previous sessions, and preview what they build.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "VibeAround - Keep your AI coding agents around",
    description:
      "Run AI coding agents side by side on your computer. Control them from anywhere, continue previous sessions, and preview what they build.",
    url: site.url,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "VibeAround local AI coding agents preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeAround - Keep your AI coding agents around",
    description:
      "Launch the right agent with the right model, continue sessions from anywhere, and coordinate every local AI coding agent in one workspace.",
    images: [site.ogImage],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("en")} />
      <LegacyHomePage locale="en" />
    </>
  );
}
