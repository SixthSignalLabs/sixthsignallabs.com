"use client";

import { ArrowUpRight, CircleDashed, Layers3, PanelTop } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { caseStudies, siteData, type CaseStudy } from "@/lib/site-data";

function MobileProjectVisual() {
  return (
    <div className="relative flex h-[27rem] items-center justify-center overflow-hidden bg-[#dfe8ec] p-5 sm:h-[35rem]" aria-hidden="true">
      <div className="signal-grid absolute inset-0 opacity-65" />
      <div className="absolute left-[13%] top-[16%] size-36 rounded-full border border-blue/30 sm:size-56" />
      <div className="absolute left-[18%] top-[22%] size-24 rounded-full border border-blue/20 sm:size-40" />
      <div className="relative z-10 h-[22rem] w-[10.5rem] -translate-x-6 -rotate-6 rounded-[2rem] border-[5px] border-ink bg-ink p-1.5 shadow-2xl sm:h-[29rem] sm:w-[14rem]">
        <div className="h-full overflow-hidden rounded-[1.45rem] bg-paper p-3 sm:p-4">
          <div className="mx-auto h-1 w-8 rounded-full bg-ink/20" />
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="h-2 w-12 rounded bg-ink/75" />
              <div className="mt-2 h-1.5 w-8 rounded bg-ink/15" />
            </div>
            <div className="size-7 rounded-full bg-blue" />
          </div>
          <div className="mt-6 rounded-2xl bg-ink p-3 text-white sm:p-4">
            <div className="h-1.5 w-14 rounded bg-white/30" />
            <div className="mt-8 h-2 w-20 rounded bg-white/80" />
            <div className="mt-2 h-1.5 w-10 rounded bg-blue-bright" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-xl bg-blue/15" />
            <div className="h-16 rounded-xl bg-paper-2" />
          </div>
          <div className="mt-4 space-y-2">
            {[72, 58, 84].map((width) => (
              <div key={width} className="flex items-center gap-2 rounded-lg bg-white p-2 ring-1 ring-ink/5">
                <div className="size-5 rounded-md bg-paper-2" />
                <div className="h-1.5 rounded bg-ink/15" style={{ width: `${width}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[9%] right-[11%] z-20 w-36 rotate-4 rounded-2xl border border-white/20 bg-surface-dark p-3 text-white shadow-2xl sm:w-48 sm:p-4">
        <span className="mono-label text-white/35">Interaction map</span>
        <div className="relative mt-4 h-20">
          <div className="absolute left-1 top-2 size-5 rounded-full border border-blue-bright bg-blue/20" />
          <div className="absolute left-[42%] top-11 size-4 rounded-full bg-white/20" />
          <div className="absolute right-1 top-1 size-6 rounded-full bg-blue" />
          <svg className="absolute inset-0 size-full" viewBox="0 0 180 80">
            <path d="M18 18L82 57L164 18" stroke="rgba(255,255,255,.25)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BrowserProjectVisual() {
  return (
    <div className="relative flex h-[27rem] items-center justify-center overflow-hidden bg-surface-dark p-5 sm:h-[35rem] sm:p-10" aria-hidden="true">
      <div className="signal-grid-dark absolute inset-0 opacity-60" />
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#eef3f5] shadow-2xl sm:rotate-1">
        <div className="flex h-11 items-center justify-between border-b border-ink/10 bg-white px-4">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-ink/15" />
            <span className="size-2 rounded-full bg-ink/15" />
            <span className="size-2 rounded-full bg-blue" />
          </div>
          <div className="h-5 w-32 rounded-full bg-paper-2" />
          <PanelTop className="size-4 text-ink/30" />
        </div>
        <div className="grid h-[19rem] grid-cols-[0.28fr_1fr] sm:h-[27rem]">
          <div className="border-r border-ink/10 bg-white p-3 sm:p-5">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-ink" />
              <div className="h-2 w-12 rounded bg-ink/70" />
            </div>
            <div className="mt-8 space-y-4">
              {[72, 56, 84, 66, 48].map((width, index) => (
                <div key={width} className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${index === 1 ? "bg-blue" : "bg-ink/10"}`} />
                  <div className="h-1.5 rounded bg-ink/12" style={{ width: `${width}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-7">
            <div className="flex items-end justify-between">
              <div>
                <div className="h-3 w-32 rounded bg-ink/80" />
                <div className="mt-2 h-2 w-20 rounded bg-ink/15" />
              </div>
              <div className="h-8 w-20 rounded-full bg-blue" />
            </div>
            <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="col-span-2 h-24 rounded-xl bg-ink p-3 sm:h-32">
                <div className="h-2 w-16 rounded bg-white/25" />
                <div className="mt-10 flex items-end gap-1.5 sm:mt-14">
                  {[20, 34, 26, 45, 38, 52].map((height) => (
                    <div key={height} className="w-3 rounded-t bg-blue-bright/75" style={{ height }} />
                  ))}
                </div>
              </div>
              <div className="h-24 rounded-xl bg-blue/15 sm:h-32" />
              <div className="h-20 rounded-xl bg-white sm:h-28" />
              <div className="col-span-2 h-20 rounded-xl bg-white sm:h-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardProjectVisual() {
  return (
    <div className="relative h-[27rem] overflow-hidden bg-[#cfeaf6] p-5 sm:h-[35rem] sm:p-10" aria-hidden="true">
      <div className="absolute -right-28 -top-28 size-[28rem] rounded-full border border-blue/20" />
      <div className="absolute -right-14 -top-14 size-[20rem] rounded-full border border-blue/25" />
      <div className="relative mx-auto grid h-full max-w-4xl grid-cols-12 gap-2 rounded-2xl border border-ink/10 bg-paper/90 p-3 shadow-2xl backdrop-blur sm:gap-3 sm:p-5">
        <div className="col-span-12 flex h-12 items-center justify-between border-b border-line px-1">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-ink" />
            <div className="h-2 w-24 rounded bg-ink/70" />
          </div>
          <div className="flex size-8 items-center justify-center rounded-full bg-blue/15">
            <Layers3 className="size-4 text-blue" />
          </div>
        </div>
        <div className="col-span-4 rounded-xl bg-white p-3 ring-1 ring-ink/5 sm:p-4">
          <div className="h-2 w-12 rounded bg-ink/15" />
          <div className="mt-5 size-14 rounded-full border-[7px] border-blue border-r-blue/20 sm:size-20" />
        </div>
        <div className="col-span-8 rounded-xl bg-ink p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-white/25" />
            <div className="size-2 rounded-full bg-blue-bright" />
          </div>
          <svg className="mt-4 h-20 w-full sm:h-28" viewBox="0 0 420 120" fill="none">
            <path d="M0 92C50 88 70 36 124 44C180 52 182 96 240 77C296 58 322 22 420 30" stroke="rgba(255,255,255,.14)" />
            <path className="signal-dash" d="M0 92C50 88 70 36 124 44C180 52 182 96 240 77C296 58 322 22 420 30" stroke="#12a5e8" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="col-span-7 rounded-xl bg-white p-3 ring-1 ring-ink/5 sm:p-4">
          <div className="mb-4 flex justify-between">
            <div className="h-2 w-20 rounded bg-ink/15" />
            <div className="h-2 w-8 rounded bg-blue/30" />
          </div>
          <div className="space-y-2">
            {[78, 54, 88].map((width) => (
              <div key={width} className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-paper-2" />
                <div className="h-1.5 rounded bg-ink/12" style={{ width: `${width}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5 rounded-xl bg-blue-deep p-3 sm:p-4">
          <div className="h-2 w-12 rounded bg-white/25" />
          <div className="mt-5 grid grid-cols-4 items-end gap-1.5">
            {[34, 58, 43, 76].map((height) => (
              <div key={height} className="rounded-t bg-white/50" style={{ height }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: CaseStudy }) {
  if (project.mockup === "mobile") return <MobileProjectVisual />;
  if (project.mockup === "browser") return <BrowserProjectVisual />;
  return <DashboardProjectVisual />;
}

const projectBackgrounds = ["bg-white", "bg-[#e8eff2]", "bg-white"] as const;

export function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad overflow-hidden bg-ink text-white">
      <Container>
        <div className="grid gap-8 border-t border-white/15 pt-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel tone="dark">{siteData.workSection.eyebrow}</SectionLabel>
            <h2 id="work-heading" className="section-title mt-7 max-w-[12ch]">
              {siteData.workSection.heading}
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="body-large text-white/62">{siteData.workSection.body}</p>
            <p className="mono-label mt-6 max-w-sm leading-relaxed text-blue-bright">
              {siteData.workSection.placeholderNotice}
            </p>
          </div>
        </div>

        <p className="mono-label mt-10 text-white/45 md:hidden">Swipe project chapters →</p>
        <div className="work-scroll mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-24 md:block md:space-y-8 md:overflow-visible md:pb-0">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.id}
              tabIndex={0}
              aria-label={`${project.name}, ${project.badge}`}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`min-w-[88vw] snap-center overflow-hidden rounded-[1.75rem] text-ink focus-visible:ring-2 focus-visible:ring-blue-bright focus-visible:ring-offset-4 focus-visible:ring-offset-ink sm:min-w-[78vw] md:min-w-0 md:rounded-[2.5rem] ${projectBackgrounds[index]}`}
            >
              <div className="grid md:grid-cols-12">
                <div className="flex min-h-[22rem] flex-col p-6 sm:p-8 md:col-span-4 md:p-10 lg:p-12">
                  <div className="flex items-center justify-between gap-4">
                    <span className="mono-label text-muted">Transmission / 0{index + 1}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-[0.62rem] text-muted">
                      <CircleDashed className="size-3 text-blue" aria-hidden="true" />
                      {project.badge}
                    </span>
                  </div>
                  <div className="mt-auto pt-16">
                    <p className="mono-label text-blue">{project.industry}</p>
                    <h3 className="mt-4 text-[clamp(2.75rem,5vw,5.75rem)] font-[520] leading-[0.9] tracking-[-0.06em]">
                      {project.name}
                    </h3>
                    <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted md:text-base">
                      {project.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.platforms.map((platform) => (
                        <span key={platform} className="rounded-full border border-line px-3 py-1.5 text-xs text-slate">
                          {platform}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted" aria-disabled="true">
                      Case study coming later
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-8" role="img" aria-label={project.image.alt}>
                  <ProjectVisual project={project} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
