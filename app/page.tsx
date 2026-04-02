import Link from "next/link";
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
import { WaitlistForm } from "@/components/WaitlistForm";

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
    copy:
      "Move money globally with stable digital rails and a cleaner payments interface.",
    href: "/pay",
  },
  {
    title: "Zaeux Reserve",
    copy:
      "Treasury-style balance management for users and businesses that want more than idle cash.",
    href: "/reserve",
  },
  {
    title: "Zaeux Credit",
    copy:
      "The future lending layer for member access, capital pools, and programmable credit products.",
    href: "/credit",
  },
  {
    title: "Zaeux Core",
    copy:
      "Infrastructure APIs and ledger systems for fintechs, operators, and financial institutions.",
    href: "/core",
  },
];

const audience = [
  {
    icon: CreditCard,
    title: "Consumers",
    copy:
      "A cleaner financial home for balances, movement, and long-term account logic.",
  },
  {
    icon: Building2,
    title: "Businesses",
    copy:
      "Treasury, settlement, and financial operations built for modern internet-native companies.",
  },
  {
    icon: Landmark,
    title: "Institutions",
    copy:
      "A future-facing infrastructure layer for partners that need serious rails and structured access.",
  },
  {
    icon: Globe,
    title: "Global operators",
    copy:
      "Borderless money movement, digital account logic, and programmable access across markets.",
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
              <a href="#waitlist" className="button-primary">
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
                    <div className="text-sm text-[var(--success)]">
                      + $2,184 this year
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-[var(--muted)]">Payments</div>
                    <div className="mt-2 text-xl font-semibold">
                      Instant global rails
                    </div>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-[var(--muted)]">Membership</div>
                    <div className="mt-2 text-xl font-semibold">Active access</div>
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[var(--muted)]">
                        Capital products
                      </div>
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
            <Link
              key={product.title}
              href={product.href}
              className="card min-h-[220px] transition-transform hover:-translate-y-1"
            >
              <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                {product.title}
              </div>
              <div className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                {product.title}
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
                {product.copy}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="audience" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Built for</div>
          <h2 className="section-title mt-5">
            A financial layer designed for
            <br />
            serious operators.
          </h2>
          <p className="section-copy mt-6 max-w-2xl">
            Zaeux is built for people who want cleaner financial infrastructure,
            better treasury logic, and a more modern foundation than siloed apps
            and aging systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audience.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card">
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {item.copy}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="waitlist" className="container py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card rounded-[36px] p-8 md:p-12">
            <div className="badge">Early access</div>
            <h2 className="section-title mt-5">
              Join the early wave before
              <br />
              the full platform goes live.
            </h2>
            <p className="section-copy mt-6 max-w-2xl">
              Start with the brand, the product shell, and the story. Then expand
              into real accounts, real treasury products, and real infrastructure.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard" className="button-primary">
                Open preview product
              </Link>
              <a href="mailto:hello@zaeux.com" className="button-secondary">
                hello@zaeux.com
              </a>
            </div>
          </div>

          <div className="card rounded-[36px] p-8 md:p-12">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Get early access
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Request access to Zaeux
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Tell us who you are and what you want from the platform.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
