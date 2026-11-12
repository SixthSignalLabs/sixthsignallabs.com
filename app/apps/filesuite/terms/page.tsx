import { AppLegalPage } from "../_components/app-legal-page";
import { appData, legalDocuments } from "../_data/app-data";
import { pageMetadata } from "../_data/metadata";

const document = legalDocuments.terms;
export const metadata = {
  ...pageMetadata(`${document.title} – ${appData.name}`, document.description, "/terms"),
  robots: { index: false, follow: true },
};

export default function FileSuiteLegalPage() {
  return <AppLegalPage document={document} />;
}
