"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Gauge,
  Layers3,
  Monitor,
  PenTool,
  Rocket,
  Smartphone,
  Workflow,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { services, siteData, type Service, type ServiceVisual as VisualType } from "@/lib/site-data";

const icons = {
  "mobile-stack": Smartphone,
  "browser-grid": Monitor,
  "system-map": Workflow,
  "interface-canvas": PenTool,
  "release-path": Rocket,
  "performance-wave": Gauge,
} as const;

function VisualHeader({ service }: { service: Service }) {
  const Icon = icons[service.visual];

  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div className="flex items-center gap-2 text-white/55">
        <Icon className="size-4 text-blue-bright" aria-hidden="true" />
        <span className="mono-label">Band {service.number}</span>
      </div>
      <span className="mono-label text-white/35">Live preview</span>
    </div>
  );
}

function MobileStackVisual() {
  return (
    <div className="relative mx-auto mt-8 h-[18rem] max-w-[22rem]" aria-hidden="true">
      <div className="absolute left-[8%] top-8 h-56 w-28 -rotate-6 rounded-[1.6rem] border border-white/15 bg-white/[0.06] p-2 shadow-2xl">
        <div className="h-full rounded-[1.15rem] bg-[#0a1115] p-3">
          <div className="mx-auto h-1 w-8 rounded-full bg-white/20" />
          <div className="mt-7 h-12 rounded-xl bg-blue-deep" />
          <div className="mt-3 h-3 w-3/4 rounded-full bg-white/15" />
          <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
          <div className="mt-8 grid grid-cols-2 gap-2">
            <div className="h-14 rounded-lg bg-white/[0.07]" />
            <div className="h-14 rounded-lg bg-blue-bright/20" />
          </div>
        </div>
      </div>
      <div className="absolute right-[8%] top-2 h-64 w-32 rotate-6 rounded-[1.8rem] border border-white/20 bg-white/10 p-2 shadow-2xl">
        <div className="h-full rounded-[1.3rem] bg-paper p-3">
          <div className="mx-auto h-1 w-8 rounded-full bg-ink/20" />
          <div className="mt-5 size-12 rounded-2xl bg-ink" />
          <div className="mt-4 h-2.5 w-3/4 rounded-full bg-ink/75" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-ink/15" />
          <div className="mt-6 space-y-2">
            <div className="h-10 rounded-xl bg-blue/15" />
            <div className="h-10 rounded-xl bg-paper-2" />
            <div className="h-10 rounded-xl bg-paper-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserGridVisual() {
  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05]" aria-hidden="true">
      <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-3">
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-blue-bright" />
      </div>
      <div className="grid h-52 grid-cols-[0.34fr_1fr]">
        <div className="border-r border-white/10 p-3">
          <div className="h-7 rounded-lg bg-white/10" />
          <div className="mt-5 space-y-3">
            {[65, 82, 52, 73].map((width) => (
              <div key={width} className="h-1.5 rounded bg-white/10" style={{ width: `${width}%` }} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          <div className="col-span-2 rounded-xl bg-blue-deep p-3">
            <div className="h-2 w-16 rounded-full bg-white/35" />
            <div className="mt-8 h-2 w-24 rounded-full bg-white/15" />
          </div>
          <div className="rounded-xl bg-white/[0.07]" />
          <div className="rounded-xl bg-blue-bright/15" />
        </div>
      </div>
    </div>
  );
}

function SystemMapVisual() {
  const nodes = [
    { label: "Interface", className: "left-0 top-4" },
    { label: "Product API", className: "right-0 top-4" },
    { label: "Data", className: "left-[8%] bottom-4" },
    { label: "Cloud", className: "right-[8%] bottom-4" },
  ];

  return (
    <div className="relative mt-8 h-64" aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 400 240" fill="none">
        <path d="M68 52L200 120L332 52M68 192L200 120L332 192" stroke="rgba(255,255,255,.2)" />
        <circle cx="200" cy="120" r="48" stroke="rgba(14,138,204,.45)" />
        <circle className="signal-dash" cx="200" cy="120" r="31" stroke="#12a5e8" />
      </svg>
      <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-bright/30 bg-blue/15 text-center">
        <span className="mono-label leading-relaxed text-white/80">Product<br />core</span>
      </div>
      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute rounded-xl border border-white/15 bg-white/[0.06] px-3 py-2 ${node.className}`}
        >
          <span className="text-xs text-white/65">{node.label}</span>
        </div>
      ))}
    </div>
  );
}

function InterfaceCanvasVisual() {
  return (
    <div className="relative mt-8 h-64 overflow-hidden rounded-2xl border border-white/15 bg-[#eef3f5] p-4" aria-hidden="true">
      <div className="absolute inset-0 signal-grid opacity-40" />
      <div className="relative flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="size-5 rounded bg-ink" />
          <span className="size-5 rounded bg-blue" />
          <span className="size-5 rounded bg-white ring-1 ring-ink/10" />
        </div>
        <Braces className="size-4 text-ink/40" />
      </div>
      <div className="relative mt-8 grid grid-cols-[0.7fr_1.3fr] gap-3">
        <div className="space-y-2 rounded-xl border border-ink/10 bg-white p-3">
          <div className="h-2 w-10 rounded-full bg-ink/70" />
          <div className="h-7 rounded-lg bg-paper-2" />
          <div className="h-7 rounded-lg bg-paper-2" />
          <div className="h-7 rounded-lg bg-blue" />
        </div>
        <div className="rounded-xl bg-ink p-3">
          <div className="h-2 w-16 rounded-full bg-white/25" />
          <div className="mt-8 h-3 w-3/4 rounded-full bg-white/80" />
          <div className="mt-3 h-2 w-1/2 rounded-full bg-white/20" />
          <div className="mt-6 h-8 w-24 rounded-full bg-blue-bright" />
        </div>
      </div>
    </div>
  );
}

function ReleasePathVisual() {
  return (
    <div className="mt-9" aria-hidden="true">
      <div className="relative h-32">
        <div className="absolute left-4 right-4 top-1/2 h-px bg-white/15" />
        <div className="absolute left-4 top-1/2 h-px w-[78%] bg-gradient-to-r from-blue-deep to-blue-bright" />
        {["Scope", "Prototype", "Build", "Release"].map((label, index) => (
          <div
            key={label}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${8 + index * 28}%` }}
          >
            <div className={`mx-auto size-4 rounded-full border-4 border-surface-dark ${index === 3 ? "bg-blue-bright" : "bg-blue"}`} />
            <span className="mt-3 block whitespace-nowrap text-[0.65rem] text-white/45">{label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-16 rounded-xl border border-white/10 bg-white/[0.04]" />
        <div className="h-16 rounded-xl border border-white/10 bg-blue/15" />
        <div className="flex h-16 items-center justify-center rounded-xl border border-blue-bright/30 bg-blue-bright/10">
          <Rocket className="size-5 text-blue-bright" />
        </div>
      </div>
    </div>
  );
}

function PerformanceWaveVisual() {
  return (
    <div className="mt-9" aria-hidden="true">
      <div className="flex items-center justify-between">
        <div>
          <div className="mono-label text-white/35">System health</div>
          <div className="mt-2 text-3xl tracking-[-0.05em] text-white">Stable</div>
        </div>
        <div className="flex size-14 items-center justify-center rounded-full border border-blue-bright/30 bg-blue/15">
          <Layers3 className="size-5 text-blue-bright" />
        </div>
      </div>
      <svg className="mt-5 h-32 w-full" viewBox="0 0 400 130" fill="none">
        <path d="M0 85C50 85 48 28 98 28C148 28 150 102 200 102C250 102 252 46 302 46C352 46 350 74 400 74" stroke="rgba(255,255,255,.12)" />
        <path className="signal-dash" d="M0 85C50 85 48 28 98 28C148 28 150 102 200 102C250 102 252 46 302 46C352 46 350 74 400 74" stroke="#12a5e8" strokeWidth="2" />
      </svg>
    </div>
  );
}

function ServiceGraphic({ visual }: { visual: VisualType }) {
  switch (visual) {
    case "mobile-stack":
      return <MobileStackVisual />;
    case "browser-grid":
      return <BrowserGridVisual />;
    case "system-map":
      return <SystemMapVisual />;
    case "interface-canvas":
      return <InterfaceCanvasVisual />;
    case "release-path":
      return <ReleasePathVisual />;
    case "performance-wave":
      return <PerformanceWaveVisual />;
  }
}

export function Services() {
  const [activeId, setActiveId] = useState<Service["id"]>(services[0].id);
  const reduceMotion = useReducedMotion();
  const activeService = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel>{siteData.servicesSection.eyebrow}</SectionLabel>
              <h2 id="services-heading" className="section-title mt-7">
                {siteData.servicesSection.heading}
              </h2>
              <p className="body-large mt-7 max-w-md text-slate">{siteData.servicesSection.body}</p>

              <div
                id="service-preview"
                aria-live="polite"
                className="relative mt-10 min-h-[27rem] overflow-hidden rounded-[1.75rem] bg-surface-dark p-5 text-white shadow-float sm:p-7 lg:min-h-[31rem]"
              >
                <div className="signal-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeService.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <VisualHeader service={activeService} />
                    <ServiceGraphic visual={activeService.visual} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="border-t border-line lg:col-span-7 lg:mt-24">
            {services.map((service) => {
              const active = service.id === activeId;
              const Icon = icons[service.visual];

              return (
                <button
                  key={service.id}
                  type="button"
                  aria-pressed={active}
                  aria-controls="service-preview"
                  onClick={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  onPointerEnter={() => setActiveId(service.id)}
                  className="group w-full border-b border-line py-6 text-left md:py-8"
                >
                  <div className="grid grid-cols-[2.25rem_1fr_auto] items-start gap-3 md:grid-cols-[3.5rem_1fr_auto] md:gap-5">
                    <span className={`font-mono text-xs transition-colors ${active ? "text-blue" : "text-muted"}`}>
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-[520] tracking-[-0.04em] md:text-4xl">
                        {service.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.div
                            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-xl pt-4 text-sm leading-relaxed text-muted md:text-base">
                              {service.summary}
                            </p>
                            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-5">
                              {service.capabilities.map((capability) => (
                                <span key={capability} className="mono-label text-ink/45">
                                  {capability}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span
                      className={`flex size-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "rotate-45 border-blue bg-blue text-white"
                          : "border-line bg-white text-muted group-hover:border-ink/25 group-hover:text-ink"
                      }`}
                    >
                      {active ? <ArrowUpRight className="size-4" /> : <Icon className="size-4" />}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
