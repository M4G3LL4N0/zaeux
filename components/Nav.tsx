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
        <div className="flex items-center gap-2">
          <Link
            href="/pay"
            className="nav-link"
          >
            Pay
          </Link>
          <Link
            href="/reserve"
            className="nav-link"
          >
            Reserve
          </Link>
          <Link
            href="/dashboard"
            className="nav-link"
          >
            Platform
          </Link>
          <Link
            href="#cta"
            className="nav-cta"
          >
            Join Early Access →
          </Link>
        </div>
      </div>
    </nav>
  );
}
