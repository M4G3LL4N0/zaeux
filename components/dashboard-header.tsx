"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function DashboardHeader({ email }: { email: string }) {
  const router = useRouter();

  return (
    <header className="fixed top-0 right-0 z-30 h-16 border-b border-white/10 bg-black/50 backdrop-blur md:left-64">
      <div className="container flex h-full items-center justify-between px-6">
        <div className="text-sm text-[var(--muted)]">{email}</div>
        
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => router.push("/")}>
            Back to site
          </Button>
          <Button variant="primary" onClick={() => router.push("/login")}>
            Sign out
          </Button>
        </div>
      </div>
    </header>
  );
}
