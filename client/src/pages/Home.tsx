import { Link } from "wouter";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import products from "../data/products.json";

export default function Home() {
  useScrollAnimations();

  // Helpers
  const findProduct = (cat: string, keyword?: string) => {
    if (keyword) {
      const k = keyword.toLowerCase();
      const match = products.find(
        (p) => p.category === cat && p.title.toLowerCase().includes(k) && p.gallery?.[0]
      );
      if (match) return match;
    }
    return products.find((p) => p.category === cat && p.gallery?.[0]);
  };

  const getImageForCategory = (cat: string) => findProduct(cat)?.gallery?.[0] || "";

  // Hero image
  const kitchenImage = getImageForCategory("kitchens");

  const categories = [
    {
      title: "Kitchens",
      description: "Islands, sculleries, and galley kitchens — from compact condos to expansive family homes.",
      image: getImageForCategory("kitchens"),
      href: "/kitchens",
    },
    {
      title: "Bedrooms",
      description: "Walk-in closets and bedroom wardrobes — storage that feels like part of the architecture.",
      image: getImageForCategory("bedrooms"),
      href: "/bedrooms",
    },
    {
      title: "Wardrobes",
      description: "Built-in closets and dressing rooms — tailored to the way you live and dress.",
      image: getImageForCategory("wardrobes"),
      href: "/wardrobes",
    },
    {
      title: "Bathrooms",
      description: "Spa-inspired vanities and storage — moisture-resistant boards, beautifully finished.",
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
      description: "Media walls, bar cabinets, and accent storage — entertainment spaces composed with restraint.",
      image: getImageForCategory("tv-units"),
      href: "/tv-units",
    },
    {
      title: "Laundry",
      description: "Utility spaces, beautifully organized — quiet storage that works as hard as you do.",
      image: getImageForCategory("laundry"),
      href: "/laundry",
    },
  ];

  // Design Studies — curated 6 concept rooms
  const designStudies = [
    {
      title: "Modern Walnut Kitchen Concept",
      description: "A study in warmth and quiet contrast — walnut grain, honed stone, and an island built for slow mornings.",
      image: findProduct("kitchens", "Curved")?.gallery?.[0] || getImageForCategory("kitchens"),
      href: "/kitchens",
    },
    {
      title: "Minimalist Walk-in Wardrobe Study",
      description: "An exploration of full-height cabinetry, recessed handles, and the discipline of open shelving.",
      image: findProduct("wardrobes", "Walk in Closet")?.gallery?.[0] || getImageForCategory("wardrobes"),
      href: "/wardrobes",
    },
    {
      title: "Quiet Bedroom Suite Concept",
      description: "Storage drawn at the scale of the room — proportion, texture, and a restful palette of muted tones.",
      image: findProduct("bedrooms", "Walk in Closet")?.gallery?.[0] || getImageForCategory("bedrooms"),
      href: "/bedrooms",
    },
    {
      title: "Floating Vanity Direction",
      description: "Light catches the underplane — a directional study in stone, lacquer, and the geometry of shadow.",
      image: findProduct("vanities", "Floating")?.gallery?.[0] || getImageForCategory("vanities"),
      href: "/vanities",
    },
    {
      title: "Spa-Inspired Bathroom Concept",
      description: "Moisture-resistant cabinetry composed around natural light — a brief for calm, considered everyday rituals.",
      image: findProduct("bathrooms", "Beige")?.gallery?.[0] || getImageForCategory("bathrooms"),
      href: "/bathrooms",
    },
    {
      title: "Bar & Media Wall Study",
      description: "A living-room composition that holds glassware, books, and the television — without raising its voice.",
      image: findProduct("tv-units", "bar")?.gallery?.[0] || getImageForCategory("tv-units"),
      href: "/tv-units",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero — Mobile-first: 50vh on mobile, 80vh on desktop */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden bg-stone1 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={kitchenImage}
            alt="BERCO bespoke kitchen — walnut and stone composition"
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
            Quiet, considered interiors — drawn by hand, joined by craftsmen, installed in the homes of those who live with intention.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col gap-3 sm:gap-4">
            <Link href="/contact" asChild>
              <a className="bg-paper text-ink px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-paper/90 transition-colors w-full sm:w-auto inline-block">
                Book a Design Consultation →
              </a>
            </Link>
            <Link href="/kitchens" asChild>
              <a className="border border-paper text-paper px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-paper hover:text-ink transition-colors w-full sm:w-auto inline-block">
                Explore Our Cabinetry Collections
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Statement */}
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

      {/* Categories — Explore by Space */}
      <section className="bg-ivory py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="stagger">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">002 — Explore by Space</span>
            <h2 className="font-display mt-4 leading-tight">
              Bespoke, room by room.
            </h2>
          </div>

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

      {/* Why BERCO — Trust-building, restrained tone */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="fade-up">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
            <div className="md:col-span-5">
              <span className="eyebrow">003 — Why BERCO</span>
              <h2 className="font-display mt-4 leading-tight">
                Designed for how<br />
                <em className="italic">we live here.</em>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-mute leading-relaxed text-sm sm:text-base">
                Philippine homes ask more of cabinetry than most. Humidity, salt air, narrow condo loadings, and the specific way a Filipino household actually cooks, hosts, and stores. BERCO is built around those realities — not adapted to them after the fact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12" data-animate="stagger">
            {[
              {
                num: "i.",
                title: "Custom-fit for Philippine homes",
                desc: "Every cabinet is drawn to the millimetre of your space — condo bulkheads, low ceilings, irregular walls, and the slope of an older house all accounted for before fabrication begins.",
              },
              {
                num: "ii.",
                title: "A guided design process",
                desc: "One designer follows your project from first sketch to final hinge. You'll always know who to call, and the drawings will always reflect the conversation you just had.",
              },
              {
                num: "iii.",
                title: "Moisture-resistant boards",
                desc: "Marine-grade and CARB P2-certified substrates with PUR edge-banding — chosen for the tropical climate and held to specification for the decade ahead.",
              },
              {
                num: "iv.",
                title: "Premium European hardware",
                desc: "Blum soft-close hinges, Hettich drawer systems, and Salice mechanisms — the same components specified by the European studios we admire.",
              },
              {
                num: "v.",
                title: "CNC precision, hand-finished",
                desc: "Computer-controlled cutting and PUR edge-banding deliver joinery accurate to the half-millimetre. The hand-finishing, sanding, and final fit are still done by people who care.",
              },
              {
                num: "vi.",
                title: "Built for the tropics",
                desc: "Specified for Philippine humidity, daily heat cycles, and coastal air — so doors stay flush, drawers stay aligned, and finishes hold their depth season after season.",
              },
            ].map((point) => (
              <div key={point.num} data-stagger-item>
                <p className="text-xs uppercase tracking-widest2 text-bronze mb-3">{point.num}</p>
                <h4 className="font-display text-lg sm:text-xl mb-3">{point.title}</h4>
                <p className="text-mute text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-14">
            <Link href="/process" asChild>
              <a className="inline-block text-ink font-semibold text-sm uppercase tracking-widest2 hover:text-bronze transition-colors">
                The materials and how we build →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Studies by BERCO — concepts, not projects */}
      <section className="bg-ivory py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="stagger">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="md:col-span-5">
              <span className="eyebrow">004 — Design Studies by BERCO</span>
              <h2 className="font-display mt-4 leading-tight">
                Cabinetry<br />
                <em className="italic">concepts &amp; directions.</em>
              </h2>
            </div>
            <div className="md:col-span-7 flex md:items-end">
              <p className="text-mute leading-relaxed text-sm sm:text-base">
                A small collection of in-house studies — material directions, sample layouts, and concept rooms drawn by the BERCO studio. These are starting points for conversation, not finished homes. Use them to find the language you want for yours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" data-animate="stagger">
            {designStudies.map((study, i) => (
              <Link key={study.title} href={study.href} asChild>
                <a className="group cursor-pointer" data-stagger-item>
                  <div className="aspect-[4/5] bg-stone1 overflow-hidden image-crop-watermark mb-4 sm:mb-5">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-widest2 text-bronze mb-2">
                    Study No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-lg sm:text-xl mb-2 leading-tight">{study.title}</h3>
                  <p className="text-mute text-sm leading-relaxed">{study.description}</p>
                </a>
              </Link>
            ))}
          </div>

          <p className="mt-10 md:mt-12 text-[12px] uppercase tracking-widest2 text-mute max-w-2xl">
            Studies prepared by the BERCO design studio. Final projects are drawn from the ground up around each client's home, plan, and brief.
          </p>
        </div>
      </section>

      {/* Process Preview */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="fade-up">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">005 — How BERCO Works</span>
            <h2 className="font-display mt-4 leading-tight">
              Four conversations between you and the work.
            </h2>
          </div>

          <p className="text-mute text-sm sm:text-base leading-relaxed max-w-2xl mb-8 sm:mb-12">
            Every BERCO interior begins with listening. From the first sketch to the final hinge, the process is unhurried — and the same designer follows your home through.
          </p>

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

      {/* CTA */}
      <section className="bg-ivory py-mobile sm:py-mobile-lg md:py-mobile-xl" data-animate="fade-up">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-display mb-6 sm:mb-8">The Heart of Your Home.</h2>
          <p className="text-mute text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Begin your BERCO design journey with a quiet conversation about your space, the way you live, and the cabinetry that would make it feel resolved.
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
