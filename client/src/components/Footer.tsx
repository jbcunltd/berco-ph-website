import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="mt-24" style={{ backgroundColor: '#1F1D1A' }}>
      <div className="max-w-content mx-auto px-6 md:px-8 py-16 md:py-20 text-light">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <img
              src="/berco-logo-white.png"
              alt="Berco"
              className="max-h-20 w-auto mb-6 object-contain"
              style={{ maxWidth: '140px' }}
            />
            <p className="mt-4 text-light/80 max-w-sm text-[14px] leading-relaxed">
              The Heart of Your Home. Bespoke cabinetry drawn, fabricated, and installed for Philippine homes — considered, restrained, and built to last.
            </p>
            {/* Social links */}
            <div className="mt-8 flex items-center gap-6 text-[11px] tracking-widest2 uppercase">
              <a href="https://wa.me/639178000730" className="border-b border-paper/40 pb-1 hover:border-paper transition-colors" aria-label="WhatsApp">
                WhatsApp
              </a>
              <a href="https://m.me/bercophilippines" className="border-b border-paper/40 pb-1 hover:border-paper transition-colors" aria-label="Messenger">
                Messenger
              </a>
            </div>
          </div>

          {/* Studio Info */}
          <div className="md:col-span-3">
            <div className="text-[11px] tracking-widest2 uppercase text-light/50 mb-5">Studio</div>
            <p className="text-[14px] leading-relaxed text-light/95">
              322 Sto Rosario<br />
              Mandaluyong City, 1550<br />
              Kalakhang Maynila
            </p>
            <p className="mt-6 text-[14px] leading-relaxed text-light/95">
              <a href="mailto:sales@bercohome.com" className="text-light/95 hover:text-light transition-colors">sales@bercohome.com</a><br />
              <a href="tel:+639178000730" className="text-light/95 hover:text-light transition-colors">0917 800 0730</a>
            </p>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-widest2 uppercase text-light/50 mb-5">Service Areas</div>
            <ul className="space-y-2 text-[14px] text-light/95">
              <li>Nationwide</li>
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-widest2 uppercase text-light/50 mb-5">Explore</div>
            <ul className="space-y-2 text-[14px] text-light/90">
              <li>
                <Link href="/" asChild>
                  <a className="hover:text-light transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/kitchens" asChild>
                  <a className="hover:text-light transition-colors">Kitchens</a>
                </Link>
              </li>
              <li>
                <Link href="/wardrobes" asChild>
                  <a className="hover:text-light transition-colors">Wardrobes</a>
                </Link>
              </li>
              <li>
                <Link href="/architects-designers" asChild>
                  <a className="hover:text-light transition-colors">For Architects &amp; Designers</a>
                </Link>
              </li>
              <li>
                <Link href="/process" asChild>
                  <a className="hover:text-light transition-colors">Process &amp; Materials</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" asChild>
                  <a className="hover:text-light transition-colors">Start a Consultation</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] tracking-widest2 uppercase text-light/40 gap-3">
          <span>© 2026 BERCO Cabinetry, Inc.</span>
          <span>Crafted in the Philippines</span>
          {/* TODO: Add Privacy, Terms, and Warranty policy pages before launch */}
        </div>
      </div>
    </footer>
  );
}
