"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="mt-6 space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input-primary w-full"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full"
        variant="primary"
      >
        {loading ? "Sending..." : "Continue"}
      </Button>
      {message && <p className="text-center text-sm">{message}</p>}
    </form>
  );
}
