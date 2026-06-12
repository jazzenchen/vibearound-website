import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/site/legal-page";
import { JsonLd, legalPageJsonLd, seoKeywords } from "@/lib/seo";
import { getLegalRoute, legalRoutes, site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getRoute(slug: string) {
  return getLegalRoute("zh", slug);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return legalRoutes.zh.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  return {
    title: route.title,
    description: route.description,
    keywords: seoKeywords,
    alternates: {
      canonical: `/zh/${route.slug}/`,
      languages: {
        en: `/${route.slug}/`,
        "zh-CN": `/zh/${route.slug}/`,
      },
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: `${site.url}/zh/${route.slug}/`,
      type: "website",
      locale: "zh_CN",
      images: [{ url: site.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [site.ogImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  return (
    <div lang="zh-CN">
      <JsonLd data={legalPageJsonLd(route, "zh")} />
      <LegalPage locale="zh" slug={route.slug} />
    </div>
  );
}
