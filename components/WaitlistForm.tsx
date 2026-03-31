"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }
      
      setSubmitted(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Submission failed");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input-primary flex-1"
          required
        />
        <button type="submit" className="button-primary">
          Join Waitlist
        </button>
      </div>
      {submitted && (
        <div className="mt-4 text-sm text-[var(--success)]">
          Thanks! We'll be in touch soon.
        </div>
      )}
      {error && (
        <div className="mt-4 text-sm text-red-300">
          {error}
        </div>
      )}
    </form>
  );
}
