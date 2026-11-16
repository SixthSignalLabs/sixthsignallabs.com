import { withPageSocial } from "@/lib/page-social";
import type { Metadata } from "next";

import { AppLegalPage } from "../_components/app-legal-page";
import { appData, getAppUrl } from "../_data/app-data";

const document = appData.legal.privacy;

export const metadata: Metadata = withPageSocial({
  title: {
    absolute: `${document.title} | ${appData.name}`,
  },
  description: document.description,
  alternates: {
    canonical: getAppUrl("/privacy"),
  },
  openGraph: {
    url: getAppUrl("/privacy"),
    title: `${document.title} | ${appData.name}`,
    description: document.description,
  },
}, "/apps/arrowlilt/arrowlilt-app-icon.png");

export default function ArrowLiltPrivacyPage() {
  return <AppLegalPage document={document} />;
}

