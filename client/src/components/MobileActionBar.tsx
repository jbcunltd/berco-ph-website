import { Link } from "wouter";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-paper border-t border-line flex gap-2 p-3 z-30 h-16">
      <a
        href="https://wa.me/639178000730"
        className="flex-1 bg-forest text-paper text-center py-2 text-[11px] tracking-widest2 uppercase font-semibold rounded hover:bg-forest/90 transition-colors"
      >
        WhatsApp
      </a>
      <a
        href="tel:+639178000730"
        className="flex-1 border border-ink text-ink text-center py-2 text-[11px] tracking-widest2 uppercase font-semibold rounded hover:bg-ink hover:text-paper transition-colors"
      >
        Call
      </a>
    </div>
  );
}
