"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitted(true);
      setFormData({
        full_name: "",
        email: "",
        company: "",
        interest: "",
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Submission failed");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
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
