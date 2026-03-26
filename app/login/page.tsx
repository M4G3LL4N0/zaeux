import { AuthForm } from "@/components/AuthForm";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[400px] rounded-[32px] border border-white/10 bg-black/50 p-8 backdrop-blur-md">
        <h1 className="text-center text-2xl font-semibold">Welcome to Zaeux</h1>
        <p className="mt-2 text-center text-sm text-[var(--muted)]">
          Enter your email to continue
        </p>
        <AuthForm />
      </div>
    </div>
  );
}
