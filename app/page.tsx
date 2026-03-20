import Link from "next/link";
import { WaitlistForm } from "../components/WaitlistForm";
import {
  ArrowRight,
  Building2,
  CreditCard,
  Globe,
  Landmark,
  Layers3,
  Shield,
  Sparkles,
  Wallet,
} from "lucide-react";

const pillars = [
  {
    icon: Wallet,
    title: "Unified account",
    copy:
      "A modern financial home for balances, transfers, treasury, and tokenized products.",
  },
  {
    icon: Shield,
    title: "Trust-first design",
    copy:
      "Built for serious users who want clarity, structure, and a cleaner experience than fragmented crypto tools.",
  },
  {
    icon: Layers3,
    title: "Onchain infrastructure",
    copy:
      "Not just a wallet. Zaeux is a platform layer for consumer finance, business treasury, and institutional rails.",
  },
];

const products = [
  {
    title: "Zaeux Pay",
    copy: "Move money globally with stable digital rails and a cleaner payments interface.",
  },
  {
    title: "Zaeux Reserve",
    copy: "Treasury-style balance management for users and businesses that want more than idle cash.",
  },
  {
    title: "Zaeux Credit",
    copy: "The future lending layer for member access, capital pools, and programmable credit products.",
  },
  {
    title: "Zaeux Core",
    copy: "Infrastructure APIs and ledger systems for fintechs, operators, and financial institutions.",
  },
];

const stats = [
  { label: "Products", value: "4" },
  { label: "Market layers", value: "3" },
  { label: "Positioning", value: "Consumer + Infra" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 nav-blur">
        <div className="container flex h-18 items-center justify-between py-4">
          <Link href="/" className="text-xl font-semibold tracking-[-0.08em]">
            Zaeux
          </Link>

          <nav className="hidden gap-8 text-sm text-[var(--muted)] md:flex">
            <a href="#why">Why</a>
            <a href="#products">Products</a>
            <a href="#platform">Platform</a>
            <a href="#cta">Launch</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="button-secondary text-sm">
              Preview product
            </Link>
            <a href="#cta" className="button-primary text-sm">
              Join waitlist
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="hero-glow left-[-120px] top-[80px]"
          style={{ background: "#7dd3fc" }}
        />
        <div
          className="hero-glow right-[-100px] top-[140px]"
          style={{ background: "#c4b5fd" }}
        />

        <div className="container grid min-h-[88vh] items-center gap-12 py-18 md:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="badge">
              <Sparkles size={14} />
              Onchain finance, reimagined
            </div>

            <h1 className="mt-6 text-[clamp(54px,9vw,112px)] font-bold leading-[0.92] tracking-[-0.07em]">
              Finance.
              <br />
              Rebuilt.
              <br />
              Owned by you.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Zaeux is the modern financial layer for people, businesses, and
              institutions who want a cleaner system for payments, treasury,
              access, and growth.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#cta" className="button-primary">
                Get early access
              </a>
              <Link href="/dashboard" className="button-secondary">
                See the product shell
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="card rounded-2xl p-5">
                  <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                  <div className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card grid-lines relative overflow-hidden rounded-[32px] p-6 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Zaeux account</div>
                  <div className="mt-1 text-3xl font-semibold tracking-[-0.05em]">
                    $128,420.78
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Wallet size={24} />
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">Reserve yield</div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="stat">4.82%</div>
                    <div className="text-sm text-[var(--success)]">+ $2,184 this year</div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-[var(--muted)]">Payments</div>
                    <div className="mt-2 text-xl font-semibold">Instant global rails</div>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-[var(--muted)]">Membership</div>
                    <div className="mt-2 text-xl font-semibold">Active access</div>
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[var(--muted)]">Capital products</div>
                      <div className="mt-2 text-xl font-semibold">
                        Treasury, credit, tokenized access
                      </div>
                    </div>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Why Zaeux</div>
          <h2 className="section-title mt-5">
            Crypto is fragmented.
            <br />
            Traditional finance is slow.
          </h2>
          <p className="section-copy mt-6 max-w-2xl">
            Zaeux sits between old finance and next-generation rails. It brings a
            premium, structured experience to payments, treasury, and financial
            access without feeling like a chaotic trading terminal.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="card">
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon size={22} />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {pillar.copy}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="products" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Product system</div>
          <h2 className="section-title mt-5">
            One brand.
            <br />
            Multiple revenue engines.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <div key={product.title} className="card min-h-[220px]">
              <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                {product.title}
              </div>
              <div className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                {product.title}
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
                {product.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="container py-20">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="card">
            <Building2 className="mb-4" />
            <h3 className="text-xl font-semibold">Businesses</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Treasury, settlements, and modern financial operations.
            </p>
          </div>

          <div className="card">
            <CreditCard className="mb-4" />
            <h3 className="text-xl font-semibold">Consumers</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A cleaner financial home for balances, movement, and growth.
            </p>
          </div>

          <div className="card">
            <Landmark className="mb-4" />
            <h3 className="text-xl font-semibold">Institutions</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              A future-facing layer for partners who need serious rails.
            </p>
          </div>

          <div className="card">
            <Globe className="mb-4" />
            <h3 className="text-xl font-semibold">Global access</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Borderless movement, digital account logic, and programmable reach.
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="container py-20">
        <div className="card rounded-[36px] p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="badge">Launch with Zaeux</div>
            <h2 className="section-title mt-5">
              Join the early wave before
              <br />
              the full platform goes live.
            </h2>
            <p className="section-copy mt-6 max-w-2xl">
              Start with the brand, the product shell, and the story. Then expand
              into real accounts, real treasury products, and real infrastructure.
            </p>

            <WaitlistForm />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard" className="button-primary">
                Open preview product
              </Link>
              <a href="mailto:hello@zaeux.com" className="button-secondary">
                hello@zaeux.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
