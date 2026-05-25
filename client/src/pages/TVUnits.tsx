import { Link } from "wouter";
import products from "../data/products.json";

export default function TVUnits() {
  const items = products.filter((p) => p.category === "tv-units");

  return (
    <div className="w-full">
      <section className="bg-stone1 py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <span className="eyebrow">TV & Living Cabinets</span>
          <h1 className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-4 leading-tight">
            Media Walls &<br />
            <em className="italic">Entertainment Spaces.</em>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-6 sm:mt-8 text-mute text-sm sm:text-base leading-relaxed max-w-2xl">
            Sleek TV units, bar cabinets, and media storage that anchor your living room. Design that works as hard as it looks.
          </p>
        </div>
      </section>

      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {items.map((item, i) => (
              <Link key={i} href={`/tv-units/${item.slug || item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <a className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-stone1 mb-4 sm:mb-5 md:mb-6 rounded image-crop-watermark">
                    <img
                      src={product.gallery?.[0] || ''}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-base sm:text-lg line-clamp-2">{item.title}</h3>
                  <p className="text-[12px] text-mute mt-2 line-clamp-2">{item.description?.split("\n")[0]}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone1 grain relative py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
            Design Your Living Room
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-6 sm:mt-8 text-mute text-sm sm:text-base leading-relaxed">
            Media walls that make a statement — storage that disappears into the design, technology that works seamlessly.
          </p>
          <Link href="/contact" asChild>
            <a className="inline-block mt-6 sm:mt-8 bg-ink text-paper px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors">
              Explore Media Cabinet Options →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
