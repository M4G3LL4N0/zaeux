import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2.5 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-white text-black hover:bg-white/90",
        variant === "secondary" &&
          "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        variant === "ghost" &&
          "bg-transparent text-white/75 hover:bg-white/5 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
