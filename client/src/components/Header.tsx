import { Link, useLocation } from "wouter";
import Container from "./layout/Container";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Kitchens", href: "/kitchens" },
  { label: "Wardrobes", href: "/wardrobes" },
  { label: "Vanities", href: "/vanities" },
  { label: "Trade", href: "/architects-designers" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [location] = useLocation();
  const isActive = (path: string) => location === path;

  const navLinkClass = (active: boolean) =>
    `text-xs tracking-widest2 uppercase font-semibold transition-colors ${
      active ? "text-text border-b-2 border-text pb-1" : "text-text-muted hover:text-text"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-bg border-b border-line">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <img
              src="/berco-logo.png"
              alt="Berco"
              className="max-h-10 sm:max-h-11 md:max-h-12 w-auto cursor-pointer object-contain flex-shrink-0"
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 h-full">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <a className={navLinkClass(isActive(item.href))}>{item.label}</a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 h-full">
            <Link href="/contact" asChild>
              <a className="hidden lg:inline-flex ds-btn ds-btn-primary !h-10 !px-5">
                Book Consultation
              </a>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle navigation"
            >
              <div className={`w-5 h-0.5 bg-text transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-5 h-0.5 bg-text transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <div className={`w-5 h-0.5 bg-text transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-bg border-t border-line">
          <Container>
            <div className="py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} asChild>
                  <a onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 ${navLinkClass(isActive(item.href))}`}>
                    {item.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact" asChild>
                <a onClick={() => setMobileMenuOpen(false)} className="ds-btn ds-btn-primary w-full mt-4">
                  Book Consultation
                </a>
              </Link>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
