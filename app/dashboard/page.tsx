"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  BarChart3,
  CreditCard,
  Shield,
  Wallet,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type AccountRow = {
  id: string;
  user_id: string;
  account_type: string;
  currency: string;
  balance: number;
  yield_earned: number;
  status: string;
  created_at: string;
  updated_at: string;
};

type TransactionRow = {
  id: string;
  user_id: string;
  account_id: string;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  status: string;
  description: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [accounts, setAccounts] = useState<AccountRow[]>([]);
  const [transactions, setTransactions] = useState<TransactionRow[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    async function loadDashboard() {
      try {
        setLoading(true);
        setError("");

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          throw userError;
        }

        if (!user) {
          if (isMounted) {
            setIsAuthed(false);
            setAccounts([]);
            setTransactions([]);
            setEmail("");
          }
          return;
        }

        if (!isMounted) return;

        setIsAuthed(true);
        setEmail(user.email ?? "");

        // Ensure profile exists with correct schema
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            email: user.email,
            full_name: user.email?.split('@')[0] || null,
            updated_at: new Date().toISOString(),
          }, {
            onConflict: 'id'
          });

        if (profileError) throw profileError;

        const { data: accountRows, error: accountsError } = await supabase
          .from("accounts")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(1); // Only get primary account for now

        if (accountsError) {
          throw accountsError;
        }

        let resolvedAccounts = accountRows ?? [];

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

          if (createAccountError) {
            throw createAccountError;
          }

          resolvedAccounts = insertedAccounts ?? [];
        }

        const { data: transactionRows, error: transactionsError } = await supabase
          .from("transactions")
          .select("id, user_id, account_id, amount, currency, type, status, description, created_at")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(8);

        if (transactionsError) {
          throw transactionsError;
        }

        if (!isMounted) return;

        setAccounts(resolvedAccounts);
        setTransactions(transactionRows ?? []);
      } catch (err) {
        if (!isMounted) return;
        const message = err instanceof Error ? err.message : "Failed to load dashboard";
        console.error("Dashboard error:", message);
        setError(message);
        router.push("/login");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadDashboard();

    return () => {
      isMounted = false;
    };
  }, []);

  const primaryAccount = accounts[0];

  const totalBalance = useMemo(() => {
    return accounts.reduce((sum, account) => {
      return sum + Number(account.balance ?? 0);
    }, 0);
  }, [accounts]);

  const totalYield = useMemo(() => {
    return accounts.reduce((sum, account) => {
      return sum + Number(account.yield_earned ?? 0);
    }, 0);
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
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.06em]">Loading account…</h1>
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
              Your live account, balances, and transaction activity appear here once you log in.
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
    <main className="min-h-screen bg-black/50">
      <DashboardSidebar />
      <DashboardHeader email={email} />
      
      <div className="md:pl-64">
        <div className="pt-16">
          <div className="container px-6 py-8">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            Your Financial Control Center
          </div>
          <h1 className="mt-2 text-5xl font-bold tracking-[-0.06em]">Dashboard Overview</h1>
        </div>

        {error && (
          <div className="mb-6 card rounded-[24px] p-5">
            <div className="text-sm text-red-300">
              Error: {error}. Please try again or contact support if the issue persists.
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="grid gap-6">
            <div className="card rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Your Total Balance</div>
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

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="card rounded-2xl p-5">
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
              </div>

              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <CreditCard size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Transactions</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  {transactions.length}
                </div>
              </div>

              <div className="card">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Shield size={20} />
                </div>
                <div className="text-sm text-[var(--muted)]">Membership</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">Active</div>
              </div>
            </div>

            <div className="card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Primary account</div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                    {primaryAccount?.account_type ?? "Primary"} · {primaryAccount?.currency ?? "USD"}
                  </h2>
                </div>
                <ArrowUpRight />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="card rounded-xl p-4">
                  <div className="text-sm text-[var(--muted)]">Status</div>
                  <div className="mt-2 text-xl font-semibold">
                    {primaryAccount?.status ?? "active"}
                  </div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Accounts</div>
                  <div className="mt-2 text-xl font-semibold">{accounts.length}</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Balance</div>
                  <div className="mt-2 text-xl font-semibold">
                    $
                    {Number(primaryAccount?.balance ?? 0).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Yield</div>
                  <div className="mt-2 text-xl font-semibold">
                    $
                    {Number(primaryAccount?.yield_earned ?? 0).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="grid gap-6">
            <div className="card rounded-2xl p-6">
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

            <div className="card rounded-2xl p-6">
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
      </div>
    </main>
  );
}
