export default function CreditPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Zaeux Credit
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Credit infrastructure for the next financial layer.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/65">
            Zaeux Credit is the foundation for modern credit access, risk
            intelligence, and financial identity across a more programmable
            financial system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Credit Access</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Expand access to modern credit products with cleaner onboarding,
              clearer qualification logic, and better user visibility.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Risk Intelligence</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Build a more adaptive view of borrower strength, behavior, and
              profile quality across dynamic signals.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Programmable Finance</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Create infrastructure that makes credit more modular,
              interoperable, and configurable for future financial systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
