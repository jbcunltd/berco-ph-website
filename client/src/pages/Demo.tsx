import { Link } from "wouter";
import { useEffect, useMemo, useRef, type ElementType } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import products from "../data/products.json";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionHeading from "../components/layout/SectionHeading";
import CTAButton from "../components/layout/CTAButton";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  title: string;
  category: string;
  gallery?: string[];
};

type CardItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  meta?: string;
};

const productList = products as Product[];

const findProduct = (cat: string, keyword?: string) => {
  if (keyword) {
    const k = keyword.toLowerCase();
    const match = productList.find(
      p =>
        p.category === cat &&
        p.title.toLowerCase().includes(k) &&
        p.gallery?.[0]
    );
    if (match) return match;
  }

  return productList.find(p => p.category === cat && p.gallery?.[0]);
};

const getImageForCategory = (cat: string) =>
  findProduct(cat)?.gallery?.[0] || "";

const CATEGORIES = [
  {
    title: "Kitchens",
    description:
      "Islands, sculleries, and galley kitchens — from compact condos to expansive family homes.",
    category: "kitchens",
    href: "/kitchens",
  },
  {
    title: "Bedrooms",
    description:
      "Walk-in closets and bedroom wardrobes — storage that feels like part of the architecture.",
    category: "bedrooms",
    href: "/bedrooms",
  },
  {
    title: "Wardrobes",
    description:
      "Built-in closets and dressing rooms — tailored to the way you live and dress.",
    category: "wardrobes",
    href: "/wardrobes",
  },
  {
    title: "Bathrooms",
    description:
      "Spa-inspired vanities and storage — moisture-resistant boards, beautifully finished.",
    category: "bathrooms",
    href: "/bathrooms",
  },
  {
    title: "Vanities",
    description:
      "Floating and freestanding — stone, lacquer, and natural wood finishes.",
    category: "vanities",
    href: "/vanities",
  },
  {
    title: "TV & Living",
    description:
      "Media walls, bar cabinets, and accent storage — entertainment spaces composed with restraint.",
    category: "tv-units",
    href: "/tv-units",
  },
  {
    title: "Laundry",
    description:
      "Utility spaces, beautifully organized — quiet storage that works as hard as you do.",
    category: "laundry",
    href: "/laundry",
  },
];

const WHY_BERCO = [
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
];

const PROCESS_STEPS = [
  {
    num: "i.",
    title: "Consult",
    desc: "A studio visit, or a house call. We discuss how you live before we discuss what you'll build.",
  },
  {
    num: "ii.",
    title: "Design",
    desc: "Hand drawings, then 3D — refined over two to three rounds, with materials laid out on the table.",
  },
  {
    num: "iii.",
    title: "Build",
    desc: "Fabricated by our production team with European hardware and Philippine hardwoods, where appropriate.",
  },
  {
    num: "iv.",
    title: "Install",
    desc: "A small, dedicated team. Dust-controlled installation. Project-specific warranty terms provided at handover.",
  },
];

