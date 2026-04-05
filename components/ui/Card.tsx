import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/classNames";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "glow";
};

export default function Card({
  className,
  children,
  variant = "default",
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={cn(
        "rounded-2xl border border-slate-800/90 bg-slate-950/55 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-sm motion-safe-hover-lift",
        variant === "glow" &&
          "border-blue-500/25 shadow-glow-sm hover:border-blue-400/40 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}

