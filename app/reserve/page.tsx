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

      <section className="section-padding bg-black/20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="section-subtitle">
              Institutional-grade tools
              <br />
              for modern treasury
            </h2>
            <p className="section-copy">
              Zaeux Reserve provides the infrastructure businesses need to manage
              their treasury operations with precision and efficiency.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Liquidity Management
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Optimize your cash flow with real-time liquidity management tools
                and forecasting.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Risk Analytics
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Monitor and manage financial risks with advanced analytics and
                reporting tools.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Portfolio Optimization
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Maximize returns while managing risk with institutional-grade
                portfolio optimization tools.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                API Integration
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Integrate Zaeux Reserve into your existing systems with our
                developer APIs and SDKs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="section-subtitle">
              Built for serious operators
            </h2>
            <p className="section-copy">
              Zaeux Reserve is designed to meet the needs of businesses managing
              complex treasury operations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Multi-Currency Support
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Manage balances across multiple currencies with real-time FX
                rates and conversions.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Regulatory Compliance
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Built with global compliance standards in mind, including KYC/AML
                and regulatory requirements.
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
