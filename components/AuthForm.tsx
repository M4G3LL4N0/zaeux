"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

type AuthFormProps = {
  className?: string;
};

export function AuthForm({ className }: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Email is required.");
      return;
    }

    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const redirectTo =
        typeof window !== "undefined"
          ? `${window.location.origin}/dashboard`
          : undefined;

      const { error: signInError } = await supabase.auth.signInWithOtp({
        email: normalizedEmail,
        options: {
          emailRedirectTo: redirectTo,
        },
      });

      if (signInError) {
        throw signInError;
      }

      setIsSuccess(true);
      setEmail("");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send magic link.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={cn("space-y-4", className)} onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-[var(--foreground)]"
        >
          Email address
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <Mail className="h-4 w-4 text-[var(--muted)]" />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[var(--muted)]"
            disabled={isLoading}
          />
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      {isSuccess ? (
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Magic link sent. Check your email to continue.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending magic link...
          </>
        ) : (
          "Send magic link"
        )}
      </button>
    </form>
  );
}
