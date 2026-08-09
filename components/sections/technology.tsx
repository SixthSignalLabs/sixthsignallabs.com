import { CloudCog, Code2, DatabaseZap, Radio, Smartphone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { siteData, technologyGroups, type TechnologyGroupId } from "@/lib/site-data";

const technologyIcons = {
  frontend: Code2,
  mobile: Smartphone,
  backend: DatabaseZap,
  infrastructure: CloudCog,
} satisfies Record<TechnologyGroupId, typeof Code2>;

export function Technology() {
  return (
    <section aria-labelledby="technology-heading" className="section-pad bg-paper-2">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel>{siteData.technologySection.eyebrow}</SectionLabel>
            <h2 id="technology-heading" className="section-title mt-7">
              {siteData.technologySection.heading}
            </h2>
          </div>
          <p className="body-large max-w-lg text-slate md:col-span-4">{siteData.technologySection.body}</p>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-surface-dark p-5 text-white shadow-float md:rounded-[2.5rem] md:p-8 lg:p-10">
            <div className="signal-grid-dark absolute inset-0 opacity-45" aria-hidden="true" />

            <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full border border-blue-bright/25 bg-blue/15">
                  <Radio className="size-4 text-blue-bright" aria-hidden="true" />
                </span>
                <div>
                  <p className="mono-label text-white/38">Architecture map</p>
                  <p className="mt-1 text-sm text-white/65">One product, connected across every layer</p>
                </div>
              </div>
              <div className="mono-label flex items-center gap-2 text-white/38">
                <span className="status-pulse size-1.5 rounded-full bg-blue-bright" />
                Route active
              </div>
            </div>

            <div className="relative mt-8 grid gap-8 lg:grid-cols-[0.28fr_1fr] lg:gap-12">
              <div className="flex min-h-44 flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.045] p-5 lg:min-h-full">
                <div>
                  <span className="mono-label text-blue-bright">System / 006</span>
                  <h3 className="mt-4 max-w-[9ch] text-3xl font-[520] leading-[0.95] tracking-[-0.05em]">
                    Product core
                  </h3>
                </div>
                <p className="mt-10 max-w-xs text-sm leading-relaxed text-white/48">
                  Architecture starts with the product’s real constraints, then keeps each boundary clear enough to change.
                </p>
              </div>

              <div className="relative space-y-2">
                <div className="absolute bottom-8 left-[2.05rem] top-8 w-px bg-gradient-to-b from-blue-bright via-blue to-blue-deep" aria-hidden="true">
                  <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 rounded-full bg-blue-bright shadow-[0_0_0_5px_rgba(18,165,232,.1)]" />
                </div>

                {technologyGroups.map((group, index) => {
                  const Icon = technologyIcons[group.id];

                  return (
                    <div
                      key={group.id}
                      className="group relative grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.055] md:grid-cols-[3.8rem_0.72fr_1.28fr] md:items-center md:p-5"
                    >
                      <div className="relative z-10 flex size-9 items-center justify-center rounded-full border border-white/15 bg-surface-dark md:size-10">
                        <Icon className={`size-4 ${index === 0 ? "text-blue-bright" : "text-white/55"}`} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[0.58rem] text-white/28">0{index + 1}</span>
                          <h3 className="text-lg font-medium tracking-[-0.03em]">{group.label}</h3>
                        </div>
                        <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/42">{group.summary}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {group.technologies.map((technology, technologyIndex) => (
                          <span
                            key={technology}
                            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                              technologyIndex === 0
                                ? "border-blue-bright/30 bg-blue/15 text-blue-bright"
                                : "border-white/12 bg-white/[0.04] text-white/58 group-hover:border-white/18"
                            }`}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-8 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
              {[
                ["01", "Choose for the product"],
                ["02", "Keep boundaries clear"],
                ["03", "Change without rewrites"],
              ].map(([number, label]) => (
                <div key={number} className="flex items-center gap-3 text-sm text-white/46">
                  <span className="font-mono text-[0.58rem] text-blue-bright">{number}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
