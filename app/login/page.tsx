import { AuthForm } from "@/components/auth-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="card w-full max-w-md rounded-[32px] p-8 border border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] bg-clip-text text-transparent">
            Welcome to Zaeux
          </h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Secure access to the future of finance
          </p>
        </div>
        <AuthForm />
        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
  );
}
