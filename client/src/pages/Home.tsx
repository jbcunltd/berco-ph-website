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
      {/* 1. HERO — Mobile-first 3-second clarity */}
      <section className="relative bg-paper">
        {/* Mobile: stacked text-first */}
        <div className="md:hidden px-5 py-12 text-center">
          <p className="text-[11px] tracking-widest2 uppercase text-mute mb-4">Bespoke Cabinetry · Manila</p>
          <h1 className="text-4xl sm:text-5xl leading-tight mb-4 text-ink">Custom Cabinetry for <em className="italic">Philippine</em> Homes.</h1>
          <p className="text-sm leading-relaxed text-body mb-8 max-w-md mx-auto">Quiet, considered storage — kitchens, wardrobes, vanities, and refined spaces.</p>
          <div className="flex flex-col gap-3">
            <Link href="/contact" asChild>
              <a className="bg-ink text-light px-6 py-3.5 text-xs tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors rounded">Book a Design Consultation →</a>
            </Link>
            <Link href="/kitchens" asChild>
              <a className="border border-ink text-ink px-6 py-3.5 text-xs tracking-widest2 uppercase font-semibold hover:bg-ink hover:text-light transition-colors rounded">Explore Collections</a>
            </Link>
          </div>
          <div className="relative h-80 bg-stone1 overflow-hidden image-crop-watermark mt-8">
            <img src={kitchenImage} alt="BERCO cabinetry" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Desktop: side-by-side */}
        <div className="hidden md:grid md:grid-cols-2 md:min-h-[70vh] md:items-center md:gap-12">
          <div className="relative h-full bg-stone1 overflow-hidden image-crop-watermark"><img src={kitchenImage} alt="BERCO cabinetry" className="w-full h-full object-cover" /></div>
          <div className="px-8 py-12 text-left">
            <p className="text-xs tracking-widest2 uppercase text-mute mb-6">Bespoke Cabinetry · Manila</p>
            <h1 className="text-5xl lg:text-6xl leading-tight mb-6 text-ink">Custom Cabinetry for <em className="italic">Philippine</em> Homes.</h1>
            <p className="text-base leading-relaxed text-body mb-10 max-w-lg">Quiet, considered storage — kitchens, wardrobes, vanities, and refined spaces shaped around the way you live.</p>
            <div className="flex gap-4">
              <Link href="/contact" asChild>
                <a className="bg-ink text-light px-8 py-3.5 text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors rounded">Book a Design Consultation →</a>
              </Link>
              <Link href="/kitchens" asChild>
                <a className="border border-ink text-ink px-8 py-3.5 text-sm tracking-widest2 uppercase font-semibold hover:bg-ink hover:text-light transition-colors rounded">Explore Collections</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRO */}
      <section className="bg-paper py-section-xl sm:py-section-lg md:py-section reveal">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4">
              <span className="eyebrow">Studio</span>
              <h2 className="mt-4 leading-tight">
                We design cabinetry the way architects draw.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-body leading-relaxed mb-4">
                With restraint, proportion, and a reverence for the materials beneath the lacquer. Every interior begins with listening — understanding how you live before we design what you'll build.
              </p>
              <Link href="/process" asChild>
                <a className="inline-block text-ink font-semibold text-sm uppercase tracking-widest2 hover:text-champagne transition-colors">
                  Our Approach →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COLLECTIONS */}
      <section className="bg-ivory py-section-mobile sm:py-section-tablet md:py-section reveal">
        <div className="max-w-content mx-auto px-5 sm:px-6 md:px-8">
          <div className="mb-10 md:mb-16">
            <span className="eyebrow">Collections</span>
            <h2 className="mt-4 leading-tight mb-4">Explore cabinetry by space</h2>
            <p className="text-body leading-relaxed max-w-2xl">From kitchens and wardrobes to vanities, pantries, and wine storage — Berco creates cabinetry systems shaped around the way each room is used.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-card-mobile sm:gap-card-tablet md:gap-card-desktop">
            {categories.map((cat, i) => (
              <Link key={cat.href} href={cat.href} asChild>
                <a className="group cursor-pointer reveal block" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="aspect-[4/5] bg-stone1 overflow-hidden image-crop-watermark mb-4">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif mb-3 text-ink">{cat.title}</h3>
                  <p className="text-body text-sm sm:text-base leading-relaxed mb-4">{cat.description}</p>
                  <span className="inline-block text-ink font-semibold text-xs uppercase tracking-widest2 hover:text-champagne transition-colors">Explore →</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY BERCO */}
      <section className="bg-paper py-section-xl sm:py-section-lg md:py-section reveal">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
            <div className="md:col-span-5">
              <span className="eyebrow">Why BERCO</span>
              <h2 className="mt-4 leading-tight">
                Why choose Berco
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-body leading-relaxed text-sm sm:text-base">
                Philippine homes ask more of cabinetry than most. Humidity, salt air, narrow condo loadings, and the specific way a Filipino household actually cooks, hosts, and stores. BERCO is built around those realities — not adapted to them after the fact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-card-mobile sm:gap-card-tablet md:gap-card-desktop">
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
            ].map((point, i) => (
              <div key={point.num} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">{point.num}</p>
                <h4 className="text-lg sm:text-xl mb-3">{point.title}</h4>
                <p className="text-body text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-14">
            <Link href="/process" asChild>
              <a className="inline-block text-ink font-semibold text-sm uppercase tracking-widest2 hover:text-champagne transition-colors">
                The materials and how we build →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DESIGN STUDIES */}
      <section className="bg-ivory py-section-xl sm:py-section-lg md:py-section reveal">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="md:col-span-5">
              <span className="eyebrow">Design Studies by BERCO</span>
              <h2 className="mt-4 leading-tight">
                Cabinetry<br />
                <em className="italic">concepts &amp; directions.</em>
              </h2>
            </div>
            <div className="md:col-span-7 flex md:items-end">
              <p className="text-body leading-relaxed text-sm sm:text-base">
                A small collection of in-house studies — material directions, sample layouts, and concept rooms drawn by the BERCO studio. These are starting points for conversation, not finished homes. Use them to find the language you want for yours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-card-mobile sm:gap-card-tablet md:gap-card-desktop">
            {designStudies.map((study, i) => (
              <Link key={study.title} href={study.href} asChild>
                <a className="group cursor-pointer reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="aspect-[4/5] bg-stone1 overflow-hidden image-crop-watermark mb-4 sm:mb-5">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-2">
                    Study No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg sm:text-xl mb-2 leading-tight">{study.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{study.description}</p>
                </a>
              </Link>
            ))}
          </div>

          <p className="mt-10 md:mt-12 text-[12px] uppercase tracking-widest2 text-mute max-w-2xl">
            Studies prepared by the BERCO design studio. Final projects are drawn from the ground up around each client's home, plan, and brief.
          </p>
        </div>
      </section>

      {/* 6. MATERIALS & CRAFTSMANSHIP (Process Preview) */}
      <section className="bg-paper py-section-xl sm:py-section-lg md:py-section reveal">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">How BERCO Works</span>
            <h2 className="mt-4 leading-tight">
              Four conversations between you and the work.
            </h2>
          </div>

          <p className="text-body text-sm sm:text-base leading-relaxed max-w-editorial mb-8 sm:mb-12">
            Every BERCO interior begins with listening. From the first sketch to the final hinge, the process is unhurried — and the same designer follows your home through.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-card-mobile sm:gap-card-tablet md:gap-card-desktop mb-8 sm:mb-12">
            {[
              { num: "i.", title: "Consult", desc: "A studio visit, or a house call. We discuss how you live before we discuss what you'll build." },
              { num: "ii.", title: "Design", desc: "Hand drawings, then 3D — refined over two to three rounds, with materials laid out on the table." },
              { num: "iii.", title: "Build", desc: "Fabricated in our Laguna atelier with European hardware and Philippine hardwoods, where appropriate." },
              { num: "iv.", title: "Install", desc: "A small, dedicated team. Dust-controlled installation. A ten-year structural warranty signed at handover." },
            ].map((step, i) => (
              <div key={step.num} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="text-xs uppercase tracking-widest2 text-mute mb-2">{step.num}</p>
                <h4 className="text-base sm:text-lg mb-3">{step.title}</h4>
                <p className="text-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/process" asChild>
            <a className="inline-block text-ink font-semibold text-sm uppercase tracking-widest2 hover:text-champagne transition-colors">
              Full Process Timeline →
            </a>
          </Link>
        </div>
      </section>

      {/* 7. ARCHITECTS TEASER (optional, can be minimal or skip) */}
      {/* Skipping for now — can add if needed */}

      {/* 8. CONSULTATION CTA */}
      <section className="bg-ivory py-section-xl sm:py-section-lg md:py-section reveal">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="mb-6 sm:mb-8">The Heart of Your Home.</h2>
          <p className="text-body text-sm sm:text-base leading-relaxed mb-8">
            Begin your BERCO design journey with a quiet conversation about your space, the way you live, and the cabinetry that would make it feel resolved.
          </p>
          <Link href="/contact" asChild>
            <a className="inline-block bg-ink text-light px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors">
              Book a Design Consultation →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
