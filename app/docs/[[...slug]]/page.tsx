import type { Metadata } from "next";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { enSource } from "@/lib/source";
import { JsonLd, docsPageJsonLd } from "@/lib/seo";
import { site, withTrailingSlash } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export function generateStaticParams() {
  return enSource.generateParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = enSource.getPage(slug);
  if (!page) notFound();
  const pageUrl = withTrailingSlash(page.url);

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: pageUrl,
        "zh-CN": withTrailingSlash(`/zh${page.url}`),
        "x-default": pageUrl,
      },
    },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: `${site.url}${pageUrl}`,
      images: [{ url: site.ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = enSource.getPage(slug);
  if (!page) notFound();
  const pageUrl = withTrailingSlash(page.url);

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <JsonLd data={docsPageJsonLd({ title: page.data.title, description: page.data.description ?? "", url: pageUrl, locale: "en" })} />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="mb-6 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-500/50 dark:bg-amber-500/10 dark:text-amber-100">
        <strong>Documentation notice:</strong> these docs are currently generated with Codex and are being actively reviewed, expanded, and refined.
      </div>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(enSource, page),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}
