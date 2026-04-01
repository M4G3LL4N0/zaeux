"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error: authError } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          shouldCreateUser: false // Only allow existing users
        },
      });

      if (authError) throw authError;
      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error 
          ? err.message 
          : "Could not send login link. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          className="input-primary w-full"
          disabled={isLoading || success}
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading || success}
        className="button-primary w-full hover:bg-[var(--accent)]/90 transition-colors"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : success ? (
          "Login Link Sent"
        ) : (
          "Continue with Email"
        )}
      </button>

      {error && (
        <div className="rounded-xl bg-red-500/10 p-3 text-center text-sm text-red-300">
          {error}
        </div>
      )}
      {success && (
        <div className="rounded-xl bg-[var(--success)]/10 p-3 text-center text-sm text-[var(--success)]">
          Check your email for the login link
        </div>
      )}
    </form>
  );
}
