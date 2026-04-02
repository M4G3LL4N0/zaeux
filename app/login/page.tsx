import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="card rounded-[36px] p-8 md:p-12">
            <div className="badge">Zaeux access</div>
            <h1 className="section-title mt-5">
              Sign in to access
              <br />
              your financial layer.
            </h1>
            <p className="section-copy mt-6 max-w-2xl">
              Use your email to access the Zaeux dashboard, accounts, and
              activity. Keep it simple, fast, and structured.
            </p>
          </div>

          <div className="card rounded-[36px] p-8 md:p-12">
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              Continue
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Login
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Enter your email and we’ll send you a secure sign-in link.
            </p>
            <div className="mt-8">
              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
