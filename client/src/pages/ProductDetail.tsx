import { useState } from "react";
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
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

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
  const currentImage = gallery[selectedImageIdx] || gallery[0];
  const related = products
    .filter((p: any) => p.category === category && p.title !== product.title)
    .slice(0, 3);
  const categoryLabel = CATEGORY_LABELS[category] || category;

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && selectedImageIdx < gallery.length - 1) setSelectedImageIdx(selectedImageIdx + 1);
      else if (diff < 0 && selectedImageIdx > 0) setSelectedImageIdx(selectedImageIdx - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
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

      {/* Product Hero + Gallery */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <div>
              <div
                className="ds-card-image aspect-[4/5] mb-4 sm:mb-6 cursor-grab active:cursor-grabbing"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <img src={currentImage} alt={product.title} draggable={false} />
              </div>

              {gallery.length > 1 && (
                <p className="text-xs text-text-muted text-center mb-3 md:hidden">
                  {selectedImageIdx + 1} / {gallery.length}
                </p>
              )}

              {gallery.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2 sm:gap-3">
                  {gallery.slice(0, 8).map((img: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImageIdx(i)}
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all min-h-[60px] sm:min-h-[80px] ${
                        selectedImageIdx === i ? "border-text" : "border-line"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="ds-label">{categoryLabel}</span>
              <h1 className="mt-3 mb-5">{product.title}</h1>
              <p className="text-text-body leading-relaxed mb-8">{product.description}</p>

              <div className="pb-8 mb-8 border-b border-line">
                <h3 className="mb-4">Craftsmanship</h3>
                <ul className="space-y-3 text-text-body">
                  {[
                    "Premium materials & finishes",
                    "Soft-close mechanisms (Blum / Hettich)",
                    "Moisture-resistant board technology",
                    "Precision edge-banding & CNC machining",
                    "Modular assembly systems",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Link href="/contact" asChild>
                  <CTAButton variant="primary" className="w-full">Inquire About This Design</CTAButton>
                </Link>
                <Link href={`/${category}`} asChild>
                  <CTAButton variant="secondary" className="w-full">← Back to {categoryLabel}</CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section variant="alt" size="md">
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

      <Section variant="default" size="md">
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
