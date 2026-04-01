import { CreditCard, Globe, Zap } from "lucide-react";

export default function PayPage() {
  return (
    <main className="min-h-screen">
      <div className="section-padding">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge">Zaeux Pay</div>
            <h1 className="section-title">
              Global payments,
              <br />
              simplified.
            </h1>
            <p className="section-copy">
              Move money instantly across borders with stable digital rails and a 
              cleaner payments interface.
            </p>
          </div>

          <div className="section-grid md:grid-cols-3">
          <div className="card">
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Zap size={22} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">
              Instant Settlements
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Real-time movement of funds with end-to-end tracking and receipts.
            </p>
          </div>
          <div className="card">
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Globe size={22} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">
              Global Reach
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Send and receive payments in multiple currencies with competitive FX rates.
            </p>
          </div>
          <div className="card">
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <CreditCard size={22} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">
              Unified Interface
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              A single dashboard for all your payment activity and history.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
