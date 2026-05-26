import { useState } from "react";
import { Link } from "wouter";

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
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-stone1 py-section-xl sm:py-section-lg md:py-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <span className="eyebrow">Start Your Design Consultation</span>
          <h1 className="mt-4 leading-tight">
            Begin your Berco<br />
            <em className="italic">design journey.</em>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-body text-sm sm:text-base leading-relaxed max-w-2xl">
            Tell us about your space. Our team will guide you through the right cabinetry solution for your home, condo, or project.
          </p>
        </div>
      </section>

      {/* Content — Mobile: stacked, Desktop: 2-column */}
      <section className="bg-paper py-section-xl sm:py-section-lg md:py-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+63 917 ___ ____"
                    required
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  />
                </div>

                {/* Project Location */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                    Project Location
                  </label>
                  <input
                    type="text"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    placeholder="e.g., Forbes Park, Makati"
                    required
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  />
                </div>

                {/* Space Type */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                    Space Type
                  </label>
                  <select
                    name="spaceType"
                    value={formData.spaceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  >
                    <option>Kitchen</option>
                    <option>Wardrobe</option>
                    <option>Walk-in Closet</option>
                    <option>Bathroom Vanity</option>
                    <option>TV & Living</option>
                    <option>Laundry</option>
                    <option>Whole Home</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  >
                    <option>Within 3 months</option>
                    <option>3 — 6 months</option>
                    <option>6 — 12 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                    Upload Reference Images or Floor Plans (Optional)
                  </label>
                  <input
                    type="file"
                    name="upload"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  />
                  {formData.upload && (
                    <p className="mt-2 text-xs text-body">
                      ✓ {formData.upload.name}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-body mb-2 sm:mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the space, the way you use it, and what you'd like the cabinetry to do."
                    rows={6}
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors resize-none text-base"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-ink text-light py-4 sm:py-5 text-xs sm:text-sm tracking-widest2 uppercase font-semibold rounded hover:bg-ink/90 transition-colors min-h-[48px] flex items-center justify-center"
                >
                  Send Project Inquiry →
                </button>

                {submitted && (
                  <div className="bg-ivory border border-line text-ink px-4 py-3 sm:py-4 rounded text-sm sm:text-base">
                    <p className="font-semibold mb-1">✓ Thank you for reaching out.</p>
                    <p className="text-body">
                      Our team will review your inquiry and get in touch to guide you through the next step.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 sm:space-y-12 md:space-y-12">
              {/* Studio */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Studio</h3>
                <p className="text-sm sm:text-base leading-relaxed text-body">
                  14 Jupiter Street<br />
                  Bel-Air, Makati 1209<br />
                  Philippines
                </p>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
                  <a href="tel:+639175550114" className="text-ink hover:text-champagne transition-colors font-semibold">
                    +63 917 555 0114
                  </a>
                  <br />
                  <a href="mailto:hello@bercoph.com" className="text-ink hover:text-champagne transition-colors font-semibold">
                    hello@bercoph.com
                  </a>
                </p>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Service Areas</h3>
                <ul className="space-y-2 text-sm sm:text-base text-body">
                  <li>Metro Manila</li>
                  <li>Tagaytay · Batangas</li>
                  <li>Cebu · Bohol</li>
                  <li>Davao</li>
                  <li>Selected International</li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Hours</h3>
                <p className="text-sm sm:text-base text-body">
                  Monday — Friday<br />
                  9:00 AM — 6:00 PM<br />
                  <br />
                  Saturday<br />
                  10:00 AM — 4:00 PM
                </p>
              </div>

              {/* Direct Links */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/639175550114"
                  className="block w-full bg-forest text-light px-4 py-3 sm:py-4 text-xs sm:text-sm tracking-widest2 uppercase font-semibold rounded hover:bg-forest/90 transition-colors text-center min-h-[44px] flex items-center justify-center"
                >
                  WhatsApp
                </a>
                <a
                  href="https://m.me/bercoph"
                  className="block w-full bg-bronze text-light px-4 py-3 sm:py-4 text-xs sm:text-sm tracking-widest2 uppercase font-semibold rounded hover:bg-bronze/90 transition-colors text-center min-h-[44px] flex items-center justify-center"
                >
                  Messenger
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
