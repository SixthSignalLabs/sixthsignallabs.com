import { withPageSocial } from "@/lib/page-social";
import type { Metadata } from "next";

import { LegalPage } from "../_components/legal-page";
import { privacyDocument } from "../_data/legal-documents";
import { getOryfinUrl, oryfin } from "../_data/oryfin-data";

export const metadata: Metadata = withPageSocial({
  title: { absolute: `${privacyDocument.title} | ${oryfin.name}` },
  description: privacyDocument.description,
  alternates: { canonical: getOryfinUrl("/privacy") },
  openGraph: {
    url: getOryfinUrl("/privacy"),
    title: `${privacyDocument.title} | ${oryfin.name}`,
    description: privacyDocument.description,
  },
}, "/apps/oryfin/oryfin-app-icon-1024.png");

export default function OryfinPrivacyPage() {
  return <LegalPage document={privacyDocument} />;
}
