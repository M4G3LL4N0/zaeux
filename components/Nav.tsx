import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav-blur fixed inset-x-0 top-0 z-50 h-16">
      <div className="container flex h-full items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">Zaeux</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="button-secondary text-sm"
          >
            Open dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
