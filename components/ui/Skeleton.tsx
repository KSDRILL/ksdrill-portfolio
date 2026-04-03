import { cn } from "@/lib/utils/classNames";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-800/60",
        className
      )}
    />
  );
}

