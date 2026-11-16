import { appData as arrowlilt } from "@/app/apps/arrowlilt/_data/app-data";
import { appData as wordlilt } from "@/app/apps/wordlilt/_data/app-data";
import { appData as geopixly } from "@/app/apps/geopixly/_data/app-data";
import { appData as filesuite } from "@/app/apps/filesuite/_data/app-data";
import { appData as hyperpulse } from "@/app/apps/hyperpulse/_data/app-data";

// Register public product pages here; seo:check detects missing directory entries.
// Oryfin retains its explicit publication gate and is not a published product page.
export const appCatalog = [wordlilt, arrowlilt, geopixly, filesuite, hyperpulse].map((app) => ({
  name: app.name, path: app.canonicalBasePath, description: app.description, icon: app.appIconPath,
}));
