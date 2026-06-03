import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import Container from './layout/Container';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Wardrobes', href: '/wardrobes' },
  { label: 'Vanities', href: '/vanities' },
  { label: 'For Designers', href: '/for-designers' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [location] = useLocation();
  const isActive = (path: string) => location === path;

  const navLinkClass = (active: boolean) =>
    `text-xs tracking-wider uppercase font-semibold transition-colors leading-none ${
      active ? 'text-text border-b-2 border-text pb-1' : 'text-text-muted hover:text-text'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-bg border-b border-line">
      <Container>
        <div className="flex items-center justify-between h-16 py-0">
          {/* Logo left */}
          <Link href="/" asChild>
            <a className="flex-shrink-0 flex items-center">
              <img
                src="/berco-logo.png"
                alt="Berco"
                className="max-h-10 sm:max-h-11 md:max-h-12 w-auto cursor-pointer object-contain"
                style={{ maxWidth: '100px', height: 'auto' }}
              />
            </a>
          </Link>

          {/* Nav links center (desktop) */}
          <nav className="hidden lg:flex items-center justify-center gap-6 flex-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <a className={`${navLinkClass(isActive(item.href))} whitespace-nowrap flex items-center`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA button right (desktop) */}
          <Link href="/contact" asChild>
            <a className="hidden lg:inline-flex items-center ds-btn-nav-cta ml-auto">
              Book Consultation
            </a>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center flex-col gap-1.5 p-2 ml-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-text" />
            ) : (
              <Menu className="w-5 h-5 text-text" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-bg">
          <Container>
            <nav className="flex flex-col gap-3 py-4">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} asChild>
                  <a
                    className={`text-sm font-semibold transition-colors ${
                      isActive(item.href) ? 'text-text' : 'text-text-muted hover:text-text'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              
              <Link href="/contact" asChild>
                <a
                  className="ds-btn ds-btn-secondary w-full mt-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Consultation
                </a>
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
