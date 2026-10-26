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
