import { CreditCard, Globe, Zap } from "lucide-react";

export default function PayPage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding">
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
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Instant Settlements
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Real-time movement of funds with end-to-end tracking and receipts.
              </p>
            </div>
            <div className="card">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Global Reach
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Send and receive payments in multiple currencies with competitive FX rates.
              </p>
            </div>
            <div className="card">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <CreditCard size={24} />
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
      </section>

      <section className="section-padding bg-black/20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="section-subtitle">
              Payment infrastructure
              <br />
              for modern businesses
            </h2>
            <p className="section-copy">
              Zaeux Pay provides the tools businesses need to move money globally
              with speed, clarity, and control.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Multi-Currency Accounts
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Hold, send, and receive funds in multiple currencies with
                competitive exchange rates.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Batch Payments
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Send multiple payments at once with bulk processing and
                customizable templates.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Payment Links
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Create and share payment links for easy invoice collection and
                one-time payments.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                API Integration
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Integrate Zaeux Pay into your existing systems with our developer
                APIs and SDKs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="section-subtitle">
              Built for global scale
            </h2>
            <p className="section-copy">
              Zaeux Pay is designed to handle the needs of businesses operating
              across borders and currencies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Compliance Ready
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Built with global compliance standards in mind, including KYC/AML
                and regulatory requirements.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Fraud Protection
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Advanced fraud detection and prevention systems to protect your
                transactions.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                24/7 Support
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Dedicated support team available around the clock to assist with
                any issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
