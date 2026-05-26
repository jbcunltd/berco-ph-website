import { useState } from "react";
import { Link } from "wouter";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import products from "../data/products.json";

export default function ArchitectsDesigners() {
  useScrollAnimations();

  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    role: "Architect",
    email: "",
    phone: "",
    projectType: "Residential",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Pull one premium image for the hero
  const heroImage =
    products.find(
      (p) => p.category === "kitchens" && p.gallery?.[0] && p.title.toLowerCase().includes("curved")
    )?.gallery?.[0] ||
    products.find((p) => p.category === "kitchens")?.gallery?.[0] ||
    "";

  // Two secondary editorial images
  const editorialA =
    products.find(
      (p) => p.category === "wardrobes" && p.title.toLowerCase().includes("walk in closet")
    )?.gallery?.[0] || "";
  const editorialB =
    products.find((p) => p.category === "vanities" && p.title.toLowerCase().includes("floating"))
      ?.gallery?.[0] || "";

  const services = [
    {
      num: "i.",
      title: "Custom sizing & non-standard geometry",
      desc: "We work from your drawings, not a fixed catalogue. Bulkheads, angled walls, columns, and full-height runs are drawn to your plan — to the millimetre.",
    },
    {
      num: "ii.",
      title: "Material coordination",
      desc: "Finishes specified against your wider scheme — stone, flooring, paint, hardware. Cuttings and samples delivered ahead of approvals so the palette reads as one.",
    },
    {
      num: "iii.",
      title: "Project-based quotation",
      desc: "Itemised quotations against drawings, with clear allowances for hardware, surfaces, and site conditions. Suitable for FF&E packages and BOQ alignment.",
    },
    {
      num: "iv.",
      title: "Site coordination",
      desc: "A single point of contact through measurement, sequencing, and installation. We coordinate with your general contractor, electrical, and stone suppliers.",
    },
    {
      num: "v.",
      title: "Developer & contractor support",
      desc: "Showroom and model-unit cabinetry, repeatable specifications for multi-unit projects, and phased delivery aligned with site programme.",
    },
    {
      num: "vi.",
      title: "Documentation that travels",
      desc: "Shop drawings, finish schedules, and installation details prepared to a standard your project team can issue, review, and archive.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-paper overflow-hidden">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 py-section-xl sm:py-section-lg md:py-section">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <span className="eyebrow">For Architects &amp; Designers</span>
              <h1 className="font-display mt-3 sm:mt-4 leading-tight">
                A cabinetry partner<br />
                <em className="italic">for the design profession.</em>
              </h1>
              <p className="mt-4 sm:mt-6 text-body leading-relaxed text-sm sm:text-base max-w-xl">
                BERCO works alongside architects, interior designers, developers, and contractors as a discreet cabinetry and interior fit-out partner — drawing to your specifications, coordinating with your trades, and quoting against your schedule.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#collaborate"
                  className="bg-ink text-light px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors text-center"
                >
                  Start a Collaboration →
                </a>
                <Link href="/process" asChild>
                  <a className="border border-ink text-ink px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest2 uppercase font-semibold hover:bg-ink hover:text-light transition-colors text-center">
                    How We Work
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="aspect-[4/5] bg-stone2 overflow-hidden image-crop-watermark">
                <img
                  src={heroImage}
                  alt="BERCO cabinetry — architectural composition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning paragraph */}
      <section className="bg-paper py-section-xl sm:py-section-lg md:py-section" data-animate="fade-up">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <span className="eyebrow">001 — Our Role</span>
              <h2 className="font-display mt-4 leading-tight">
                Behind your<br />
                <em className="italic">drawings.</em>
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-body leading-relaxed mb-4">
                We are most useful to design professionals who care how a project is detailed — and who would rather not chase their cabinetry supplier through every revision. BERCO holds the brief in confidence, draws to your plan, and presents work in the language your studio already uses.
              </p>
              <p className="text-body leading-relaxed">
                Whether the project is a single residence, a family home in Tagaytay, a turn-over condominium, or a developer's model unit — the studio scales the level of involvement to suit the engagement. Quietly, on schedule, and to specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / capabilities */}
      <section className="bg-warm py-section-xl sm:py-section-lg md:py-section" data-animate="stagger">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">002 — What We Provide</span>
            <h2 className="font-display mt-4 leading-tight">
              Drawn, specified, delivered.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12" data-animate="stagger">
            {services.map((s) => (
              <div key={s.num} data-stagger-item>
                <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">{s.num}</p>
                <h3 className="font-display text-lg sm:text-xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split — Project Types */}
      <section className="bg-paper py-section-xl sm:py-section-lg md:py-section" data-animate="fade-up">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">003 — Project Types</span>
            <h2 className="font-display mt-4 leading-tight">
              Studios we work with.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              {editorialA ? (
                <div className="aspect-[4/5] bg-paper overflow-hidden image-crop-watermark mb-6">
                  <img
                    src={editorialA}
                    alt="Architect-led residential cabinetry"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}
              <h3 className="font-display text-xl sm:text-2xl mb-3">Architects &amp; Interior Designers</h3>
              <p className="text-body leading-relaxed text-sm sm:text-base">
                Bespoke residential and select hospitality work. We hold to your finish schedule, prepare shop drawings against your detail set, and present samples in a format you can put in front of a client without rework.
              </p>
            </div>
            <div>
              {editorialB ? (
                <div className="aspect-[4/5] bg-paper overflow-hidden image-crop-watermark mb-6">
                  <img
                    src={editorialB}
                    alt="Developer and contractor cabinetry"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}
              <h3 className="font-display text-xl sm:text-2xl mb-3">Developers &amp; Contractors</h3>
              <p className="text-body leading-relaxed text-sm sm:text-base">
                Model-unit cabinetry, repeatable specifications for multi-unit developments, and phased delivery against site programme. Budget allowances and BOQ-friendly itemisation prepared on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement / process for trade */}
      <section className="bg-ink text-light py-section-xl sm:py-section-lg md:py-section" data-animate="fade-up">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow text-light/60">004 — How We Engage</span>
            <h2 className="font-display mt-4 leading-tight text-light">
              A discreet collaboration<br />
              <em className="italic">on your terms.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { n: "i.", t: "Brief", d: "A first conversation — scope, drawings, palette, programme." },
              { n: "ii.", t: "Quote", d: "Itemised project-based quotation against your set, with allowances clearly marked." },
              { n: "iii.", t: "Detail", d: "Shop drawings, finish schedules, and samples — reviewed alongside your team." },
              { n: "iv.", t: "Deliver", d: "Fabrication in our Laguna atelier, dust-controlled installation, and a single point of contact through handover." },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-xs uppercase tracking-widest2 text-bronze2 mb-3">{s.n}</p>
                <h4 className="font-display text-lg sm:text-xl mb-2 text-light">{s.t}</h4>
                <p className="text-light/75 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Form */}
      <section id="collaborate" className="bg-paper py-section-xl sm:py-section-lg md:py-section">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 md:mb-12">
            <span className="eyebrow">005 — Collaboration Inquiry</span>
            <h2 className="font-display mt-4 leading-tight">
              Start a conversation<br />
              <em className="italic">about your project.</em>
            </h2>
            <p className="mt-4 sm:mt-6 text-body leading-relaxed text-sm sm:text-base max-w-2xl">
              Share a few details about the project and your studio. We'll respond within two working days — discreetly, and with the right person from the BERCO design team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Maria Santos"
                  className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px] bg-paper"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                  Studio / Firm
                </label>
                <input
                  type="text"
                  name="firm"
                  value={formData.firm}
                  onChange={handleChange}
                  placeholder="Santos &amp; Partners"
                  className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px] bg-paper"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px] bg-paper"
                >
                  <option>Architect</option>
                  <option>Interior Designer</option>
                  <option>Developer</option>
                  <option>Contractor / GC</option>
                  <option>Project Manager</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px] bg-paper"
                >
                  <option>Residential — Single Family</option>
                  <option>Residential — Condominium</option>
                  <option>Multi-Unit Development</option>
                  <option>Model Unit / Showroom</option>
                  <option>Hospitality</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="studio@firm.com"
                  className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px] bg-paper"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+63 917 ___ ____"
                  className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px] bg-paper"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                Project Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Forbes Park, Makati / Tagaytay / Cebu"
                className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px] bg-paper"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                Project Brief
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Scope, drawings status, programme, and the rooms you'd like BERCO to consider."
                className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors resize-none text-base bg-paper"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-ink text-light px-8 py-4 sm:py-5 text-xs sm:text-sm tracking-widest2 uppercase font-semibold rounded hover:bg-ink/90 transition-colors min-h-[48px] inline-flex items-center justify-center"
            >
              Send Collaboration Inquiry →
            </button>

            {submitted && (
              <div className="bg-paper border border-bronze text-ink px-4 py-3 sm:py-4 rounded text-sm sm:text-base">
                ✓ Thank you. A member of the BERCO design team will be in touch within two working days.
              </div>
            )}
          </form>

          <p className="mt-10 text-xs uppercase tracking-widest2 text-body">
            For confidential discussions, please write to{" "}
            <a href="mailto:trade@bercoph.com" className="text-ink hover:text-champagne transition-colors">
              trade@bercoph.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
