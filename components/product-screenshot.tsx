import Image from "next/image";
import { caseStudies } from "@/lib/site-data";
import { Container } from "@/components/ui/container";

export function ProductScreenshot({ path }: { path: string }) {
  const product = caseStudies.find((item) => item.caseStudyHref === path);
  if (!product) return null;
  return (
    <section className="border-t border-line bg-paper py-12 sm:py-16" aria-label={`${product.name} screenshot`}>
      <Container>
        <figure className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <a href={product.image.src} aria-label={`View full-size ${product.name} screenshot`} className="shrink-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-blue">
            <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} sizes="160px" className="h-auto w-40 rounded-2xl border border-line" />
          </a>
          <figcaption className="max-w-md">
            <h2 className="text-2xl font-medium tracking-tight">A look inside {product.name}.</h2>
            <p className="mt-4 leading-7 text-slate">{product.image.alt}. Select the image to view the full screenshot.</p>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
