import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { appData, getAppPath, navigation } from "../_data/app-data";

export function AppHeader() {
  return (
    <header className="hp-header">
      <Container className="hp-header-inner">
        <Link
          href={getAppPath()}
          aria-label="HyperPulse home"
          className="hp-brand"
        >
          <Image
            src={appData.appLogoPath}
            alt="HyperPulse"
            width={1060}
            height={172}
            priority
            sizes="190px"
          />
        </Link>
        <nav aria-label="HyperPulse navigation" className="hp-nav">
          {navigation.map((item) => (
            <Link key={item.suffix} href={getAppPath(item.suffix)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
