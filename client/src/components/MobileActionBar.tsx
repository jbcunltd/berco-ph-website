import { Link } from "wouter";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-paper border-t border-line flex gap-2 p-3 z-30 h-16">
      <Link href="/contact" asChild>
        <a className="flex-1 bg-ink text-paper text-center py-2 text-[11px] tracking-widest2 uppercase font-semibold rounded hover:bg-ink/90 transition-colors">
          Book
        </a>
      </Link>
      <a
        href="tel:+639175550114"
        className="flex-1 border border-ink text-ink text-center py-2 text-[11px] tracking-widest2 uppercase font-semibold rounded hover:bg-ink hover:text-paper transition-colors"
      >
        Call
      </a>
    </div>
  );
}
