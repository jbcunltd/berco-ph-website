export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-bg border-t border-line flex gap-2 p-3 z-30 h-16">
      <a
        href="https://wa.me/639178000730"
        className="ds-btn ds-btn-accent flex-1 !h-auto py-2 text-xs"
      >
        WhatsApp
      </a>
      <a
        href="tel:+639178000730"
        className="ds-btn ds-btn-secondary flex-1 !h-auto py-2 text-xs"
      >
        Call
      </a>
    </div>
  );
}
