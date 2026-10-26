import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { appData, getAppPath } from "../_data/app-data";
import { AppStoreCta } from "./app-store-cta";

export function AppHero() {
  return (
    <section className="hp-hero">
      <Container className="hp-hero-grid">
        <div>
          <p className="hp-eyebrow">Strength training / Your own record</p>
          <h1>
            Plan every set.
            <br />
            <span>See your progress.</span>
          </h1>
          <p className="hp-lead">{appData.description}</p>
          <AppStoreCta />
          <Link className="hp-text-link" href={getAppPath("/support")}>
            Explore the training guide{" "}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="hp-brand-panel">
          <div className="hp-panel-meta">
            <span>HYPERPULSE</span>
            <span>PLAN / LOG / REFLECT</span>
          </div>
          <Image
            src={appData.appMarkPath}
            alt="HyperPulse lightning brand mark"
            width={439}
            height={512}
            priority
            sizes="(max-width: 700px) 180px, 260px"
            className="hp-bolt"
          />
          <p className="hp-panel-caption">Make the next set count.</p>
          <p className="hp-panel-note">
            Offline training. Intentional progress.
          </p>
        </div>
      </Container>
    </section>
  );
}
