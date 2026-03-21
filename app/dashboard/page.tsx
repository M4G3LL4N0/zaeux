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

const activity = [
  { label: "Reserve sweep", amount: "+$482.12", time: "2 mins ago", type: "deposit" },
  { label: "Global transfer", amount: "-$1,240.00", time: "30 mins ago", type: "withdrawal" }, 
  { label: "Membership allocation", amount: "+$120.00", time: "Yesterday", type: "deposit" },
  { label: "Dividend payment", amount: "+$42.50", time: "Yesterday", type: "deposit" },
  { label: "Coffee purchase", amount: "-$4.25", time: "Mar 19", type: "withdrawal" },
];

const accounts = [
  { name: "Primary Reserve", balance: "$84,213.54", yield: "4.82%", cardLastFour: "4242" },  
  { name: "Global Treasury", balance: "$42,014.29", yield: "3.94%", cardLastFour: "5532" },
  { name: "Cash Buffer", balance: "$2,092.95", yield: "1.25%", cardLastFour: "3987" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="dashboard-sidebar sticky top-0 h-screen hidden lg:block">
        <div className="p-6">
          <div className="text-xl font-semibold tracking-tight">Zaeux</div>
        </div>
        <nav className="mt-8 px-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-[var(--muted)] hover:text-white hover:bg-white/5">
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
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
          {accounts.map((account, i) => (
            <div key={i} className="account-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">{account.name}</h3>
                <div className="rounded-full bg-white/5 p-2">
                  <Wallet size={16} />
                </div>
              </div>
              <div className="text-2xl font-bold tracking-tight">
                {account.balance}
              </div>
              <div className="mt-1 text-sm text-[var(--muted)]">
                Yield: {account.yield}
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider">
                •••• •••• •••• {account.cardLastFour}
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
          <div className="chart-placeholder">
            <div className="flex items-center gap-2">
              <LineChart size={20} />
              Performance chart coming soon
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
                    $128,420.78
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
                {activity.map((item) => (
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
      </div>
    </main>
  );
}
