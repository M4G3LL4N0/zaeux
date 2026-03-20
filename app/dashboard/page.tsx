import { ArrowUpRight, BarChart3, CreditCard, Shield, Wallet } from "lucide-react";

const activity = [
  { label: "Reserve sweep", amount: "+$482.12", time: "Today" },
  { label: "Global transfer", amount: "-$1,240.00", time: "Yesterday" },
  { label: "Membership allocation", amount: "+$120.00", time: "2 days ago" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              Zaeux product preview
            </div>
            <h1 className="mt-2 text-5xl font-bold tracking-[-0.06em]">Dashboard</h1>
          </div>

          <div className="flex gap-3">
            <button className="button-secondary px-6 py-3 text-sm tracking-wider rounded-xl hover:bg-white/[0.06] transition-colors">
              Connect account
            </button>
            <button className="button-primary px-6 py-3 text-sm tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all">
              Add funds
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
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
            <div className="card rounded-[32px] p-7">
              <div className="text-sm text-[var(--muted)]">Recent activity</div>
              <div className="mt-5 space-y-4">
                {activity.map((item) => (
                  <div
                    key={`${item.label}-${item.time}`}
                    className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{item.label}</div>
                      <div className="font-semibold">{item.amount}</div>
                    </div>
                    <div className="mt-2 text-sm text-[var(--muted)]">{item.time}</div>
                  </div>
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
