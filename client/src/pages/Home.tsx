import { Link } from "wouter";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import products from "../data/products.json";

export default function Home() {
  useScrollAnimations();
  // Get one featured image per category
  const getImageForCategory = (cat: string) => {
    const product = products.find((p) => p.category === cat && p.gallery?.[0]);
    return product?.gallery?.[0] || "";
  };

  // Hero image
  const kitchenImage = getImageForCategory("kitchens");

  const categories = [
    {
      title: "Kitchens",
      description: "Islands, sculleries, and galley kitchens — from compact condos to sprawling villas.",
      image: getImageForCategory("kitchens"),
      href: "/kitchens",
    },
    {
      title: "Bedrooms",
      description: "Walk-in closets and bedroom wardrobes — storage that feels like part of the design.",
      image: getImageForCategory("bedrooms"),
      href: "/bedrooms",
    },
    {
      title: "Wardrobes",
      description: "Built-in closets and dressing rooms — tailored to how you live and dress.",
      image: getImageForCategory("wardrobes"),
      href: "/wardrobes",
    },
    {
      title: "Bathrooms",
      description: "Spa-inspired vanities and storage — moisture-resistant, beautifully finished.",
      image: getImageForCategory("bathrooms"),
      href: "/bathrooms",
    },
    {
      title: "Vanities",
      description: "Floating and freestanding — stone, lacquer, and natural wood finishes.",
      image: getImageForCategory("vanities"),
      href: "/vanities",
    },
    {
      title: "TV & Living",
      description: "Media walls, bar cabinets, and accent storage — entertainment spaces designed.",
      image: getImageForCategory("tv-units"),
      href: "/tv-units",
    },
    {
      title: "Laundry",
      description: "Utility spaces beautifully organized — smart storage that works as hard as you do.",
      image: getImageForCategory("laundry"),
      href: "/laundry",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero — Mobile-first: 50vh on mobile, 80vh on desktop */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden bg-stone1 flex items-center justify-center">
        {/* Image container with aggressive watermark crop */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={kitchenImage}
            alt="Hero kitchen"
            className="w-full h-[110%] object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
        <div className="relative z-10 text-center text-paper px-4 sm:px-6 py-8">
          <p className="text-xs sm:text-sm tracking-widest2 uppercase text-paper/80">Bespoke Cabinetry · Manila</p>
          <h1 className="font-display mt-3 sm:mt-6 leading-tight">
            Custom Cabinetry<br />
            for <em className="italic">Philippine</em> Homes.
          </h1>
          <p className="mt-4 sm:mt-8 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-paper/90">
            Quiet, considered interiors — drawn by hand, joined by craftsmen, installed in the houses of those who live with intention.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col gap-3 sm:gap-4">
            <Link href="/contact" asChild>
              <a className="bg-paper text-ink px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-paper/90 transition-colors w-full sm:w-auto inline-block">
                Book a Consultation →
              </a>
            </Link>
            <Link href="/kitchens" asChild>
              <a className="border border-paper text-paper px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-paper hover:text-ink transition-colors w-full sm:w-auto inline-block">
                View Recent Projects
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Statement — Mobile-first stacked, desktop side-by-side */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="fade-up">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4">
              <span className="eyebrow">001 — Studio</span>
              <h2 className="font-display mt-4 leading-tight">
                We design cabinetry the way architects draw.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-mute leading-relaxed mb-4">
                With restraint, proportion, and a reverence for the materials beneath the lacquer. Every interior begins with listening — understanding how you live before we design what you'll build.
              </p>
              <Link href="/process" asChild>
                <a className="inline-block text-ink font-semibold text-sm uppercase tracking-widest2 hover:text-bronze transition-colors">
                  Our Approach →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories — Mobile-first single column, desktop grid */}
      <section className="bg-ivory py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="stagger">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">002 — Our Categories</span>
            <h2 className="font-display mt-4 leading-tight">
              Bespoke by Room.
            </h2>
          </div>

          {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" data-animate="stagger">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} asChild>
                <a className="group cursor-pointer" data-stagger-item>
                  <div className="aspect-[4/5] bg-stone1 overflow-hidden image-crop-watermark mb-4 sm:mb-6">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl mb-2">{cat.title}</h3>
                  <p className="text-mute text-sm sm:text-base leading-relaxed mb-4">{cat.description}</p>
                  <span className="inline-block text-ink font-semibold text-xs sm:text-sm uppercase tracking-widest2 hover:text-bronze transition-colors">
                    Explore →
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview — Mobile-first stacked */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="fade-up">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">003 — How BERCO Works</span>
            <h2 className="font-display mt-4 leading-tight">
              Four conversations between you and the work.
            </h2>
          </div>

          <p className="text-mute text-sm sm:text-base leading-relaxed max-w-2xl mb-8 sm:mb-12">
            Every BERCO interior begins with listening. From the first sketch to the final hinge, the process is unhurried — and the same designer follows your home through.
          </p>

          {/* Process steps — Mobile: 1 col, Desktop: 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 sm:mb-12" data-animate="stagger">
            {[
              { num: "i.", title: "Consult", desc: "A studio visit, or a house call. We discuss how you live before we discuss what you'll build." },
              { num: "ii.", title: "Design", desc: "Hand drawings, then 3D — refined over two to three rounds, with materials laid out on the table." },
              { num: "iii.", title: "Build", desc: "Fabricated in our Laguna atelier with European hardware and Philippine hardwoods, where appropriate." },
              { num: "iv.", title: "Install", desc: "A small, dedicated team. Dust-controlled installation. A ten-year structural warranty signed at handover." },
            ].map((step) => (
              <div key={step.num} data-stagger-item>
                <p className="text-xs uppercase tracking-widest2 text-mute mb-2">{step.num}</p>
                <h4 className="font-display text-base sm:text-lg mb-3">{step.title}</h4>
                <p className="text-mute text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/process" asChild>
            <a className="inline-block text-ink font-semibold text-sm uppercase tracking-widest2 hover:text-bronze transition-colors">
              Full Process Timeline →
            </a>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ivory py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="fade-up">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-display mb-6 sm:mb-8">The Heart of Your Home.</h2>
          <p className="text-mute text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Ready to explore custom cabinetry for your space? Let's start a conversation about how BERCO can bring your vision to life.
          </p>
          <Link href="/contact" asChild>
            <a className="inline-block bg-ink text-paper px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors">
              Book a Design Consultation →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
