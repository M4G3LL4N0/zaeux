import { Landmark, Percent, Shield } from "lucide-react";

export default function ReservePage() {
  return (
    <main className="min-h-screen">
      <div className="container py-24">
        <div className="max-w-3xl">
          <div className="badge">Zaeux Reserve</div>
          <h1 className="section-title mt-5">
            Smart treasury,
            <br />
            optimized yield.
          </h1>
          <p className="section-copy mt-6 max-w-2xl">
            Manage your balances with institutional-grade tools and earn competitive
            returns on your idle capital.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Landmark size={22} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">
              Treasury Management
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Professional-grade tools for managing balances and liquidity.
            </p>
          </div>
          <div className="card">
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Percent size={22} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">
              Competitive Yield
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Earn returns on idle balances with institutional-grade strategies.
            </p>
          </div>
          <div className="card">
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Shield size={22} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">
              Secure Infrastructure
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Built with security-first principles and institutional-grade safeguards.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
