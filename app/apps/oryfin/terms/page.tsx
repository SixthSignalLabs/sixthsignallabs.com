import { withPageSocial } from "@/lib/page-social";
import type { Metadata } from "next";

import { LegalPage } from "../_components/legal-page";
import { termsDocument } from "../_data/legal-documents";
import { getOryfinUrl, oryfin } from "../_data/oryfin-data";

export const metadata: Metadata = withPageSocial({
  title: { absolute: `${termsDocument.title} | ${oryfin.name}` },
  description: termsDocument.description,
  alternates: { canonical: getOryfinUrl("/terms") },
  openGraph: {
    url: getOryfinUrl("/terms"),
    title: `${termsDocument.title} | ${oryfin.name}`,
    description: termsDocument.description,
  },
}, "/apps/oryfin/oryfin-app-icon-1024.png");

export default function OryfinTermsPage() {
  return <LegalPage document={termsDocument} />;
}
