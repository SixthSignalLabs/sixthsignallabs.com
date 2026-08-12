import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="oryfin-dot-grid border-b border-[var(--oryfin-line)] bg-white">
      <Container className="py-14 sm:py-20 lg:py-24">
        <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-medium tracking-[-0.065em] text-[var(--oryfin-ink)]">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[var(--oryfin-copy)] sm:text-xl">
          {description}
        </p>
      </Container>
    </section>
  );
}
