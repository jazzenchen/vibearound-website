import type { Metadata } from "next";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { docSeoKeywords } from "@/lib/keyword-map";
import { zhSource } from "@/lib/source";
import { JsonLd, docsPageJsonLd } from "@/lib/seo";
import { site, withTrailingSlash } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export function generateStaticParams() {
  return zhSource.generateParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = zhSource.getPage(slug);
  if (!page) notFound();
  const pageUrl = withTrailingSlash(page.url);
  const enUrl = withTrailingSlash(page.url.replace(/^\/zh/, ""));
  const keywords = docSeoKeywords("zh", page.slugs);

  return {
    title: page.data.title,
    description: page.data.description,
    keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: enUrl,
        "zh-CN": pageUrl,
        "x-default": enUrl,
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
  const page = zhSource.getPage(slug);
  if (!page) notFound();
  const pageUrl = withTrailingSlash(page.url);
  const keywords = docSeoKeywords("zh", page.slugs);

  const MDX = page.data.body;

  return (
    <div lang="zh-CN">
      <DocsPage toc={page.data.toc}>
        <JsonLd
          data={docsPageJsonLd({
            title: page.data.title,
            description: page.data.description ?? "",
            keywords,
            url: pageUrl,
            locale: "zh",
          })}
        />
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <div className="mb-6 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-500/50 dark:bg-amber-500/10 dark:text-amber-100">
          <strong>文档提示：</strong>当前文档全部由 Codex 生成，正在积极审阅、扩充和优化中。
        </div>
        <DocsBody>
          <MDX
            components={{
              ...defaultMdxComponents,
              a: createRelativeLink(zhSource, page),
            }}
          />
        </DocsBody>
      </DocsPage>
    </div>
  );
}
