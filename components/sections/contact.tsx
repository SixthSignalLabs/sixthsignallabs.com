import { ArrowUpRight, Mail, Radio } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteData } from "@/lib/site-data";

export function Contact() {
  const { contactSection } = siteData;
  const mailto = `mailto:${contactSection.email.value}?subject=Project%20inquiry%20for%20Sixth%20Signal%20Labs`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-[#dbeaf1] py-24 md:py-36">
      <div className="signal-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <svg className="absolute inset-0 size-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-120 720C250 720 180 80 720 80C1260 80 1190 720 1560 720" stroke="rgba(40,87,145,.14)" />
        <path d="M-40 720C290 720 260 170 720 170C1180 170 1150 720 1480 720" stroke="rgba(14,138,204,.2)" />
        <path className="signal-dash" d="M60 720C350 720 340 260 720 260C1100 260 1090 720 1380 720" stroke="#0e8acc" strokeWidth="2" />
      </svg>

      <Container className="relative">
        <div id="contact-form" className="mx-auto max-w-5xl text-center">
          <div className="mono-label inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white/60 px-4 py-2 text-slate backdrop-blur">
            <Radio className="size-3.5 text-blue" aria-hidden="true" />
            {contactSection.eyebrow}
          </div>
          <h2 id="contact-heading" className="mt-9 text-[clamp(4rem,9vw,9.5rem)] font-[520] leading-[0.86] tracking-[-0.075em]">
            {contactSection.heading}
          </h2>
          <p className="body-large mx-auto mt-8 max-w-2xl text-slate">{contactSection.body}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={mailto}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-float transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-bright focus-visible:ring-offset-4"
            >
              {contactSection.primaryAction.label}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={mailto}
              aria-label={`${contactSection.email.value}, placeholder email address`}
              className="inline-flex min-h-14 items-center gap-3 rounded-full border border-ink/15 bg-white/60 px-6 py-4 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-white"
            >
              <Mail className="size-4 text-blue" aria-hidden="true" />
              {contactSection.email.value}
            </a>
          </div>

          <p className="mono-label mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            Placeholder contact address — confirm or replace before launch.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 border-l border-t border-ink/12 text-left md:mt-28 md:grid-cols-4">
          {["Product strategy", "Experience design", "Engineering", "Launch systems"].map((label, index) => (
            <div key={label} className="border-b border-r border-ink/12 bg-white/35 p-4 backdrop-blur md:p-5">
              <span className="font-mono text-[0.58rem] text-blue">0{index + 1}</span>
              <span className="mt-2 block text-sm font-medium tracking-[-0.02em]">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
