import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  appData,
  getAppPath,
  getSupportMailto,
  navigation,
  publishing,
} from "../_data/app-data";

export function AppFooter() {
  return (
    <footer className="hp-footer">
      <div className="relative mx-auto max-w-7xl px-6 pt-8"><a href="/apps" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Explore all apps</a></div>
      <Container>
        <div className="hp-footer-inner">
          <div>
            <p className="hp-footer-title">{appData.name}</p>
            <p>
              Built by <Link href="/">{appData.developerName}</Link>.
            </p>
          </div>
          <nav aria-label="HyperPulse footer" className="hp-nav">
            {navigation.map((item) => (
              <Link key={item.suffix} href={getAppPath(item.suffix)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <a className="hp-email" href={getSupportMailto()}>
          {publishing.supportEmail}
        </a>
      </Container>
    </footer>
  );
}
