import { Link } from "wouter";
import products from "../data/products.json";

export default function WholeHome() {
  // Combine kitchen and bedroom for whole-home showcase
  const wholeHome = [
    ...products.filter((p) => p.category === "kitchen-cabinets" && p.main).slice(0, 3),
    ...products.filter((p) => p.category === "bedroom" && p.main).slice(0, 3),
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-stone1 py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <span className="eyebrow">Whole Home</span>
          <h1 className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-4 leading-tight">
            Coordinated Cabinetry<br />
            <em className="italic">Across Every Room.</em>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-6 sm:mt-8 text-mute text-sm sm:text-base leading-relaxed max-w-2xl">
            Unified design language from kitchen to bedroom to living spaces. One designer, one vision, one hand. Cabinetry that flows through your home with intention and grace.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {wholeHome.map((item, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-stone1 mb-4 sm:mb-5 md:mb-6 rounded">
                  <img
                    src={item.main}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-base sm:text-lg line-clamp-2">{item.title}</h3>
                <p className="text-[12px] text-mute mt-2 line-clamp-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone1 grain relative py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
            Design Your Entire Home.
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-6 sm:mt-8 text-mute text-sm sm:text-base leading-relaxed">
            Imagine every room working together — kitchens, bedrooms, living spaces — all unified by one thoughtful design vision. That's BERCO whole-home cabinetry.
          </p>
          <Link href="/contact" asChild>
            <a className="inline-block mt-6 sm:mt-8 bg-ink text-paper px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors">
              Book a Whole-Home Consultation →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
