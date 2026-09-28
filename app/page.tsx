import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  Clock3,
  CreditCard,
  Globe,
  Landmark,
  Layers3,
  Rocket,
  Sparkles,
  Wallet,
  Wrench,
} from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";

const problemPoints = [
  "Banks and legacy rails are slow, fragmented, and hard to operate across borders.",
  "Most onchain products feel speculative, noisy, and disconnected from serious workflows.",
  "Fintech tools are siloed, so teams lose visibility across payments, treasury, and access.",
  "Businesses need faster account and settlement logic without adopting chaotic crypto UX.",
  "Users need trust, clarity, and a premium front-end for programmable money.",
];

const solutionPoints = [
  "Member-oriented account layer with a single premium financial home.",
  "Product access across Pay, Reserve, Credit, and Core from one shell.",
  "Payments infrastructure for modern money movement and settlement workflows.",
  "Reserve tools and treasury visibility for future allocation workflows.",
  "Credit pathways and infrastructure APIs for operators and partners.",
];

const products = [
  {
    title: "Zaeux Pay",
    copy: "Modern money movement for the onchain economy with cleaner settlement and payment workflows.",
    href: "/pay",
  },
  {
    title: "Zaeux Reserve",
    copy: "Treasury logic for modern balances, reserve workflows, and future allocation tools.",
    href: "/reserve",
  },
  {
    title: "Zaeux Credit",
    copy: "Future capital access infrastructure for structured financial relationships.",
    href: "/credit",
  },
  {
    title: "Zaeux Core",
    copy: "Integration-ready infrastructure for serious operators building on modern financial rails.",
    href: "/core",
  },
];

const audience = [
  {
    icon: CreditCard,
    title: "Consumers",
    copy: "A cleaner financial home for balances, movement, and long-term account logic.",
  },
  {
    icon: Sparkles,
    title: "Creators",
    copy: "A premium account layer for operators who need modern money tools without crypto chaos.",
  },
  {
    icon: Building2,
    title: "Small businesses",
    copy: "Treasury visibility, settlement context, and future payment workflows in one shell.",
  },
  {
    icon: Rocket,
    title: "Startup operators",
    copy: "A credible financial operating layer for internet-native teams moving faster than legacy banks.",
  },
  {
    icon: Wrench,
    title: "Fintech builders",
    copy: "A product narrative and infrastructure path for partners building on programmable money.",
  },
  {
    icon: Landmark,
    title: "Institutions",
    copy: "A future-facing infrastructure layer for partners that need serious rails and structured access.",
  },
];

const whyNow = [
  {
    icon: Layers3,
    title: "Stablecoins are becoming serious rails",
    copy: "Programmable settlement is moving from experiment to infrastructure across payments and treasury.",
  },
  {
    icon: Globe,
    title: "Tokenized assets are expanding",
    copy: "Operators need a trusted interface layer as real-world and onchain financial workflows converge.",
  },
  {
    icon: Clock3,
    title: "Businesses want faster settlement",
    copy: "Teams are looking for account logic and money movement that feels modern, legible, and controllable.",
  },
  {
    icon: Bot,
    title: "Lean infrastructure is easier to build",
    copy: "Automation and modern tooling make it possible to ship premium financial infrastructure with a smaller team.",
  },
];

const previewModules = [
  { label: "Account status", value: "Product preview" },
  { label: "Reserve preview", value: "Treasury logic" },
  { label: "Payments", value: "Early access" },
  { label: "Credit access", value: "Future layer" },
];

