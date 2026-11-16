import { appCatalog } from "@/lib/app-catalog";
import { SITE_URL } from "@/lib/seo-config";

export function AppSchema({ path }: { path: string }) {
  const app = appCatalog.find((item) => item.path === path);
  if (!app) return null;
  const data = {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    name: app.name, description: app.description, operatingSystem: "Android",
    url: new URL(app.path, SITE_URL).href,
    image: app.icon ? new URL(app.icon, SITE_URL).href : undefined,
    publisher: { "@type": "Organization", name: "Sixth Signal Labs", url: SITE_URL },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
