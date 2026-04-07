"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to join waitlist");
      }
      
      setStatus("success");
      setFormData({ full_name: "", email: "", company: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 mt-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Full name
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={formData.full_name}
            onChange={handleChange}
            className="w-full rounded-[16px] border border-white/15 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Alex Johnson"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-[16px] border border-white/15 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="alex@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm mb-2">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-[16px] border border-white/15 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
          placeholder="Acme Inc"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="button-primary mt-4 w-full justify-center"
      >
        {status === "loading" ? "Submitting..." : "Join waitlist"}
      </button>

      {status === "success" && (
        <div className="rounded-[16px] bg-green-900/30 p-4 text-center text-green-300">
          Thank you! We'll be in touch soon.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-[16px] bg-red-900/30 p-4 text-center text-red-300">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}
    </form>
  );
}
