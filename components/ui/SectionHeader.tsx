import { cn } from "@/lib/utils/classNames";

export type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  kicker,
  title,
  description,
  className
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-2xl space-y-3", className)}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-blue-400/90">
        {kicker}
      </p>
      <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-slate-400 md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
