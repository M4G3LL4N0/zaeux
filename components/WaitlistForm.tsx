"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    interest: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.email) {
      setError("Name and email are required");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          full_name: formData.full_name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          interest: formData.interest
        }),
      });

      if (!response.ok) {
        throw new Error(
          response.status === 400 
            ? "Invalid input - please check your details"
            : "Failed to join waitlist"
        );
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error 
          ? err.message 
          : "Couldn't submit form. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-[var(--success)]/10 p-6">
        <div className="flex items-center gap-3">
          <Check className="h-5 w-5 flex-shrink-0 text-[var(--success)]" />
          <div>
            <h3 className="text-lg font-medium">
              Thank you for joining the waitlist
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              We'll be in touch soon with updates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
          }
          placeholder="Full Name"
          className="input-primary w-full"
          required
          minLength={2}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email Address"
          className="input-primary w-full"
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Company (optional)"
          className="input-primary w-full"
        />
        <select
          name="interest"
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="input-primary w-full bg-black/50"
        >
          <option value="">Select your interest (optional)</option>
          <option value="consumer">Consumer Products</option>
          <option value="business">Business Solutions</option>
          <option value="institutional">Institutional Services</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="button-primary w-full"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          "Join Waitlist"
        )}
      </button>
      {submitted && (
        <div className="mt-4 rounded-lg bg-[var(--success)]/10 p-4 text-center text-sm text-[var(--success)]">
          Thank you! We've received your information and will be in touch soon.
        </div>
      )}
      {error && (
        <div className="mt-4 rounded-lg bg-red-500/10 p-4 text-center text-sm text-red-300">
          {error}
        </div>
      )}
    </form>
  );
}
