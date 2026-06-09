import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  className
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-[0_20px_80px_-20px_rgba(15,118,110,0.65)] hover:-translate-y-0.5 hover:shadow-[0_24px_90px_-24px_rgba(15,118,110,0.75)] dark:shadow-[0_20px_80px_-20px_rgba(45,212,191,0.4)]",
        variant === "secondary" &&
          "border border-border bg-secondary text-secondary-foreground backdrop-blur hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </Link>
  );
}
