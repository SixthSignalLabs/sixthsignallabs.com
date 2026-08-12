import type { Metadata } from "next";

import { LegalPage } from "../_components/legal-page";
import { privacyDocument } from "../_data/legal-documents";
import { getOryfinUrl, oryfin } from "../_data/oryfin-data";

export const metadata: Metadata = {
  title: { absolute: `${privacyDocument.title} | ${oryfin.name}` },
  description: privacyDocument.description,
  alternates: { canonical: getOryfinUrl("/privacy") },
  openGraph: {
    url: getOryfinUrl("/privacy"),
    title: `${privacyDocument.title} | ${oryfin.name}`,
    description: privacyDocument.description,
  },
};

export default function OryfinPrivacyPage() {
  return <LegalPage document={privacyDocument} />;
}
