import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo-config";
import { publicRoutes } from "@/lib/public-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastmod until genuine page modification dates are maintained.
  return publicRoutes().map((path) => ({ url: new URL(path, SITE_URL).href }));
}
