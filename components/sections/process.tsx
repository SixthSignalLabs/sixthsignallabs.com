"use client";

import { useState } from "react";
import { ArrowRight, Check, Compass, Grid3X3, RadioTower, Workflow } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { processStages, siteData } from "@/lib/site-data";

const stageIcons = [Compass, Grid3X3, Workflow, RadioTower] as const;

function StageGlyph({ index, active }: { index: number; active: boolean }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 120 64" className="h-16 w-full" fill="none" aria-hidden="true">
        <path d="M0 32C10 32 10 14 20 14C30 14 30 50 40 50C50 50 50 22 60 22C70 22 70 40 80 40C90 40 90 27 100 27C110 27 110 32 120 32" stroke={active ? "#0e8acc" : "rgba(8,11,14,.22)"} strokeWidth="1.5" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <div className="grid h-16 grid-cols-5 gap-1.5" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, cell) => (
          <span
            key={cell}
            className={`rounded-sm border ${active && [2, 7, 8, 12].includes(cell) ? "border-blue bg-blue/20" : "border-line bg-paper"}`}
          />
        ))}
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="relative h-16" aria-hidden="true">
        <svg className="absolute inset-0 size-full" viewBox="0 0 120 64" fill="none">
          <path d="M12 14L60 32L108 14M12 52L60 32L108 52" stroke={active ? "rgba(14,138,204,.7)" : "rgba(8,11,14,.18)"} />
        </svg>
        {[
          "left-0 top-1",
          "right-0 top-1",
          "left-0 bottom-1",
          "right-0 bottom-1",
          "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        ].map((position, node) => (
          <span key={position} className={`absolute size-4 rounded-full border-4 border-white ${position} ${active && node === 4 ? "bg-blue" : "bg-ink/20"}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-16 w-20" aria-hidden="true">
      {[0, 1, 2].map((ring) => (
        <span
          key={ring}
          className={`absolute left-1/2 top-1/2 rounded-full border -translate-x-1/2 -translate-y-1/2 ${active ? "border-blue/50" : "border-ink/15"}`}
          style={{ width: 22 + ring * 22, height: 22 + ring * 22 }}
        />
      ))}
      <span className={`absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${active ? "bg-blue" : "bg-ink/25"}`} />
    </div>
  );
}

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeStage = processStages[activeIndex];

  return (
    <section id="process" aria-labelledby="process-heading" className="section-pad bg-paper">
      <Container>
        <div className="grid gap-8 border-t border-line pt-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel>{siteData.processSection.eyebrow}</SectionLabel>
            <h2 id="process-heading" className="section-title mt-7">
              {siteData.processSection.heading}
            </h2>
          </div>
          <p className="body-large max-w-lg text-slate md:col-span-4">{siteData.processSection.body}</p>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[1.75rem] border border-line bg-white p-4 shadow-tight md:mt-24 md:rounded-[2.5rem] md:p-8 lg:p-10">
          <div className="signal-grid absolute inset-0 opacity-35" aria-hidden="true" />
          <div className="relative hidden h-16 md:block" aria-hidden="true">
            <svg className="size-full" viewBox="0 0 1200 64" fill="none" preserveAspectRatio="none">
              <path d="M48 32H1152" stroke="#d4e0e6" />
              <motion.path
                d="M48 32H1152"
                stroke="url(#processGradient)"
                strokeWidth="2.5"
                initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: reduceMotion ? 0 : 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="processGradient" x1="0" y1="0" x2="1200" y2="0">
                  <stop stopColor="#141a1e" />
                  <stop offset="0.58" stopColor="#285791" />
                  <stop offset="1" stopColor="#0e8acc" />
                </linearGradient>
              </defs>
            </svg>
            <motion.span
              className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-[3px] border-white bg-blue shadow-[0_0_0_5px_rgba(14,138,204,.12)]"
              animate={{ left: `${4 + activeIndex * 30.7}%` }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="relative grid gap-2 md:grid-cols-4 md:gap-3">
            {processStages.map((stage, index) => {
              const active = activeIndex === index;
              const Icon = stageIcons[index];

              return (
                <button
                  key={stage.id}
                  type="button"
                  aria-pressed={active}
                  aria-controls="process-stage-detail"
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group relative min-h-52 overflow-hidden rounded-2xl border p-5 text-left transition-[border-color,background-color,transform] duration-300 md:min-h-64 ${
                    active
                      ? "border-ink bg-ink text-white md:-translate-y-2"
                      : "border-line bg-white/85 text-ink hover:border-ink/30"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`font-mono text-xs ${active ? "text-blue-bright" : "text-muted"}`}>
                      {stage.number}
                    </span>
                    <Icon className={`size-4 ${active ? "text-blue-bright" : "text-muted"}`} aria-hidden="true" />
                  </div>
                  <div className="my-7 rounded-xl bg-white p-2">
                    <StageGlyph index={index} active={active} />
                  </div>
                  <h3 className="text-2xl font-[520] tracking-[-0.04em]">{stage.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${active ? "text-white/58" : "text-muted"}`}>
                    {stage.summary}
                  </p>
                </button>
              );
            })}
          </div>

          <div
            id="process-stage-detail"
            aria-live="polite"
            className="relative mt-3 min-h-24 overflow-hidden rounded-2xl border border-line bg-paper px-5 py-5 md:px-7"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStage.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-blue text-white">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="mono-label text-muted">Stage output</span>
                    <p className="mt-1 text-lg font-medium tracking-[-0.025em]">{activeStage.output}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                  {activeStage.title} feeds the next signal
                  <ArrowRight className="size-4 text-blue" aria-hidden="true" />
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
