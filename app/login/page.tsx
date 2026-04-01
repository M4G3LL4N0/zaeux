import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="card w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Enter your email to access Zaeux
          </p>
        </div>
        <AuthForm />
      </div>
  );
}
