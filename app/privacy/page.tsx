import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Sixth Signal Labs",
  description:
    "How Sixth Signal Labs collects, uses, discloses, and protects information across its website, services, and business operations.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    url: "/privacy",
    title: "Privacy Policy | Sixth Signal Labs",
    description:
      "How Sixth Signal Labs collects, uses, discloses, and protects information across its website, services, and business operations.",
  },
};

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} />;
}
