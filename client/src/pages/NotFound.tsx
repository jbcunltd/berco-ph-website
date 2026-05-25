import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-6xl mb-4">404</h1>
        <p className="text-mute text-[15px] mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" asChild>
          <a className="inline-block bg-ink text-paper px-8 py-3 text-[12px] tracking-widest2 uppercase font-semibold hover:bg-ink/90 transition-colors">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
