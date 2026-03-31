"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight, Banknote, CreditCard, LayoutDashboard, Settings, Shield } from "lucide-react";
import { Button } from "./ui/button";

export function DashboardSidebar() {
  const router = useRouter();

  const navItems = [
    {
      label: "Overview",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      label: "Accounts",
      icon: Banknote,
      path: "/dashboard/accounts",
    },
    {
      label: "Reserve",
      icon: Shield,
      path: "/dashboard/reserve",
    },
    {
      label: "Payments",
      icon: ArrowUpRight,
      path: "/dashboard/payments",
    },
    {
      label: "Credit",
      icon: CreditCard,
      path: "/dashboard/credit",
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/10 bg-black/50 p-6 backdrop-blur md:block">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-[-0.06em]">Zaeux</h1>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start gap-3 text-sm font-medium"
            onClick={() => router.push(item.path)}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
