"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
        variant === "primary" && 
          "bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90",
        variant === "secondary" &&
          "border border-white/10 bg-white/5 hover:bg-white/10",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
