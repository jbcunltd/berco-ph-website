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
      {/* Utility bar — phone number + info */}
      <div className="hidden lg:block border-b border-line bg-bg py-2">
        <Container>
          <div className="flex justify-end items-center gap-6">
            <a href="tel:+639178000730" className="text-xs text-text-muted hover:text-text transition-colors">
              +63 917 800 0730
            </a>
            <span className="text-xs text-line">•</span>
            <a href="mailto:sales@bercohome.com" className="text-xs text-text-muted hover:text-text transition-colors">
              sales@bercohome.com
            </a>
          </div>
        </Container>
      </div>

      {/* Main header bar */}
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-14">
          {/* Logo + tagline left */}
          <Link href="/" asChild>
            <a className="flex items-center gap-3 flex-shrink-0 group">
              <img
                src="/berco-logo.png"
                alt="Berco"
                className="max-h-10 sm:max-h-11 md:max-h-12 w-auto cursor-pointer object-contain"
                style={{ maxWidth: '100px', height: 'auto' }}
              />
              <span className="hidden sm:block text-xs tracking-widest uppercase font-semibold text-text-muted group-hover:text-text transition-colors leading-tight">
                The Heart<br />of Your Home
              </span>
            </a>
          </Link>

          {/* Nav links + CTA right (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <a className={`${navLinkClass(isActive(item.href))} whitespace-nowrap`}>{item.label}</a>
              </Link>
            ))}
            
            {/* CTA as subtle text link */}
            <Link href="/contact" asChild>
              <a className="text-xs tracking-wider uppercase font-semibold text-text-muted hover:text-accent transition-colors leading-none whitespace-nowrap">
                Book Consultation
              </a>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
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
            <nav className="flex flex-col gap-4 py-4">
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
                  className="ds-btn ds-btn-secondary w-full mt-2"
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
