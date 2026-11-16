import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { siteData } from "@/lib/site-data";

export function IntroStrip() {
  return (
    <section aria-labelledby="intro-heading" className="border-y border-line bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel>{siteData.intro.eyebrow}</SectionLabel>
            <h2
              id="intro-heading"
              className="mt-7 max-w-[14ch] text-[clamp(2.6rem,5.4vw,6rem)] font-[520] leading-[0.95] tracking-[-0.055em]"
            >
              {siteData.intro.statement}
            </h2>
          </div>
          <p className="body-large max-w-md text-slate md:col-span-4">{siteData.intro.body}</p>
        </div>

      </Container>
    </section>
  );
}
