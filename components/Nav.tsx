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
            href="/pay"
            className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Pay
          </Link>
          <Link
            href="/reserve"
            className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Reserve
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Platform
          </Link>
          <Link
            href="#cta"
            className="button-primary text-sm hover:bg-[var(--accent)]/90 transition-colors px-4 py-2"
          >
            Join Early Access →
          </Link>
        </div>
      </div>
    </nav>
  );
}
