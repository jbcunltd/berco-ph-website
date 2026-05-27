import { useState } from "react";
import { Link } from "wouter";
import products from "../data/products.json";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionHeading from "../components/layout/SectionHeading";
import CTAButton from "../components/layout/CTAButton";

const fieldBase =
  "w-full px-4 py-3 sm:py-4 border border-line bg-bg rounded-md text-base text-text " +
  "placeholder:text-text-muted focus:outline-none focus:border-text transition-colors min-h-[44px]";
const labelBase =
  "block text-xs tracking-widest2 uppercase text-text-muted mb-2 sm:mb-3 font-semibold";

const SERVICES = [
  { num: "i.",  title: "Custom sizing & non-standard geometry", desc: "We work from your drawings, not a fixed catalogue. Bulkheads, angled walls, columns, and full-height runs are drawn to your plan — to the millimetre." },
  { num: "ii.", title: "Material coordination",                desc: "Finishes specified against your wider scheme — stone, flooring, paint, hardware. Cuttings and samples delivered ahead of approvals so the palette reads as one." },
  { num: "iii.",title: "Project-based quotation",              desc: "Itemised quotations against drawings, with clear allowances for hardware, surfaces, and site conditions. Suitable for FF&E packages and BOQ alignment." },
  { num: "iv.", title: "Site coordination",                    desc: "A single point of contact through measurement, sequencing, and installation. We coordinate with your general contractor, electrical, and stone suppliers." },
  { num: "v.",  title: "Developer & contractor support",       desc: "Showroom and model-unit cabinetry, repeatable specifications for multi-unit projects, and phased delivery aligned with site programme." },
  { num: "vi.", title: "Documentation that travels",           desc: "Shop drawings, finish schedules, and installation details prepared to a standard your project team can issue, review, and archive." },
];

const ENGAGEMENT = [
  { n: "i.",  t: "Brief",   d: "A first conversation — scope, drawings, palette, programme." },
  { n: "ii.", t: "Quote",   d: "Itemised project-based quotation against your set, with allowances clearly marked." },
  { n: "iii.",t: "Detail",  d: "Shop drawings, finish schedules, and samples — reviewed alongside your team." },
  { n: "iv.", t: "Deliver", d: "Fabrication in our Laguna atelier, dust-controlled installation, and a single point of contact through handover." },
];

