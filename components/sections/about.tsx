import { ArrowDownRight, Blocks, Gauge, MessagesSquare, Waypoints } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { differentiators, siteData } from "@/lib/site-data";

const differentiatorIcons = [Waypoints, Blocks, MessagesSquare, Gauge] as const;

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad bg-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel>{siteData.differentiatorsSection.eyebrow}</SectionLabel>
            <h2 id="about-heading" className="section-title mt-7">
              {siteData.differentiatorsSection.heading}
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="body-large max-w-lg text-slate">{siteData.differentiatorsSection.body}</p>
            <ArrowDownRight className="mt-8 size-8 text-blue" strokeWidth={1.4} aria-hidden="true" />
          </div>
        </div>

        <div className="mt-16 grid border-l border-t border-line md:mt-24 md:grid-cols-12">
          {differentiators.map((item, index) => {
            const Icon = differentiatorIcons[index];
            const span = index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5";
            const dark = index === 0;

            return (
              <Reveal key={item.number} className={`${span} border-b border-r border-line`} delay={index * 0.06}>
                <article
                  className={`flex min-h-[23rem] h-full flex-col p-6 sm:p-8 md:min-h-[30rem] md:p-10 lg:p-12 ${
                    dark ? "bg-surface-dark text-white" : index === 2 ? "bg-paper-2" : "bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`font-mono text-xs ${dark ? "text-blue-bright" : "text-blue"}`}>
                      {item.number}
                    </span>
                    <Icon className={`size-5 ${dark ? "text-white/45" : "text-muted"}`} strokeWidth={1.4} aria-hidden="true" />
                  </div>

                  {index === 0 && (
                    <div className="relative my-10 h-20 max-w-md" aria-hidden="true">
                      <svg className="size-full" viewBox="0 0 480 80" fill="none" preserveAspectRatio="none">
                        <path d="M0 52C72 52 70 18 142 18C214 18 210 62 282 62C354 62 358 30 480 30" stroke="rgba(255,255,255,.14)" />
                        <path className="signal-dash" d="M0 52C72 52 70 18 142 18C214 18 210 62 282 62C354 62 358 30 480 30" stroke="#12a5e8" strokeWidth="2" />
                      </svg>
                    </div>
                  )}

                  <div className="mt-auto">
                    <h3 className={`max-w-[13ch] text-[clamp(2rem,3.7vw,4rem)] font-[520] leading-[0.96] tracking-[-0.055em] ${index === 1 ? "md:text-4xl" : ""}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-6 max-w-xl text-base leading-relaxed ${dark ? "text-white/52" : "text-muted"}`}>
                      {item.summary}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
