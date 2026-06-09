import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}
