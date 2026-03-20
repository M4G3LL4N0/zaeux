"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Pay", href: "/pay" },
  { name: "Reserve", href: "/reserve" },
  { name: "Credit", href: "/credit" },
  { name: "Core", href: "/core" },
  { name: "About", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 nav-blur">
      <div className="container flex h-18 items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold tracking-[-0.08em]">
          Zaeux
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="button-secondary text-sm">
            Preview product
          </Link>
          <a href="#cta" className="button-primary text-sm">
            Join waitlist
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-18 z-50 bg-black/95 backdrop-blur-sm md:hidden">
          <div className="container py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-sm text-[var(--muted)] transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