const roadmap = [
  "Wallet and account connection",
  "Stablecoin payment workflows",
  "Reserve allocation tooling",
  "Credit access and partner APIs",
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="hero-glow left-[-120px] top-[80px]" style={{ background: "#7dd3fc" }} />
        <div className="hero-glow right-[-100px] top-[140px]" style={{ background: "#c4b5fd" }} />

        <div className="container grid min-h-[88vh] items-center gap-12 py-18 md:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="badge">
              <Sparkles size={14} />
              Premium onchain financial layer
            </div>

            <h1 className="mt-6 text-[clamp(54px,9vw,112px)] font-bold leading-[0.92] tracking-[-0.07em]">
              Finance.
              <br />
              Rebuilt.
              <br />
              Owned by you.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Zaeux is the premium financial layer for people, businesses, and institutions who need a cleaner way to
              access payments, treasury tools, account logic, and future onchain financial products.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#waitlist" className="button-primary">
                Get early access
              </a>
              <Link href="/dashboard" className="button-secondary">
                View dashboard preview
              </Link>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Zaeux is an early product preview and demand-validation layer. It does not currently provide banking,
              lending, securities, or investment products.
            </p>
          </div>

          <div className="relative">
            <div className="card grid-lines relative overflow-hidden rounded-[32px] p-6 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-[var(--muted)]">Zaeux account</div>
                  <div className="mt-1 text-3xl font-semibold tracking-[-0.05em]">Dashboard preview</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Wallet size={24} />
                </div>
              </div>

              <div className="grid gap-4">
                {previewModules.map((module) => (
                  <div key={module.label} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-[var(--muted)]">{module.label}</div>
                    <div className="mt-2 text-xl font-semibold">{module.value}</div>
                  </div>
                ))}

                <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[var(--muted)]">Product access</div>
                      <div className="mt-2 text-xl font-semibold">Pay, Reserve, Credit, Core</div>
                    </div>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Problem</div>
          <h2 className="section-title mt-5">
            Financial systems are fragmented.
            <br />
            Users need trust and clarity.
          </h2>
          <p className="section-copy mt-6 max-w-2xl">
            Legacy finance is slow, crypto interfaces are chaotic, and modern operators still lack a premium account
            layer for programmable money.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemPoints.map((point) => (
            <div key={point} className="card">
              <p className="text-base leading-7 text-[var(--muted)]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solution" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Solution</div>
          <h2 className="section-title mt-5">
            A cleaner financial layer
            <br />
            for the onchain economy.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionPoints.map((point) => (
            <div key={point} className="card">
              <p className="text-base leading-7 text-[var(--muted)]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Product system</div>
          <h2 className="section-title mt-5">
            One brand.
            <br />
            Multiple financial surfaces.
          </h2>
          <p className="section-copy mt-6 max-w-2xl">
            Zaeux starts with account logic and expands into payments, reserve workflows, credit access, and
            infrastructure APIs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="card min-h-[220px] transition-transform hover:-translate-y-1"
            >
              <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{product.title}</div>
              <div className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{product.title}</div>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">{product.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="why-now" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Why now</div>
          <h2 className="section-title mt-5">
            The rails are changing.
            <br />
            The interface layer is still open.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyNow.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card">
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="preview" className="container py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card rounded-[36px] p-8 md:p-12">
            <div className="badge">Dashboard preview</div>
            <h2 className="section-title mt-5">
              A demo-ready account shell
              <br />
              for early members.
            </h2>
            <p className="section-copy mt-6 max-w-2xl">
              Explore account status, reserve preview, transaction activity, product access, and the future roadmap
              inside a premium dashboard shell.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard" className="button-primary" aria-label="Open dashboard preview">
                Open dashboard preview
              </Link>
              <Link href="/login" className="button-secondary">
                Sign in with email
              </Link>
            </div>
          </div>

          <div className="card rounded-[36px] p-8 md:p-12">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Product preview</div>
            <div className="mt-6 grid gap-4">
              {previewModules.map((module) => (
                <div key={module.label} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-[var(--muted)]">{module.label}</div>
                  <div className="mt-2 text-xl font-semibold">{module.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[22px] border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-[var(--muted)]">Future roadmap</div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
                {roadmap.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="audience" className="container py-20">
        <div className="max-w-3xl">
          <div className="badge">Target users</div>
          <h2 className="section-title mt-5">
            Built for operators
            <br />
            across the financial stack.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audience.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card">
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.copy}</p>
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
              Start with the brand, the product shell, and the narrative. Then expand into payments, reserve workflows,
              and infrastructure-grade financial products as they become available.
            </p>
          </div>

          <div className="card rounded-[36px] p-8 md:p-12">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Get early access</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">Request access to Zaeux</h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Tell us who you are, what you operate, and which product surface matters most.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </div>
        </div>
        <div className="container px-0 pb-8">
          <ProductHonestyNote status="demo" />
        </div>
      </section>
    </div>
  );
}
