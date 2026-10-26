import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  externalLinks,
  getAppPath,
  getSupportMailto,
  publishing,
  type AppLegalDocument,
} from "../_data/app-data";

export function AppLegalPage({ document }: { document: AppLegalDocument }) {
  return (
    <main id="main-content" className="hp-legal">
      <Container className="hp-document-hero">
        <p className="hp-eyebrow">HyperPulse / Legal</p>
        <h1>{document.title}</h1>
        <p className="hp-updated">Last updated: {publishing.effectiveDate}</p>
      </Container>
      <Container className="hp-document-grid">
        <aside className="hp-toc">
          <nav aria-label={`${document.title} contents`}>
            <p className="hp-eyebrow">On this page</p>
            <ol>
              {document.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <article className="hp-document-article" aria-label={document.title}>
          <div className="hp-introduction">
            {document.introduction.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          {document.sections.map((section, index) => (
            <section
              id={section.id}
              key={section.id}
              className="hp-document-section"
            >
              <span className="hp-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{section.title}</h2>
              {section.blocks.map((block, i) => (
                <p key={i}>{block.text}</p>
              ))}
              {(section.id === "contact" ||
                section.id === "operator" ||
                section.id === "changes") && (
                <address>
                  <a href={getSupportMailto()}>{publishing.supportEmail}</a>
                </address>
              )}
              {document.slug === "terms" && section.id === "third-parties" && (
                <p>
                  <a href={externalLinks.googlePlayTerms}>
                    Google Play Terms of Service
                  </a>
                </p>
              )}
            </section>
          ))}
          <nav aria-label="Related HyperPulse documents" className="hp-related">
            <Link href={getAppPath("/privacy")}>Privacy Policy</Link>
            <Link href={getAppPath("/terms")}>Terms of Use</Link>
            <Link href={getAppPath("/support")}>Support</Link>
          </nav>
        </article>
      </Container>
    </main>
  );
}
