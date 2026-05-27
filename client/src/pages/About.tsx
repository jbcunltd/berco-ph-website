import { Link } from "wouter";
import products from "../data/products.json";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/layout/SectionHeading";
import CTAButton from "../components/layout/CTAButton";

export default function About() {
  const heroImage = products.find((p: any) => p.category === "kitchens")?.gallery?.[0] || "";

  const VALUES = [
    { title: "Design-led planning", desc: "Every project begins with listening — understanding how you live, how you work, and how the space will actually be used." },
    { title: "Custom-fit cabinetry", desc: "No catalogue solutions. We draw to your space, your proportions, and your brief — down to the millimetre." },
    { title: "Premium materials & hardware", desc: "Marine-grade substrates, European soft-close mechanisms, and finishes specified for the Philippine climate." },
    { title: "Practical for Philippine homes", desc: "We design around tropical humidity, narrow condo loadings, irregular walls, and the specific way Filipino households cook, host, and store." },
    { title: "Guided process", desc: "One designer follows your project from first sketch to final hinge. You'll always know who to call." },
  ];

  const PROCESS_STEPS = [
    { step: "Listen", desc: "A first conversation — your home, your lifestyle, your vision." },
    { step: "Measure", desc: "Precise site measurements, photographic documentation, and constraint mapping." },
    { step: "Design", desc: "Hand sketches refined to 3D drawings, materials laid out on the table, revisions until it feels right." },
    { step: "Coordinate", desc: "Material selections finalized, hardware specified, finish schedules prepared." },
    { step: "Fabricate", desc: "CNC precision and hand-finishing in our Laguna atelier, according to approved specifications." },
    { step: "Install", desc: "A small, dedicated team. Dust-controlled installation. Project-specific warranty at handover." },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <PageHero
        eyebrow="About Berco"
        title="The Heart of Your Home."
        intro="Bespoke cabinetry for Philippine homes — designed with proportion, restraint, and practical storage planning."
        image={heroImage}
      />

      {/* WHY BERCO */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5">
              <SectionHeading
                label="Our Story"
                title="Why Berco exists"
              />
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-text-body leading-relaxed">
                Berco was created for homeowners, designers, and project owners who want cabinetry that feels considered — not just installed. Every kitchen, wardrobe, vanity, and storage system should be shaped around how the space is actually used.
              </p>
              <p className="text-text-body leading-relaxed">
                We believe that good cabinetry is invisible — it works so well that you stop thinking about it. It holds what you need, opens smoothly, closes quietly, and looks like it belongs in your home. That's what we build.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT MAKES BERCO DIFFERENT */}
      <Section variant="alt" size="md">
        <Container>
          <SectionHeading
            label="Our Approach"
            title="What makes Berco different"
            className="mb-12 md:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {VALUES.map((value, i) => (
              <div key={i}>
                <h4 className="mb-3">{value.title}</h4>
                <p className="text-text-body leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* BACKED BY JBC */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5">
              <SectionHeading
                label="Foundation"
                title="Built on solid ground"
              />
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-text-body leading-relaxed">
                Berco is developed by <strong>JBC UNLTD CORP</strong>, a Philippine registered company established in 2017. This foundation gives us the operational expertise, supply chain relationships, and project management experience to deliver cabinetry on time and to specification.
              </p>
              <p className="text-text-body leading-relaxed">
                We're early-stage, intentionally. We're building Berco thoughtfully — one project at a time — rather than scaling quickly and compromising on quality. Each client teaches us something. Each project refines our process.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW WE WORK */}
      <Section variant="alt" size="md">
        <Container>
          <SectionHeading
            label="Our Process"
            title="How we work"
            intro="From your first conversation to the day you move in, here's how we guide you through the cabinetry journey."
            className="mb-12 md:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {PROCESS_STEPS.map((item, i) => (
              <div key={i}>
                <p className="text-xs uppercase tracking-widest2 text-accent mb-3 font-semibold">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="mb-3">{item.step}</h4>
                <p className="text-text-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="default" size="md">
        <Container width="narrow" className="text-center">
          <h2 className="mb-6">Begin your Berco design journey.</h2>
          <p className="text-text-body leading-relaxed mb-8 max-w-xl mx-auto">
            Ready to explore cabinetry that's shaped around the way you live? Let's start a conversation.
          </p>
          <Link href="/contact" asChild>
            <CTAButton variant="primary">Book a Design Consultation →</CTAButton>
          </Link>
        </Container>
      </Section>
    </div>
  );
}
