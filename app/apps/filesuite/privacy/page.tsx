import { AppLegalPage } from "../_components/app-legal-page";
import { appData, legalDocuments } from "../_data/app-data";
import { pageMetadata } from "../_data/metadata";

const document = legalDocuments.privacy;
export const metadata = {
  ...pageMetadata(`${document.title} – ${appData.name}`, document.description, "/privacy"),
  robots: { index: true, follow: true },
};

export default function FileSuiteLegalPage() {
  return <AppLegalPage document={document} />;
}
