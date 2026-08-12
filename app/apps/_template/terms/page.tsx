import type { Metadata } from "next";

import { AppLegalPage } from "../_components/app-legal-page";
import { appData, getAppUrl } from "../_data/app-data";

const document = appData.legal.terms;

export const metadata: Metadata = {
  title: {
    absolute: `${document.title} | ${appData.name}`,
  },
  description: document.description,
  alternates: {
    canonical: getAppUrl("/terms"),
  },
  openGraph: {
    url: getAppUrl("/terms"),
    title: `${document.title} | ${appData.name}`,
    description: document.description,
  },
};

export default function AppTermsPage() {
  return <AppLegalPage document={document} />;
}
