import { Link, useRoute } from "wouter";
import products from "../data/products.json";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import CTAButton from "../components/layout/CTAButton";
import { ProductCard } from "../components/layout/ProductGrid";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const CATEGORY_LABELS: Record<string, string> = {
  kitchens: "Kitchens",
  bedrooms: "Bedrooms",
  wardrobes: "Wardrobes",
  bathrooms: "Bathrooms",
  vanities: "Vanities",
  "tv-units": "TV & Living",
  laundry: "Laundry",
};

export default function ProductDetail() {
  const [route, params] = useRoute("/:category/:slugParam");

  if (!route) return null;
  const { category, slugParam } = params as { category: string; slugParam: string };

  const product = products.find(
    (p: any) => p.category === category && slug(p.title) === slugParam
  );

  if (!product) {
    return (
      <Section variant="default" size="md">
        <Container className="text-center">
          <h1>Product Not Found</h1>
          <Link href={`/${category}`} asChild>
            <CTAButton variant="link">← Back to {category}</CTAButton>
          </Link>
        </Container>
      </Section>
    );
  }

  const gallery = product.gallery || [];
  const heroImage = gallery[0];
  const related = products
    .filter((p: any) => p.category === category && p.title !== product.title)
    .slice(0, 3);
  const categoryLabel = CATEGORY_LABELS[category] || category;

  return (
    <div className="w-full">
      <div className="bg-bg border-b border-line py-3 sm:py-4">
        <Container>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted overflow-x-auto">
            <Link href="/" asChild>
              <a className="hover:text-text transition-colors whitespace-nowrap">Home</a>
            </Link>
            <span>/</span>
            <Link href={`/${category}`} asChild>
              <a className="hover:text-text transition-colors whitespace-nowrap">{categoryLabel}</a>
            </Link>
            <span>/</span>
            <span className="text-text truncate">{product.title}</span>
          </div>
        </Container>
      </div>

      <Section variant="default" size="md">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
            <span className="ds-label">{categoryLabel}</span>
            <h1 className="mt-4 mb-5">{product.title}</h1>
            <p className="text-text-body leading-relaxed text-lg max-w-3xl mx-auto">
              {product.description}
            </p>
          </div>
        </Container>

        {heroImage && (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1500px] mx-auto ds-card-image aspect-[16/10] md:aspect-[16/8]">
              <img src={heroImage} alt={product.title} />
            </div>
          </div>
        )}
      </Section>

      {gallery.length > 1 && (
        <Section variant="default" size="sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1500px] mx-auto space-y-5 sm:space-y-8">
              {gallery.slice(1).map((img: string, index: number) => (
                <div key={img} className={`ds-card-image ${index % 3 === 0 ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                  <img src={img} alt={`${product.title} gallery ${index + 2}`} />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section variant="alt" size="md">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <div>
              <span className="ds-label">Design Notes</span>
              <h2 className="mt-4 mb-5">Large-format imagery, refined details, and cabinetry made for daily life.</h2>
              <p className="text-text-body leading-relaxed text-lg">
                This design can be adapted to your exact floor plan, material preferences, storage needs, and finish palette. BERCO’s team coordinates proportions, hardware, surfaces, and installation details so the final interior feels architectural, personal, and complete.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Premium materials & finishes",
                "Soft-close mechanisms (Blum / Hettich)",
                "Moisture-resistant board technology",
                "Precision edge-banding & CNC machining",
                "Modular assembly systems",
                "Coordinated whole-home palettes",
              ].map((item) => (
                <div key={item} className="bg-bg border border-line p-5">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <p className="mt-3 text-text-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <Link href="/contact" asChild>
              <CTAButton variant="primary" className="w-full">Inquire About This Design</CTAButton>
            </Link>
            <Link href={`/${category}`} asChild>
              <CTAButton variant="secondary" className="w-full">← Back to {categoryLabel}</CTAButton>
            </Link>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section variant="default" size="md">
          <Container>
            <h2 className="mb-10">Explore More Designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
              {related.map((item: any, i: number) => (
                <ProductCard key={i} item={item} hrefPrefix={`/${item.category}`} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section variant="alt" size="md">
        <Container width="narrow" className="text-center">
          <h2 className="mb-5">How We Design</h2>
          <p className="text-text-body leading-relaxed mb-8 max-w-xl mx-auto">
            From your first consultation to installation, we guide you through every step. Discover our process.
          </p>
          <Link href="/process" asChild>
            <CTAButton variant="primary">View Our Process →</CTAButton>
          </Link>
        </Container>
      </Section>
    </div>
  );
}
