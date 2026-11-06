"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleDashed } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { caseStudies, siteData, type CaseStudy } from "@/lib/site-data";

function ProjectVisual({ project }: { project: CaseStudy }) {
  return (
    <div className={`relative flex h-[27rem] flex-col items-center justify-center gap-6 overflow-hidden p-6 sm:h-[35rem] sm:p-8 ${project.visualBackground}`}>
      <div className="signal-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="absolute size-80 rounded-full border border-ink/10 sm:size-[26rem]" aria-hidden="true" />
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes="(max-width: 640px) 162px, 225px"
        className="relative h-72 w-auto max-w-full rounded-[1.5rem] border-[5px] border-ink object-contain shadow-2xl sm:h-[25rem]"
      />
      <p className="relative max-w-[22ch] text-balance text-center text-xl font-medium leading-tight tracking-[-0.04em] text-ink sm:text-2xl">
        {project.tagline}
      </p>
    </div>
  );
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
                    <h3 className="mt-4 text-[clamp(2rem,3.6vw,3.5rem)] font-[520] leading-[0.9] tracking-[-0.06em]">
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
                    <Link
                      href={project.caseStudyHref}
                      aria-label={`Explore ${project.name}`}
                      className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-ink transition-colors hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                    >
                      Explore the app
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-8">
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
