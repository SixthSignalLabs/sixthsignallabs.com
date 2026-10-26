import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { AppHero } from "./_components/app-hero";
import { appData, features, limitations, pageMetadata } from "./_data/app-data";

export const metadata = pageMetadata(appData.tagline, appData.description);

export default function AppLandingPage() {
  return (
    <main id="main-content">
      <AppHero />
      <section id="features" className="hp-section">
        <Container>
          <SectionLabel>Built for the training loop</SectionLabel>
          <div className="hp-section-heading">
            <h2>
              A clear plan.
              <br />
              An honest record.
            </h2>
            <p>
              From your first routine to your next comparison, keep the details
              that make training useful.
            </p>
          </div>
          <div className="hp-feature-grid">
            {features.map((feature) => (
              <article className="hp-feature" key={feature.number}>
                <span className="hp-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="hp-section hp-understand">
        <Container>
          <p className="hp-eyebrow">Know what you’re working with</p>
          <h2>
            Useful by design.
            <br />
            Clear about its limits.
          </h2>
          <div className="hp-limitations">
            {limitations.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="hp-section">
        <Container>
          <div className="hp-studio">
            <div>
              <SectionLabel>Product engineering</SectionLabel>
              <h2>Built by {appData.developerName}.</h2>
              <p>{appData.developerDescription}</p>
            </div>
            <Link className="hp-button" href="/">
              Visit the studio ↗
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
