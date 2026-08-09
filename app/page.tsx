import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { IntroStrip } from "@/components/sections/intro-strip";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Statement } from "@/components/sections/statement";
import { Technology } from "@/components/sections/technology";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";
import { services, siteData } from "@/lib/site-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteData.metadata.name,
  url: siteUrl,
  logo: `${siteUrl}/brand/sixth-signal-labs-logo.png`,
  description: siteData.metadata.description,
  serviceType: services.map((service) => service.title),
};

export default function HomePage() {
  return (
    <div id="top">
      <Navbar />
      <main id="main-content">
        <Hero />
        <IntroStrip />
        <Services />
        <Work />
        <Process />
        <Technology />
        <About />
        <Statement />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
