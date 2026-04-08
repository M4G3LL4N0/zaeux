import { Sparkles } from "lucide-react";

export default function CorePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="card rounded-[36px] p-8 md:p-12">
          <div className="badge">
            <Sparkles size={14} />
            Zaeux Core
          </div>
          <h1 className="section-title mt-5">
            Infrastructure for
            <br />
            serious operators.
          </h1>
          <p className="section-copy mt-6 max-w-3xl">
            Zaeux Core is the infrastructure layer for partners building modern
            financial products, treasury systems, and next-generation money
            movement on top of clean account logic.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              APIs
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Account and ledger primitives
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Build financial products on top of structured account, balance,
              and transaction flows designed for clarity and scale.
            </p>
          </div>

          <div className="card">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Treasury
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Modern operational finance
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Power treasury movement, settlement flows, and programmable
              financial operations with a cleaner infrastructure stack.
            </p>
          </div>

          <div className="card">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Controls
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Structured access and permissions
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Keep account access, product permissions, and operational flows
              controlled, auditable, and ready for serious partners.
            </p>
          </div>

          <div className="card">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Launch
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Start with the Zaeux platform
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Use Zaeux Core as the foundation for infrastructure-grade
              financial products, treasury tooling, and partner integrations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