export default function ArchitectsDesigners() {
  const [formData, setFormData] = useState({
    name: "", firm: "", role: "Architect", email: "", phone: "",
    projectType: "Residential", location: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000);
  };

  const heroImage =
    products.find((p: any) => p.category === "kitchens")?.gallery?.[0] || "";
  const editorialA =
    products.find((p: any) => p.category === "wardrobes")?.gallery?.[0] || "";
  const editorialB =
    products.find((p: any) => p.category === "vanities")?.gallery?.[0] || "";

  return (
    <div className="w-full">
      {/* Hero */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <span className="ds-label">For Architects &amp; Designers</span>
              <h1 className="mt-3 sm:mt-4">
                A cabinetry partner<br />
                <em className="italic">for the design profession.</em>
              </h1>
              <p className="mt-6 text-text-body leading-relaxed max-w-xl">
                BERCO works alongside architects, interior designers, developers, and contractors as a discreet cabinetry and interior fit-out partner — drawing to your specifications, coordinating with your trades, and quoting against your schedule.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <CTAButton href="#collaborate" variant="primary">Start a Collaboration →</CTAButton>
                <Link href="/process" asChild>
                  <CTAButton variant="secondary">How We Work</CTAButton>
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="ds-card-image aspect-[4/5]">
                <img src={heroImage} alt="BERCO cabinetry — architectural composition" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Positioning */}
      <Section variant="default" size="sm">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <SectionHeading
                label="001 — Our Role"
                title="Behind your"
                titleItalic="drawings."
              />
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-text-body leading-relaxed">
                We are most useful to design professionals who care how a project is detailed — and who would rather not chase their cabinetry supplier through every revision. BERCO holds the brief in confidence, draws to your plan, and presents work in the language your studio already uses.
              </p>
              <p className="text-text-body leading-relaxed">
                Whether the project is a single residence, a family home in Tagaytay, a turn-over condominium, or a developer's model unit — the studio scales the level of involvement to suit the engagement. Quietly, on schedule, and to specification.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section variant="alt" size="md">
        <Container>
          <SectionHeading
            label="002 — What We Provide"
            title="Drawn, specified, delivered."
            className="mb-10 md:mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {SERVICES.map((s) => (
              <div key={s.num}>
                <p className="text-xs uppercase tracking-widest2 text-accent mb-3 font-semibold">{s.num}</p>
                <h3 className="text-lg sm:text-xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Editorial Split */}
      <Section variant="default" size="md">
        <Container>
          <SectionHeading
            label="003 — Project Types"
            title="Studios we work with."
            className="mb-10 md:mb-14"
          />
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              {editorialA && (
                <div className="ds-card-image aspect-[4/5] mb-6">
                  <img src={editorialA} alt="Architect-led residential cabinetry" />
                </div>
              )}
              <h3 className="mb-3">Architects &amp; Interior Designers</h3>
              <p className="text-text-body leading-relaxed">
                Bespoke residential and select hospitality work. We hold to your finish schedule, prepare shop drawings against your detail set, and present samples in a format you can put in front of a client without rework.
              </p>
            </div>
            <div>
              {editorialB && (
                <div className="ds-card-image aspect-[4/5] mb-6">
                  <img src={editorialB} alt="Developer and contractor cabinetry" />
                </div>
              )}
              <h3 className="mb-3">Developers &amp; Contractors</h3>
              <p className="text-text-body leading-relaxed">
                Model-unit cabinetry, repeatable specifications for multi-unit developments, and phased delivery against site programme. Budget allowances and BOQ-friendly itemisation prepared on request.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Engagement */}
      <Section variant="dark" size="md">
        <Container>
          <div className="mb-10 md:mb-14">
            <span className="ds-label text-text-on-dark/60">004 — How We Engage</span>
            <h2 className="mt-3 text-text-on-dark">
              A discreet collaboration<br />
              <em className="italic">on your terms.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ds-grid-gap">
            {ENGAGEMENT.map((s) => (
              <div key={s.n}>
                <p className="text-xs uppercase tracking-widest2 text-accent mb-3 font-semibold">{s.n}</p>
                <h4 className="text-text-on-dark mb-2">{s.t}</h4>
                <p className="text-text-on-dark/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Collaboration Form */}
      <Section variant="default" size="md" id="collaborate">
        <Container width="narrow">
          <SectionHeading
            label="005 — Collaboration Inquiry"
            title="Start a conversation"
            titleItalic="about your project."
            intro="Share a few details about the project and your studio. We'll respond within two working days — discreetly, and with the right person from the BERCO design team."
            className="mb-10 md:mb-14"
          />

          <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelBase}>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={onChange} required placeholder="Maria Santos" className={fieldBase} />
              </div>
              <div>
                <label className={labelBase}>Studio / Firm</label>
                <input type="text" name="firm" value={formData.firm} onChange={onChange} placeholder="Santos & Partners" className={fieldBase} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelBase}>Role</label>
                <select name="role" value={formData.role} onChange={onChange} className={fieldBase}>
                  {["Architect","Interior Designer","Developer","Contractor / GC","Project Manager","Other"].map(o=>
                    <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className={labelBase}>Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={onChange} className={fieldBase}>
                  {["Residential — Single Family","Residential — Condominium","Multi-Unit Development","Model Unit / Showroom","Hospitality","Other"].map(o=>
                    <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelBase}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={onChange} required placeholder="studio@firm.com" className={fieldBase} />
              </div>
              <div>
                <label className={labelBase}>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={onChange} placeholder="+63 917 ___ ____" className={fieldBase} />
              </div>
            </div>

            <div>
              <label className={labelBase}>Project Location</label>
              <input type="text" name="location" value={formData.location} onChange={onChange} placeholder="Forbes Park, Makati / Tagaytay / Cebu" className={fieldBase} />
            </div>

            <div>
              <label className={labelBase}>Project Brief</label>
              <textarea name="message" value={formData.message} onChange={onChange} rows={6}
                placeholder="Scope, drawings status, programme, and the rooms you'd like BERCO to consider."
                className={`${fieldBase} resize-none`} />
            </div>

            <button type="submit" className="ds-btn ds-btn-primary">
              Send Collaboration Inquiry →
            </button>

            {submitted && (
              <div className="bg-bg-alt border border-line text-text px-4 py-4 rounded-md">
                ✓ Thank you. A member of the BERCO design team will be in touch within two working days.
              </div>
            )}
          </form>

          <p className="mt-10 text-xs uppercase tracking-widest2 text-text-body">
            For confidential discussions, please write to{" "}
            <a href="mailto:trade@bercoph.com" className="text-text font-semibold hover:text-accent transition-colors">
              trade@bercoph.com
            </a>
          </p>
        </Container>
      </Section>
    </div>
  );
}
