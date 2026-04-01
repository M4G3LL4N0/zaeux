import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav-blur fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10">
      <div className="container flex h-full items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] bg-clip-text text-transparent">
            Zaeux
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="button-secondary text-sm hover:bg-white/10 transition-colors"
          >
            Product Preview
          </Link>
          <Link
            href="#cta"
            className="button-primary text-sm hover:bg-[var(--accent)]/90 transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
