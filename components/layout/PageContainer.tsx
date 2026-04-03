import type { ReactNode } from "react";
import { cn } from "@/lib/utils/classNames";

type PageContainerProps = {
  children?: ReactNode;
  className?: string;
};

export default function PageContainer({
  children,
  className
}: PageContainerProps) {
  return (
    <main
      className={cn(
        "relative mx-auto flex max-w-6xl flex-1 flex-col px-4 py-14 md:py-20",
        className
      )}
    >
      {children}
    </main>
  );
}
