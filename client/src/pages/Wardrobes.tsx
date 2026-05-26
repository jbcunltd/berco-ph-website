import { Link } from "wouter";
import products from "../data/products.json";

const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function Wardrobes() {
  const items = products.filter((p) => p.category === "wardrobes");

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-stone1 py-section-xl sm:py-section-lg md:py-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <span className="eyebrow">Wardrobes &amp; Closets</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl mt-2 sm:mt-3 md:mt-4 leading-tight">
            Walk-ins, Sliding Doors,<br />
            <em className="italic">and Built-in Dressing Rooms.</em>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-body text-sm sm:text-base leading-relaxed max-w-2xl">
            Tailored to how you live and dress. Full-height cabinetry in oak, walnut, and lacquer. Soft-close hinges. Brushed bronze hardware. Organised, quiet, and built to last.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-paper py-section-xl sm:py-section-lg md:py-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-card-mobile sm:gap-card-tablet md:gap-card-desktop">
            {items.map((item, i) => (
              <Link key={i} href={`/wardrobes/${generateSlug(item.title)}`} asChild>
                <a className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-stone1 mb-4 sm:mb-5 md:mb-6 rounded image-crop-watermark">
                    <img
                      src={item.gallery?.[0] || ""}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-base sm:text-lg line-clamp-2">{item.title}</h3>
                  <p className="text-[12px] text-body mt-2 line-clamp-2">
                    {item.description?.split("\n")[0]}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone1 grain relative py-section-xl sm:py-section-lg md:py-section">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
            Start with a design<br />
            <em className="italic">conversation.</em>
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-8 text-body text-sm sm:text-base leading-relaxed">
            Tell us about your layout, materials, and how your kitchen will be used every day.
          </p>
          <Link href="/contact" asChild>
            <a className="inline-block mt-6 sm:mt-8 bg-ink text-light px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-wide uppercase font-semibold hover:bg-ink/90 transition-colors">
              Start Your Design Consultation →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
