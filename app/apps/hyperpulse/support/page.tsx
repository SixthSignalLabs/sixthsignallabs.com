import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AppStoreCta } from "../_components/app-store-cta";
import {
  appData,
  getAppPath,
  getSupportMailto,
  pageMetadata,
  publishing,
  supportTopics,
  supportWarning,
} from "../_data/app-data";

export const metadata = pageMetadata(
  "Support",
  appData.supportDescription,
  "/support",
);

export default function SupportPage() {
  return (
    <main id="main-content">
      <Container className="hp-document-hero">
        <p className="hp-eyebrow">HyperPulse / Support</p>
        <h1>
          Keep your training
          <br />
          moving.
        </h1>
        <p className="hp-lead">{appData.supportDescription}</p>
        <div className="hp-contact">
          <div>
            <h2>Contact HyperPulse</h2>
            <p>Operated by {publishing.operatorName}.</p>
            <address>
              <a href={getSupportMailto()}>{publishing.supportEmail}</a>
            </address>
            <Link className="hp-text-link" href="/">
              Sixth Signal Labs website ↗
            </Link>
          </div>
          <div>
            <p>{supportWarning}</p>
            <AppStoreCta />
          </div>
        </div>
      </Container>
      <Container className="hp-document-grid">
        <aside className="hp-toc">
          <nav aria-label="Support topics">
            <p className="hp-eyebrow">Training guide</p>
            <ol>
              {supportTopics.map((topic) => (
                <li key={topic.id}>
                  <a href={`#${topic.id}`}>{topic.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <article className="hp-document-article" aria-label="HyperPulse help">
          {supportTopics.map((topic) => (
            <section
              className="hp-document-section"
              id={topic.id}
              key={topic.id}
            >
              <h2>{topic.title}</h2>
              {topic.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </section>
          ))}
          <nav className="hp-related" aria-label="HyperPulse legal">
            <Link href={getAppPath("/privacy")}>Privacy Policy</Link>
            <Link href={getAppPath("/terms")}>Terms of Use</Link>
          </nav>
        </article>
      </Container>
    </main>
  );
}
