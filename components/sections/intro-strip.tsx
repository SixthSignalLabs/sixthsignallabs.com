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

        <div className="mt-16 border-t border-line pt-5 md:mt-24">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="mono-label text-muted">Future client marks</span>
            <span className="text-[0.68rem] text-muted">Reserved placeholders — no client claims</span>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
            {["Mark / 01", "Mark / 02", "Mark / 03", "Mark / 04"].map((label) => (
              <div
                key={label}
                className="flex h-24 items-center justify-center border-b border-r border-line bg-paper/60 md:h-28"
              >
                <span className="mono-label text-ink/25">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
