import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="card w-full max-w-md rounded-[32px] p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] bg-clip-text text-transparent">
            Welcome to Zaeux
          </h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Enter your email to access the future of finance
          </p>
        </div>
        <AuthForm />
        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          By continuing, you agree to our{" "}
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
  );
}
