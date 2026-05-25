import { useState } from "react";
import { Link, useRoute } from "wouter";
import products from "../data/products.json";

export default function ProductDetail() {
  const [route, params] = useRoute("/:category/:slug");
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  
  if (!route) return null;

  const { category, slug } = params as { category: string; slug: string };
  
  const generateSlug = (title: string) => 
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  
  const product = products.find(
    (p) => p.category === category && generateSlug(p.title) === slug
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4">Product Not Found</h1>
          <Link href={`/${category}`} asChild>
            <a className="text-bronze hover:underline text-sm sm:text-base">← Back to {category}</a>
          </Link>
        </div>
      </div>
    );
  }

  const gallery = product.gallery || [];
  const currentImage = gallery[selectedImageIdx] || gallery[0];
  
  // Related products from same category
  const related = products
    .filter((p) => p.category === category && p.title !== product.title)
    .slice(0, 3);

  const categoryLabel = {
    kitchens: "Kitchens",
    bedrooms: "Bedrooms",
    wardrobes: "Wardrobes",
    bathrooms: "Bathrooms",
    vanities: "Vanities",
    "tv-units": "TV & Living",
    laundry: "Laundry",
  }[category] || category;

  // Touch swipe handler for gallery
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && selectedImageIdx < gallery.length - 1) {
        setSelectedImageIdx(selectedImageIdx + 1);
      } else if (diff < 0 && selectedImageIdx > 0) {
        setSelectedImageIdx(selectedImageIdx - 1);
      }
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb — Mobile-first */}
      <div className="bg-paper border-b border-stone2 py-3 sm:py-4 md:py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-mute overflow-x-auto">
            <Link href="/" asChild>
              <a className="hover:text-ink transition-colors whitespace-nowrap">Home</a>
            </Link>
            <span className="text-mute">/</span>
            <Link href={`/${category}`} asChild>
              <a className="hover:text-ink transition-colors whitespace-nowrap">{categoryLabel}</a>
            </Link>
            <span className="text-mute">/</span>
            <span className="text-ink truncate">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Hero + Gallery — Mobile: stacked, Desktop: side-by-side */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Gallery — Mobile-first: full width, swipeable */}
            <div>
              {/* Main image — Touch-swipeable */}
              <div
                className="aspect-[4/5] bg-stone1 rounded overflow-hidden mb-4 sm:mb-6 image-crop-watermark cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={currentImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Image counter on mobile */}
              {gallery.length > 1 && (
                <p className="text-xs text-mute text-center mb-3 md:hidden">
                  {selectedImageIdx + 1} / {gallery.length}
                </p>
              )}

              {/* Thumbnail grid — Mobile: 4 cols, Desktop: 4 cols */}
              {gallery.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2 sm:gap-3">
                  {gallery.slice(0, 8).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImageIdx(i)}
                      className={`aspect-square rounded overflow-hidden border-2 transition-all min-h-[60px] sm:min-h-[80px] ${
                        selectedImageIdx === i ? "border-ink" : "border-stone2"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details — Mobile-first stacked */}
            <div>
              <div className="mb-6 sm:mb-8">
                <span className="eyebrow">{categoryLabel}</span>
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4 leading-tight mb-4 sm:mb-6">
                  {product.title}
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-ink mb-6 sm:mb-8">
                  {product.description}
                </p>
              </div>

              {/* Materials & Features */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-stone2">
                <h3 className="font-display text-base sm:text-lg mb-4">Craftsmanship</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-mute">
                  <li className="flex gap-3">
                    <span className="text-bronze flex-shrink-0">✓</span>
                    <span>Premium materials & finishes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-bronze flex-shrink-0">✓</span>
                    <span>Soft-close mechanisms (Blum / Hettich)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-bronze flex-shrink-0">✓</span>
                    <span>Moisture-resistant board technology</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-bronze flex-shrink-0">✓</span>
                    <span>Precision edge-banding & CNC machining</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-bronze flex-shrink-0">✓</span>
                    <span>Modular assembly systems</span>
                  </li>
                </ul>
              </div>

              {/* CTA — Full width, large touch targets */}
              <div className="space-y-3 sm:space-y-4">
                <Link href="/contact" asChild>
                  <a className="block w-full bg-ink text-paper py-4 sm:py-5 text-center text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors rounded min-h-[48px] flex items-center justify-center">
                    Inquire About This Design
                  </a>
                </Link>
                <Link href={`/${category}`} asChild>
                  <a className="block w-full border border-ink text-ink py-4 sm:py-5 text-center text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-stone1 transition-colors rounded min-h-[48px] flex items-center justify-center">
                    ← Back to {categoryLabel}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products — Mobile-first */}
      {related.length > 0 && (
        <section className="bg-stone1 py-mobile sm:py-mobile-lg md:py-mobile-xl">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12">Explore More Designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {related.map((item, i) => (
                <Link key={i} href={`/${item.category}/${generateSlug(item.title)}`} asChild>
                  <a className="group block">
                    <div className="aspect-[4/5] overflow-hidden bg-paper mb-4 sm:mb-5 md:mb-6 rounded image-crop-watermark">
                      <img
                        src={item.gallery?.[0]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-display text-base sm:text-lg line-clamp-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-mute mt-2 line-clamp-2">{item.description?.split("\n")[0]}</p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process CTA — Mobile-first */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 sm:mb-6 md:mb-8">
            How We Design
          </h2>
          <p className="text-sm sm:text-base text-mute leading-relaxed mb-6 sm:mb-8">
            From your first consultation to installation, we guide you through every step. Discover our process.
          </p>
          <Link href="/process" asChild>
            <a className="inline-block bg-ink text-paper px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors rounded min-h-[44px] flex items-center justify-center">
              View Our Process →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
