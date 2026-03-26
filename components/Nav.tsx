import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Zaeux
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="button-secondary">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
