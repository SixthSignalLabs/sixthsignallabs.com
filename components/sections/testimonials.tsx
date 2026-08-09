import { Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { siteData, testimonials } from "@/lib/site-data";

export function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section aria-labelledby="testimonials-heading" className="section-pad bg-paper">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel>{siteData.testimonialsSection.eyebrow}</SectionLabel>
            <h2 id="testimonials-heading" className="section-title mt-7">
              {siteData.testimonialsSection.heading}
            </h2>
          </div>
          <p className="body-large text-slate md:col-span-4">{siteData.testimonialsSection.body}</p>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <figure className="relative overflow-hidden border-y border-line py-10 md:py-16">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-2">
                <div className="flex size-14 items-center justify-center rounded-full border border-dashed border-blue/40 bg-blue/8">
                  <Quote className="size-5 text-blue" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="mono-label mt-5 inline-block rounded-full border border-line bg-white px-3 py-2 text-muted">
                  Placeholder structure
                </span>
              </div>
              <div className="md:col-span-9 md:col-start-4">
                <blockquote className="max-w-[22ch] text-[clamp(2.5rem,5vw,5.5rem)] font-[500] leading-[0.98] tracking-[-0.055em] text-ink/38">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4 border-t border-line pt-6">
                  <div className="flex size-11 items-center justify-center rounded-full border border-dashed border-line bg-white font-mono text-[0.55rem] text-muted" aria-label="Avatar placeholder">
                    IMG
                  </div>
                  <div>
                    <p className="font-medium text-ink/48">{testimonial.clientName}</p>
                    <p className="mt-1 text-sm text-muted">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
