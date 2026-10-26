import { AppLegalPage } from "../_components/app-legal-page";
import { legal, pageMetadata } from "../_data/app-data";
export const metadata = pageMetadata(
  legal.terms.title,
  legal.terms.description,
  "/terms",
);
export default function TermsPage() {
  return <AppLegalPage document={legal.terms} />;
}
