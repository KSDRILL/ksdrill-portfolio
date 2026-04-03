import type { ReactNode } from "react";
import { cn } from "@/lib/utils/classNames";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-28", className)}>
      {children}
    </section>
  );
}
