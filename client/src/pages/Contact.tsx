import { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    timeline: "Within 3 months",
    message: "",
    roomType: "KITCHEN",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full">
      {/* Hero — Mobile-first */}
      <section className="bg-stone1 py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 leading-tight">
            Let's Design<br />
            <em className="italic">Your Next Project.</em>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-mute text-sm sm:text-base leading-relaxed max-w-2xl">
            Fill out the form below or reach out directly. We'll respond within 24 hours to discuss your vision and next steps.
          </p>
        </div>
      </section>

      {/* Content — Mobile: stacked, Desktop: 2-column */}
      <section className="bg-paper py-mobile sm:py-mobile-lg md:py-mobile-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {/* Form — Mobile-first full width */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Room Type — Mobile: stacked buttons, Desktop: flex wrap */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-mute mb-3 sm:mb-4">
                    What room are we designing?
                  </label>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                    {["KITCHEN", "WARDROBE", "WALK-IN CLOSET", "BATHROOM VANITY", "WHOLE HOME", "NOT SURE YET"].map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, roomType: type }))}
                          className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm tracking-widest2 uppercase rounded transition-colors min-h-[44px] ${
                            formData.roomType === type
                              ? "bg-ink text-paper"
                              : "border border-line text-mute hover:border-ink"
                          }`}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Name — Large input for thumb typing */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-mute mb-2 sm:mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Maria Santos"
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  />
                </div>

                {/* Phone — Large input, tel keyboard on mobile */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-mute mb-2 sm:mb-3">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+63 917 ___ ____"
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  />
                </div>

                {/* Location — Large input */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-mute mb-2 sm:mb-3">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Forbes Park, Makati"
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors text-base min-h-[44px]"
                  />
                </div>

                {/* Timeline — Large select */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-mute mb-2 sm:mb-3">Timeline</label>
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

                {/* Message — Large textarea */}
                <div>
                  <label className="block text-xs sm:text-sm tracking-widest2 uppercase text-mute mb-2 sm:mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the space, the way you cook or dress, and what you'd like the cabinetry to do."
                    rows={6}
                    className="w-full px-4 py-3 sm:py-4 border border-line rounded focus:outline-none focus:border-ink transition-colors resize-none text-base"
                  />
                </div>

                {/* Submit — Full width, large touch target */}
                <button
                  type="submit"
                  className="w-full bg-ink text-paper py-4 sm:py-5 text-xs sm:text-sm tracking-widest2 uppercase font-semibold rounded hover:bg-ink/90 transition-colors min-h-[48px] flex items-center justify-center"
                >
                  Request Consultation →
                </button>

                {submitted && (
                  <div className="bg-stone1 border border-bronze text-ink px-4 py-3 sm:py-4 rounded text-sm sm:text-base">
                    ✓ Thank you! We'll be in touch within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info — Mobile: below form, Desktop: sidebar */}
            <div className="space-y-8 sm:space-y-12 md:space-y-12">
              {/* Studio */}
              <div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Studio</h3>
                <p className="text-sm sm:text-base leading-relaxed text-mute">
                  14 Jupiter Street<br />
                  Bel-Air, Makati 1209<br />
                  Philippines
                </p>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
                  <a href="tel:+639175550114" className="text-ink hover:text-bronze transition-colors font-semibold">
                    +63 917 555 0114
                  </a>
                  <br />
                  <a href="mailto:hello@bercoph.com" className="text-ink hover:text-bronze transition-colors font-semibold">
                    hello@bercoph.com
                  </a>
                </p>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Service Areas</h3>
                <ul className="space-y-2 text-sm sm:text-base text-mute">
                  <li>Metro Manila</li>
                  <li>Tagaytay · Batangas</li>
                  <li>Cebu · Bohol</li>
                  <li>Davao</li>
                  <li>Selected International</li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Hours</h3>
                <p className="text-sm sm:text-base text-mute">
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
                  className="block w-full bg-forest text-paper px-4 py-3 sm:py-4 text-xs sm:text-sm tracking-widest2 uppercase font-semibold rounded hover:bg-forest/90 transition-colors text-center min-h-[44px] flex items-center justify-center"
                >
                  WhatsApp
                </a>
                <a
                  href="https://m.me/bercoph"
                  className="block w-full bg-bronze text-paper px-4 py-3 sm:py-4 text-xs sm:text-sm tracking-widest2 uppercase font-semibold rounded hover:bg-bronze/90 transition-colors text-center min-h-[44px] flex items-center justify-center"
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
