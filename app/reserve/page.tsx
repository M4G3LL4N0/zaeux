import { Landmark, Percent, Shield } from "lucide-react";

export default function ReservePage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge">Zaeux Reserve</div>
            <h1 className="section-title">
              Smart treasury,
              <br />
              optimized yield.
            </h1>
            <p className="section-copy">
              Manage your balances with institutional-grade tools and earn competitive
              returns on your idle capital.
            </p>
          </div>

          <div className="section-grid md:grid-cols-3">
            <div className="card">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <Landmark size={24} />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Treasury Management
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Professional-grade tools for managing balances and liquidity.
              </p>
            </div>
            <div className="card">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <Percent size={24} />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Competitive Yield
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Earn returns on idle balances with institutional-grade strategies.
              </p>
            </div>
            <div className="card">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <Shield size={24} />
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
      </section>
    </main>
  );
}
