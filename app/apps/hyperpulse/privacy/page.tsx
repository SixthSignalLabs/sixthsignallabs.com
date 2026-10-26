import { AppLegalPage } from "../_components/app-legal-page";
import { legal, pageMetadata } from "../_data/app-data";
export const metadata = pageMetadata(
  legal.privacy.title,
  legal.privacy.description,
  "/privacy",
);
export default function PrivacyPage() {
  return <AppLegalPage document={legal.privacy} />;
}
