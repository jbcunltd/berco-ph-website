import { useState } from "react";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import PageHero from "../components/layout/PageHero";

const fieldBase =
  "w-full px-4 py-3 sm:py-4 border border-line bg-bg rounded-md text-base text-text " +
  "placeholder:text-text-muted focus:outline-none focus:border-text transition-colors min-h-[44px]";

const labelBase =
  "block text-xs tracking-widest2 uppercase text-text-muted mb-2 sm:mb-3 font-semibold";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectLocation: "",
    spaceType: "Kitchen",
    timeline: "Within 3 months",
    upload: null as File | null,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, upload: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Start Your Design Consultation"
        title="Begin your Berco"
        titleItalic="design journey."
        intro="Tell us about your space. Our team will guide you through the right cabinetry solution for your home, condo, or project."
      />

      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div>
                  <label className={labelBase}>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Your full name" required className={fieldBase} />
                </div>
                <div>
                  <label className={labelBase}>Mobile</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange}
                    placeholder="+63 917 ___ ____" required className={fieldBase} />
                </div>
                <div>
                  <label className={labelBase}>Project Location</label>
                  <input type="text" name="projectLocation" value={formData.projectLocation} onChange={handleChange}
                    placeholder="e.g., Forbes Park, Makati" required className={fieldBase} />
                </div>
                <div>
                  <label className={labelBase}>Space Type</label>
                  <select name="spaceType" value={formData.spaceType} onChange={handleChange} className={fieldBase}>
                    {["Kitchen","Wardrobe","Walk-in Closet","Bathroom Vanity","TV & Living"," ","Whole Home","Other"].map(o=>
                      <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelBase}>Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} className={fieldBase}>
                    {["Within 3 months","3 — 6 months","6 — 12 months","Just exploring"].map(o=>
                      <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelBase}>Upload Reference Images or Floor Plans (Optional)</label>
                  <input type="file" name="upload" onChange={handleFileChange}
                    accept="image/*,.pdf" className={fieldBase} />
                  {formData.upload && (
                    <p className="mt-2 text-xs text-text-body">✓ {formData.upload.name}</p>
                  )}
                </div>
                <div>
                  <label className={labelBase}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    placeholder="Tell us about the space, the way you use it, and what you'd like the cabinetry to do."
                    rows={6} className={`${fieldBase} resize-none`} />
                </div>

                <button type="submit" className="ds-btn ds-btn-primary w-full">
                  Send Project Inquiry →
                </button>

                {submitted && (
                  <div className="bg-bg-alt border border-line text-text px-4 py-4 rounded-md">
                    <p className="font-semibold mb-1">✓ Thank you for reaching out.</p>
                    <p className="text-text-body">
                      Our team will review your inquiry and get in touch to guide you through the next step.
                    </p>
                  </div>
                )}
              </form>
            </div>

            <aside className="space-y-10">
              <div>
                <h3 className="mb-3">Studio</h3>
                <p className="text-text-body leading-relaxed">
                  322 Sto Rosario<br />Mandaluyong City, 1550<br />Kalakhang Maynila
                </p>
                <p className="mt-5">
                  <a href="tel:+639178000730" className="text-text font-semibold hover:text-accent transition-colors">0917 800 0730</a>
                  <br />
                  <a href="mailto:sales@bercohome.com" className="text-text font-semibold hover:text-accent transition-colors">sales@bercohome.com</a>
                </p>
              </div>
              <div>
                <h3 className="mb-3">Service Areas</h3>
                <p className="text-text-body">Nationwide</p>
              </div>
              <div>
                <h3 className="mb-3">Hours</h3>
                <p className="text-text-body leading-relaxed">
                  Monday — Friday<br />9:00 AM — 6:00 PM
                  <br /><br />Saturday<br />10:00 AM — 4:00 PM
                </p>
              </div>
              <div className="space-y-3">
                <a href="https://wa.me/639178000730" className="ds-btn ds-btn-accent w-full">WhatsApp</a>
                <a href="https://m.me/bercophilippines" className="ds-btn ds-btn-secondary w-full">Messenger</a>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}
