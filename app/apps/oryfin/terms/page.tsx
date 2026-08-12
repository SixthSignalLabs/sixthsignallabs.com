import type { Metadata } from "next";

import { LegalPage } from "../_components/legal-page";
import { termsDocument } from "../_data/legal-documents";
import { getOryfinUrl, oryfin } from "../_data/oryfin-data";

export const metadata: Metadata = {
  title: { absolute: `${termsDocument.title} | ${oryfin.name}` },
  description: termsDocument.description,
  alternates: { canonical: getOryfinUrl("/terms") },
  openGraph: {
    url: getOryfinUrl("/terms"),
    title: `${termsDocument.title} | ${oryfin.name}`,
    description: termsDocument.description,
  },
};

export default function OryfinTermsPage() {
  return <LegalPage document={termsDocument} />;
}
