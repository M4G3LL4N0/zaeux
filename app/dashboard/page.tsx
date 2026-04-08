"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  BarChart3,
  CreditCard,
  Shield,
  Wallet,
  Send,
  Plus,
  ArrowDown,
  ArrowUp,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { Pie, Cell, ResponsiveContainer, PieChart } from "recharts";
import { supabase } from "@/src/lib/supabase";

interface AccountRow {
  id: string;
  user_id: string;
  account_type?: string | null;
  currency?: string | null;
  balance?: number | null;
  yield_earned?: number | null;
  status?: string | null;
  created_at?: string | null;
}

interface TransactionRow {
  id: string;
  user_id: string;
  account_id?: string | null;
  amount?: number | null;
  currency?: string | null;
  type?: 'credit' | 'debit' | null;
  status?: string | null;
  description?: string | null;
  created_at?: string | null;
}

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [accounts, setAccounts] = useState<AccountRow[]>([]);
  const [transactions, setTransactions] = useState<TransactionRow[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadDashboard() {
      try {
        setLoading(true);
        setError("");

        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
          throw new Error(userError?.message || "User not authenticated");
        }

        if (!user) {
          if (!cancelled) {
            setIsAuthed(false);
            setEmail("");
            setAccounts([]);
            setTransactions([]);
          }
          return;
        }

        if (!cancelled) {
          setIsAuthed(true);
          setEmail(user.email ?? "");
        }

        const { data: existingProfile, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("id", user.id)
          .maybeSingle();

        if (profileError) throw profileError;

        if (!existingProfile) {
          const { error: insertProfileError } = await supabase.from("profiles").insert([
            {
              id: user.id,
              email: user.email ?? null,
              display_name: user.user_metadata?.display_name ?? null,
            },
          ]);

          if (insertProfileError) throw insertProfileError;
        }

        const { data: accountRows, error: accountsError } = await supabase
          .from("accounts")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (accountsError) throw accountsError;

        let resolvedAccounts = (accountRows ?? []) as AccountRow[];

        if (resolvedAccounts.length === 0) {
          const { data: insertedAccounts, error: createAccountError } = await supabase
            .from("accounts")
            .insert([
              {
                user_id: user.id,
                account_type: "primary",
                currency: "USD",
                balance: 0,
                yield_earned: 0,
                status: "active",
              },
            ])
            .select("*");

          if (createAccountError) throw createAccountError;
          resolvedAccounts = (insertedAccounts ?? []) as AccountRow[];
        }

        const { data: transactionRows, error: transactionsError } = await supabase
          .from("transactions")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(8);

        if (transactionsError) throw transactionsError;

        if (!cancelled) {
          setAccounts(resolvedAccounts);
          setTransactions((transactionRows ?? []) as TransactionRow[]);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load dashboard.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadDashboard();

    return () => {
      cancelled = true;
    };
  }, []);

  const primaryAccount = accounts[0];

  const totalBalance = useMemo(() => {
    return accounts.reduce((sum, account) => sum + Number(account.balance ?? 0), 0);
  }, [accounts]);

  const totalYield = useMemo(() => {
    return accounts.reduce(
      (sum, account) => sum + Number(account.yield_earned ?? 0),
      0
    );
  }, [accounts]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="min-h-screen px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="card rounded-[32px] p-7">
            <div className="text-sm text-[var(--muted)]">Zaeux dashboard</div>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.06em]">
              Loading account…
            </h1>
            <div className="mt-6 h-2 w-48 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthed) {
    return (
      <main className="min-h-screen px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="card rounded-[32px] p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              Zaeux product preview
            </div>
            <h1 className="mt-3 text-5xl font-bold tracking-[-0.06em]">
              Sign in to access your dashboard
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
              Your live account, balances, and transaction activity appear here once
              you log in.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="button-primary" onClick={() => router.push("/login")}>
                Go to login
              </button>
              <button className="button-secondary" onClick={() => router.push("/")}>
                Back to homepage
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              Zaeux dashboard
            </div>
            <h1 className="mt-2 text-5xl font-bold tracking-[-0.06em]">Overview</h1>
            {email ? <div className="mt-3 text-sm text-[var(--muted)]">{email}</div> : null}
          </div>

          <div className="flex gap-3">
            <button className="button-secondary" onClick={() => router.push("/")}>
              Back to site
            </button>
            <button className="button-primary" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>

        {error ? (
          <div className="mb-6 card rounded-[24px] p-5">
            <div className="text-sm text-red-300">{error}</div>
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="grid gap-6">
            <div className="card rounded-[32px] p-7">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Total balance</div>
                  <div className="mt-2 text-6xl font-bold tracking-[-0.07em]">
                    $
                    {totalBalance.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="mt-4 text-sm text-[var(--success)]">
                    Yield earned: $
                    {totalYield.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Wallet size={24} />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <BarChart3 size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Yield earned</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  $
                  {totalYield.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div className="mt-2 text-xs text-[var(--success)]">
                  +4.8% APY
                </div>
              </div>

              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <CreditCard size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Transactions</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  {transactions.length}
                </div>
                <div className="mt-2 text-xs text-[var(--muted)]">
                  Last 30 days
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
                <div className="mt-2 text-xs text-[var(--muted)]">
                  Tier 1 access
                </div>
              </div>

              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <PieChart size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Allocation</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  {accounts.length}
                </div>
                <div className="mt-2 text-xs text-[var(--muted)]">
                  Accounts
                </div>
              </div>
            </div>

            <div className="card rounded-[32px] p-7">
              <div className="flex items-center justify-between">
                <div className="text-sm text-[var(--muted)]">Portfolio Allocation</div>
                <div className="flex items-center gap-2 text-sm text-[var(--success)]">
                  <TrendingUp size={16} />
                  <span>+4.8% APY</span>
                </div>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">By Currency</div>
                  <div className="mt-4 h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={Object.entries(
                            accounts.reduce((acc, account) => {
                              const currency = account.currency || 'USD';
                              const balance = Number(account.balance) || 0;
                              acc[currency] = (acc[currency] || 0) + balance;
                              return acc;
                            }, {} as Record<string, number>)
                          ).map(([name, value]) => ({ name, value }))}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {['#7dd3fc', '#c4b5fd', '#86efac', '#fca5a5'].map((color, i) => (
                            <Cell key={`cell-${i}`} fill={color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-3">
                    {Object.entries(
                      accounts.reduce((acc, account) => {
                        const currency = account.currency || 'USD';
                        const balance = Number(account.balance) || 0;
                        acc[currency] = (acc[currency] || 0) + balance;
                        return acc;
                      }, {} as Record<string, number>)
                    ).map(([currency, balance], i) => (
                      <div key={currency} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="h-2 w-2 rounded-full" 
                            style={{ 
                              backgroundColor: ['#7dd3fc', '#c4b5fd', '#86efac', '#fca5a5'][i % 4]
                            }} 
                          />
                          <span className="text-sm">{currency}</span>
                        </div>
                        <div className="text-sm font-medium">
                          ${balance.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">By Account Type</div>
                  <div className="mt-4 h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={Object.entries(
                            accounts.reduce((acc, account) => {
                              const type = account.account_type || 'Primary';
                              const balance = Number(account.balance) || 0;
                              acc[type] = (acc[type] || 0) + balance;
                              return acc;
                            }, {} as Record<string, number>)
                          ).map(([name, value]) => ({ name, value }))}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {['#7dd3fc', '#c4b5fd', '#86efac', '#fca5a5'].map((color, i) => (
                            <Cell key={`cell-${i}`} fill={color} />
                          ))}
                        </Pie>
                      </RePieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-3">
                    {Object.entries(
                      accounts.reduce((acc, account) => {
                        const type = account.account_type || 'Primary';
                        const balance = Number(account.balance) || 0;
                        acc[type] = (acc[type] || 0) + balance;
                        return acc;
                      }, {} as Record<string, number>)
                    ).map(([type, balance], i) => (
                      <div key={type} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="h-2 w-2 rounded-full" 
                            style={{ 
                              backgroundColor: ['#7dd3fc', '#c4b5fd', '#86efac', '#fca5a5'][i % 4]
                            }} 
                          />
                          <span className="text-sm">{type}</span>
                        </div>
                        <div className="text-sm font-medium">
                          ${balance.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="card rounded-[32px] p-7">
              <div className="flex items-center justify-between">
                <div className="text-sm text-[var(--muted)]">Quick actions</div>
              </div>
              <div className="mt-6 grid grid-cols-4 gap-4">
                <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <Send size={20} />
                  <span className="text-sm">Send</span>
                </button>
                <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <ArrowDown size={20} />
                  <span className="text-sm">Deposit</span>
                </button>
                <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <ArrowUp size={20} />
                  <span className="text-sm">Withdraw</span>
                </button>
                <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <Plus size={20} />
                  <span className="text-sm">New Account</span>
                </button>
              </div>
            </div>

            <div className="card rounded-[32px] p-7">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Primary account</div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                    {primaryAccount?.account_type ?? "Primary"} ·{" "}
                    {primaryAccount?.currency ?? "USD"}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--muted)]">Active</span>
                  <div className="h-2 w-2 rounded-full bg-[var(--success)]" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[var(--muted)]">Status</div>
                    <div className="h-2 w-2 rounded-full bg-[var(--success)]" />
                  </div>
                  <div className="mt-2 text-xl font-semibold">
                    {primaryAccount?.status ?? "active"}
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Accounts</div>
                  <div className="mt-2 text-xl font-semibold">{accounts.length}</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    {accounts.filter(a => a.status === 'active').length} active
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Available balance</div>
                  <div className="mt-2 text-xl font-semibold">
                    $
                    {Number(primaryAccount?.balance ?? 0).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    No holds
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Yield earned</div>
                  <div className="mt-2 text-xl font-semibold">
                    $
                    {Number(primaryAccount?.yield_earned ?? 0).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="mt-1 text-xs text-[var(--success)]">
                    +4.8% APY
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="grid gap-6">
            <div className="card rounded-[32px] p-7">
              <div className="text-sm text-[var(--muted)]">Recent activity</div>
              <div className="mt-5 space-y-4">
                {transactions.length > 0 ? (
                  transactions.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-medium">
                          {item.description || item.type || "Transaction"}
                        </div>
                        <div className="font-semibold">
                          {item.amount != null
                            ? `${Number(item.amount) >= 0 ? "+" : "-"}$${Math.abs(
                                Number(item.amount)
                              ).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}`
                            : "--"}
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-[var(--muted)]">
                        {item.created_at
                          ? new Date(item.created_at).toLocaleString()
                          : item.status || "posted"}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-4 text-sm text-[var(--muted)]">
                    No transactions yet.
                  </div>
                )}
              </div>
            </div>

            <div className="card rounded-[32px] p-7">
              <div className="text-sm text-[var(--muted)]">Next steps</div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                <li>• Add wallet connection or magic-link auth polish</li>
                <li>• Add reserve allocation and transfer actions</li>
                <li>• Add account settings and profile editing</li>
                <li>• Add internal ledger and admin tooling</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
