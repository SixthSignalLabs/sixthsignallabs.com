import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/apps/oryfin", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/apps/oryfin/support", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/apps/oryfin/privacy", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/apps/oryfin/terms", changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
