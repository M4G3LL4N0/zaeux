import { ArrowUpRight, BarChart2, Bell, CreditCard, Home, LineChart, Mail, PieChart, Settings, Shield, TrendingUp, User, Wallet } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home },
  { name: "Accounts", icon: Wallet },
  { name: "Payments", icon: CreditCard },
  { name: "Invest", icon: TrendingUp },
  { name: "Cards", icon: CreditCard },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];


const accounts = [
  { name: "Primary Reserve", balance: "$84,213.54", yield: "4.82%", cardLastFour: "4242" },  
  { name: "Global Treasury", balance: "$42,014.29", yield: "3.94%", cardLastFour: "5532" },
  { name: "Cash Buffer", balance: "$2,092.95", yield: "1.25%", cardLastFour: "3987" },
];

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) {
        router.push("/login");
      }
    });
  }, [router]);

  // Ensure profile exists
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", session.user.id)
    .single();

  if (!profile) {
    await supabase
      .from("profiles")
      .insert([{ user_id: session.user.id, email: session.user.email }]);
  }

  // Get or create default account
  let { data: accounts } = await supabase
    .from("accounts")
    .select("*")
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false });

  if (!accounts || accounts.length === 0) {
    // Create default account
    const { data: newAccount } = await supabase
      .from("accounts")
      .insert([{
        user_id: session.user.id,
        name: "Primary Reserve",
        balance: 0,
        yield: 0,
        currency: "USD",
        card_last_four: "4242"
      }])
      .select()
      .single();
    
    accounts = [newAccount];
  }

  // Get recent transactions
  const { data: transactions } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false })
    .limit(5);

  // Format transactions for UI
  const activity = transactions?.map((tx) => ({
    label: tx.description || tx.type === 'credit' ? 'Deposit' : 'Withdrawal',
    amount: `${tx.type === 'credit' ? '+' : '-'}$${tx.amount.toFixed(2)}`,
    time: new Date(tx.created_at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    type: tx.type === 'credit' ? 'deposit' : 'withdrawal'
  })) || [];

  // Calculate total balance
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="dashboard-sidebar sticky top-0 h-screen hidden lg:block">
        <div className="p-6 border-b border-white/5">
          <div className="text-xl font-semibold tracking-tight">Zaeux</div>
          <div className="mt-1 text-xs text-[var(--muted)]">Private Dashboard</div>
        </div>
        <nav className="mt-4 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href="#" 
                  className={`sidebar-item flex items-center gap-3 rounded-lg px-4 py-3 text-[var(--muted)] ${item.name === 'Dashboard' ? 'active' : ''}`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5">
          <div className="text-xs text-[var(--muted)] mb-2">Account Overview</div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-white/[0.03]">
            <div className="w-2 h-2 rounded-full bg-[var(--success)]"></div>
            <span>Active</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              Summary
            </div>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">Dashboard</h1>
          </div>
          <div className="flex gap-3">
            <button className="button-secondary !px-4 !py-2 text-sm">
              <Bell size={18} />
            </button>
            <button className="button-secondary !px-4 !py-2 text-sm">
              <Mail size={18} />
            </button>
          </div>
        </div>

        {/* Account Cards */}
        <div className="grid gap-6 mb-8 md:grid-cols-3">
          {accounts?.map((account, i) => (
            <div 
              key={i} 
              className={`account-card p-6 transition-all ${i === 0 ? 'account-card-active' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium flex items-center gap-2">
                  {account.name}
                  {i === 0 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                      Primary
                    </span>
                  )}
                </h3>
                <div className="rounded-full bg-white/5 p-2">
                  <Wallet size={16} />
                </div>
              </div>
              <div className="text-3xl font-bold tracking-tight">
                ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
              <div className="mt-2 inline-flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">▲ {account.yield.toFixed(2)}%</span>
                <span className="text-[var(--muted)]">APY</span>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs uppercase tracking-wider flex items-center justify-between">
                <span>•••• •••• •••• {account.cardLastFour}</span>
                <span>{i === 0 ? 'Active' : 'Linked'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Performance</h2>
              <p className="text-sm text-[var(--muted)] mt-1">
                Quarterly reserve performance
              </p>
            </div>
            <div className="flex gap-2">
              <button className="button-secondary !px-3 !py-1 text-xs">
                1M %
              </button>
              <button className="button-secondary !px-3 !py-1 text-xs">
                6M %
              </button>
              <button className="button-secondary !px-3 !py-1 text-xs">
                12M %
              </button>
            </div>
          </div>
          <div className="chart-placeholder relative">
            <div className="absolute top-4 left-4">
              <div className="text-sm font-medium">Reserve balance (USD)</div>
              <div className="text-2xl font-bold mt-1">$84,213<span className="text-[var(--success)]">.54</span></div>
              <div className="text-xs text-[var(--muted)] mt-1">30-day history</div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="chart-axis">Jan 1</div>
              <div className="chart-axis">Jan 15</div>
              <div className="chart-axis">Feb 1</div>
              <div className="chart-axis">Feb 15</div>
              <div className="chart-axis">Mar 1</div>
            </div>

            {/* Simulated chart line with points */}
            <svg width="100%" height="100%" className="absolute inset-0">
              <path 
                d="M 40 180 C 80 120, 140 140, 180 100 C 220 60, 280 80, 320 40" 
                stroke="var(--accent)" 
                strokeWidth="2" 
                fill="none"
              />
              {[40,80,140,180,220,280,320].map((x,i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 180 - (i*20) : 180 - (i*15)} r="3" fill="var(--accent)" />
              ))}
            </svg>
            
            <div className="chart-tooltip absolute" style={{top: '40%', right: '30%'}}>
              <div className="text-xs">Performance spike</div>
              <div className="font-bold">+5.2%</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <section className="grid gap-6">
            <div className="card rounded-[32px] p-7">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Total balance</div>
                  <div className="mt-2 text-6xl font-bold tracking-[-0.07em]">
                    ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </div>
                  <div className="mt-4 text-sm text-[var(--success)]">
                    +4.82% reserve performance
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Wallet size={24} />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <BarChart3 size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Yield earned</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  $2,184.33
                </div>
              </div>

              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <CreditCard size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Transfers</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  124
                </div>
              </div>

              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Shield size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Membership</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  Active
                </div>
              </div>
            </div>

            <div className="card rounded-[32px] p-7">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Product access</div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                    Reserve, Pay, Credit, Core
                  </h2>
                </div>
                <ArrowUpRight />
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/[0.08] hover:border-white/[0.15]">
                  <div className="text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Reserve</div>
                  <div className="mt-3 text-xl font-semibold leading-tight">Treasury allocation</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Pay</div>
                  <div className="mt-2 text-xl font-semibold">Global transfers</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Credit</div>
                  <div className="mt-2 text-xl font-semibold">Programmable access</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Core</div>
                  <div className="mt-2 text-xl font-semibold">Infrastructure rails</div>
                </div>
              </div>
            </div>
          </section>

          <aside className="grid gap-6">
            <div className="account-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
                <button className="text-sm text-[var(--accent)]">View All</button>
              </div>
              <div className="space-y-3">
                {activity?.map((item) => (
                  <a
                    href="#"
                    key={`${item.label}-${item.time}`}
                    className={`activity-item block px-4 py-3 rounded-lg ${
                      item.type === 'deposit' ? 'text-[var(--success)]' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{item.label}</div>
                      <div className={`font-mono ${item.type === 'deposit' ? 'text-[var(--success)]' : ''}`}>
                        {item.amount}
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-[var(--muted)]">
                      {item.time}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card rounded-[32px] p-7">
              <div className="text-sm text-[var(--muted)]">Next steps</div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                <li>• Add auth and real accounts</li>
                <li>• Add waitlist capture and onboarding</li>
                <li>• Add wallet connection or email-first signup</li>
                <li>• Add Noaerth portfolio linkback</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
