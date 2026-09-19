import type { Metadata } from "next";

import { AppLegalPage } from "../_components/app-legal-page";
import { appData, getAppUrl } from "../_data/app-data";

const document = appData.legal.privacy;

export const metadata: Metadata = {
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
};

export default function AppPrivacyPage() {
  return <AppLegalPage document={document} />;
}
