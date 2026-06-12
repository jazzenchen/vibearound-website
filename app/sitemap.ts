import type { MetadataRoute } from "next";
import { enSource, zhSource } from "@/lib/source";
import { legalRoutes, site, withTrailingSlash } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-13T00:00:00.000Z");
  const urls: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/zh/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...legalRoutes.en.map((route) => ({
      url: `${site.url}/${route.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
    ...legalRoutes.zh.map((route) => ({
      url: `${site.url}/zh/${route.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.25,
    })),
    ...enSource.getPages().map((page) => ({
      url: `${site.url}${withTrailingSlash(page.url)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.slugs.length === 0 ? 0.85 : 0.75,
    })),
    ...zhSource.getPages().map((page) => ({
      url: `${site.url}${withTrailingSlash(page.url)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.slugs.length === 0 ? 0.85 : 0.75,
    })),
  ];

  return urls;
}
