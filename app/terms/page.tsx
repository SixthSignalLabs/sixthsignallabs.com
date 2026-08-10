import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { termsOfService } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service | Sixth Signal Labs",
  description:
    "Terms governing access to and use of the Sixth Signal Labs website, services, digital products, and related materials.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    url: "/terms",
    title: "Terms of Service | Sixth Signal Labs",
    description:
      "Terms governing access to and use of the Sixth Signal Labs website, services, digital products, and related materials.",
  },
};

export default function TermsPage() {
  return <LegalPage document={termsOfService} />;
}