function AnimatedWords({
  text,
  as: Tag = "span",
  className = "",
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <Tag className={`demo-text-reveal ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="demo-word inline-block overflow-hidden align-bottom pb-[0.08em]">
            <span
              className="demo-word-inner inline-block will-change-transform"
              style={{ opacity: 0 }}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

function MotionCard({ item, index }: { item: CardItem; index?: number }) {
  return (
    <Link href={item.href} asChild>
      <a
        className="demo-card group block outline-none"
        data-demo-delay={index ? Math.min(index * 0.06, 0.24) : 0}
      >
        <div className="ds-card-image aspect-[4/5] mb-5 shadow-sm transition-shadow duration-700 group-hover:shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="will-change-transform transition-transform duration-[900ms] ease-[var(--ease-out)] group-hover:scale-[1.045]"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-footer-bg/70 via-footer-bg/15 to-transparent opacity-0 transition-opacity duration-700 ease-[var(--ease-out)] group-hover:opacity-100">
            <div className="translate-y-3 p-5 text-text-on-dark opacity-0 transition-all duration-700 ease-[var(--ease-out)] group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-soft">
                {item.meta || "Explore"}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-text-on-dark/90">
                View the collection →
              </p>
            </div>
          </div>
        </div>
        {item.meta ? (
          <p className="text-xs uppercase tracking-widest2 text-accent mb-2 font-semibold">
            {item.meta}
          </p>
        ) : null}
        <h3 className="mb-2 transition-colors duration-500 group-hover:text-accent-dark">
          {item.title}
        </h3>
        <p className="text-text-body leading-relaxed mb-3">
          {item.description}
        </p>
        <span className="ds-link">Explore →</span>
      </a>
    </Link>
  );
}

export default function Demo() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const kitchenImage = getImageForCategory("kitchens");

  const categoriesWithImages = useMemo<CardItem[]>(
    () =>
      CATEGORIES.map(c => ({
        title: c.title,
        description: c.description,
        image: getImageForCategory(c.category),
        href: c.href,
      })),
    []
  );

  const designStudies = useMemo<CardItem[]>(
    () =>
      [
        {
          title: "Modern Walnut Kitchen Concept",
          description:
            "A study in warmth and quiet contrast — walnut grain, honed stone, and an island built for slow mornings.",
          image:
            findProduct("kitchens", "Curved")?.gallery?.[0] ||
            getImageForCategory("kitchens"),
          href: "/kitchens",
        },
        {
          title: "Minimalist Walk-in Wardrobe Study",
          description:
            "An exploration of full-height cabinetry, recessed handles, and the discipline of open shelving.",
          image:
            findProduct("wardrobes", "Walk in Closet")?.gallery?.[0] ||
            getImageForCategory("wardrobes"),
          href: "/wardrobes",
        },
        {
          title: "Quiet Bedroom Suite Concept",
          description:
            "Storage drawn at the scale of the room — proportion, texture, and a restful palette of muted tones.",
          image:
            findProduct("bedrooms", "Walk in Closet")?.gallery?.[0] ||
            getImageForCategory("bedrooms"),
          href: "/bedrooms",
        },
        {
          title: "Floating Vanity Direction",
          description:
            "Light catches the underplane — a directional study in stone, lacquer, and the geometry of shadow.",
          image:
            findProduct("vanities", "Floating")?.gallery?.[0] ||
            getImageForCategory("vanities"),
          href: "/vanities",
        },
        {
          title: "Spa-Inspired Bathroom Concept",
          description:
            "Moisture-resistant cabinetry composed around natural light — a brief for calm, considered everyday rituals.",
          image:
            findProduct("bathrooms", "Beige")?.gallery?.[0] ||
            getImageForCategory("bathrooms"),
          href: "/bathrooms",
        },
        {
          title: "Bar & Media Wall Study",
          description:
            "A living-room composition that holds glassware, books, and the television — without raising its voice.",
          image:
            findProduct("tv-units", "bar")?.gallery?.[0] ||
            getImageForCategory("tv-units"),
          href: "/tv-units",
        },
      ].map((study, i) => ({
        ...study,
        meta: `Study No. ${String(i + 1).padStart(2, "0")}`,
      })),
    []
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".demo-reveal, .demo-card, .demo-word-inner", {
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
          rotate: 0,
          clearProps: "transform,opacity,visibility",
        });
        return;
      }

      gsap.utils.toArray<HTMLElement>(".demo-reveal").forEach(element => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".demo-card").forEach(card => {
        const delay = Number(card.dataset.demoDelay || 0);
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".demo-text-reveal").forEach(element => {
        const words = element.querySelectorAll(".demo-word-inner");
        gsap.fromTo(
          words,
          { autoAlpha: 0, yPercent: 110, rotate: 1 },
          {
            autoAlpha: 1,
            yPercent: 0,
            rotate: 0,
            duration: 1,
            stagger: 0.032,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".demo-parallax").forEach(frame => {
        const image = frame.querySelector("img");
        if (!image) return;

        gsap.fromTo(
          image,
          { yPercent: -7, scale: 1.12 },
          {
            yPercent: 7,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="w-full overflow-hidden">
      {/* HERO */}
      <Section variant="default" size="sm" className="!pt-0 !pb-0">
        <div className="md:hidden pt-10 pb-8 text-center">
          <Container>
            <span className="demo-reveal ds-label">
              Motion Demo · Editorial Cabinetry
            </span>
            <AnimatedWords
              as="h1"
              className="mt-4 mb-4"
              text="Custom Cabinetry for Philippine Homes."
            />
            <p className="demo-reveal text-text-body leading-relaxed mb-7 max-w-md mx-auto">
              Quiet, considered storage — now explored through subtle scroll,
              parallax, and reveal motion.
            </p>
            <div className="demo-reveal flex flex-col gap-3 mb-6">
              <Link href="/contact" asChild>
                <CTAButton variant="primary" className="w-full">
                  Book a Design Consultation →
                </CTAButton>
              </Link>
              <a
                href="#demo-collections"
                className="ds-btn ds-btn-secondary w-full"
              >
                See Motion System
              </a>
            </div>
            <div className="demo-parallax ds-card-image h-72">
              <img
                src={kitchenImage}
                alt="BERCO cabinetry with subtle parallax motion"
              />
            </div>
          </Container>
        </div>

        <div className="hidden md:grid md:grid-cols-[0.9fr_1.1fr] md:h-[720px] md:items-stretch">
          <div className="demo-parallax ds-card-image rounded-none">
            <img
              src={kitchenImage}
              alt="BERCO cabinetry with subtle parallax motion"
            />
          </div>
          <div className="py-20 flex flex-col justify-center bg-bg">
            <Container className="h-full flex flex-col justify-center">
              <span className="demo-reveal ds-label mb-6">
                Motion Demo · Editorial Cabinetry
              </span>
              <AnimatedWords
                as="h1"
                className="mb-6 max-w-[620px]"
                text="Custom Cabinetry for Philippine Homes."
              />
              <p className="demo-reveal text-text-body leading-relaxed mb-8 max-w-[560px]">
                A premium motion-design study for BERCO: restrained parallax,
                soft section entrances, staggered typography, and tactile
                product cards without changing the live homepage.
              </p>
              <div className="demo-reveal flex gap-4">
                <Link href="/contact" asChild>
                  <CTAButton variant="primary">
                    Book a Design Consultation →
                  </CTAButton>
                </Link>
                <a href="#demo-collections" className="ds-btn ds-btn-secondary">
                  See Motion System
                </a>
              </div>
            </Container>
          </div>
        </div>
      </Section>

      {/* BRAND INTRO */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="demo-reveal md:col-span-4">
              <SectionHeading
                label="Studio"
                title="We design cabinetry the way architects draw."
              />
            </div>
            <div className="demo-reveal md:col-span-8 space-y-4">
              <p className="text-text-body leading-relaxed">
                With proportion, restraint, and practical storage planning —
                every cabinet is shaped around how the space is actually used.
                Each interior begins with listening, before any line is drawn.
              </p>
              <Link href="/process" asChild>
                <a className="ds-link">Our Approach →</a>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* COLLECTIONS */}
      <Section id="demo-collections" variant="alt" size="md">
        <Container>
          <div className="demo-reveal mb-12 md:mb-16">
            <SectionHeading
              label="Collections"
              title="Explore cabinetry by space"
              intro="From kitchens and wardrobes to vanities, pantries, and wine storage — Berco creates cabinetry systems shaped around the way each room is used."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {categoriesWithImages.map((cat, index) => (
              <MotionCard key={cat.href} item={cat} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY BERCO */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 mb-12 md:mb-16">
            <div className="demo-reveal md:col-span-5">
              <SectionHeading label="Why BERCO" title="Why choose Berco" />
            </div>
            <div className="demo-reveal md:col-span-7">
              <p className="text-text-body leading-relaxed">
                Philippine homes ask more of cabinetry than most. Humidity, salt
                air, narrow condo loadings, and the specific way a Filipino
                household actually cooks, hosts, and stores. BERCO is built
                around those realities — not adapted to them after the fact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {WHY_BERCO.map((point, index) => (
              <div
                className="demo-reveal"
                key={point.num}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <p className="text-xs uppercase tracking-widest2 text-accent mb-3 font-semibold">
                  {point.num}
                </p>
                <h4 className="mb-3">{point.title}</h4>
                <p className="text-text-body leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <div className="demo-reveal mt-12">
            <Link href="/process" asChild>
              <a className="ds-link">The materials and how we build →</a>
            </Link>
          </div>
        </Container>
      </Section>

      {/* DESIGN STUDIES */}
      <Section variant="alt" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 mb-10 md:mb-14">
            <div className="demo-reveal md:col-span-5">
              <SectionHeading
                label="Design Studies by BERCO"
                title="Cabinetry"
                titleItalic="concepts & directions."
              />
            </div>
            <div className="demo-reveal md:col-span-7 flex md:items-end">
              <p className="text-text-body leading-relaxed">
                A small collection of in-house studies — material directions,
                sample layouts, and concept rooms drawn by the BERCO studio.
                These are starting points for conversation, not finished homes.
                Use them to find the language you want for yours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {designStudies.map((study, index) => (
              <MotionCard key={study.title} item={study} index={index} />
            ))}
          </div>

          <p className="demo-reveal mt-12 text-xs uppercase tracking-widest2 text-text-muted max-w-2xl">
            Studies prepared by the BERCO design studio. Final projects are
            drawn from the ground up around each client's home, plan, and brief.
          </p>
        </Container>
      </Section>

      {/* PROCESS PREVIEW */}
      <Section variant="default" size="md">
        <Container>
          <div className="demo-reveal">
            <SectionHeading
              label="How BERCO Works"
              title="Four conversations between you and the work."
              className="mb-8"
            />
            <p className="text-text-body leading-relaxed max-w-2xl mb-12">
              Every BERCO interior begins with listening. From the first sketch
              to the final hinge, the process is unhurried — and the same
              designer follows your home through.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ds-grid-gap mb-10">
            {PROCESS_STEPS.map((step, index) => (
              <div
                className="demo-reveal"
                key={step.num}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <p className="text-xs uppercase tracking-widest2 text-text-muted mb-2 font-semibold">
                  {step.num}
                </p>
                <h4 className="mb-3">{step.title}</h4>
                <p className="text-text-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="demo-reveal">
            <Link href="/process" asChild>
              <a className="ds-link">Full Process Timeline →</a>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="alt" size="md">
        <Container width="narrow" className="text-center">
          <AnimatedWords
            as="h2"
            className="mb-6"
            text="The Heart of Your Home."
          />
          <p className="demo-reveal text-text-body leading-relaxed mb-8 max-w-xl mx-auto">
            Begin your BERCO design journey with a quiet conversation about your
            space, the way you live, and the cabinetry that would make it feel
            resolved.
          </p>
          <div className="demo-reveal">
            <Link href="/contact" asChild>
              <CTAButton variant="primary">
                Book a Design Consultation →
              </CTAButton>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
