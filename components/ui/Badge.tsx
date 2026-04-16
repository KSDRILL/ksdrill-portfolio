import { cn } from "@/lib/utils/classNames";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "status" | "phase";
};

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  if (variant === "phase") {
    return (
      <span className={cn("badge-phase", className)}>
        {children}
      </span>
    );
  }
  if (variant === "status") {
    return (
      <span className={cn("badge-status", className)}>
        {children}
      </span>
    );
  }
  return (
    <span className={cn("badge-default", className)}>
      {children}
    </span>
  );
}
