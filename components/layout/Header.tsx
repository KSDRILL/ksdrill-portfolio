import Link from "next/link";
import { loadNavigationConfig, loadProfile } from "@/lib/config-loader";
import { cn } from "@/lib/utils/classNames";
import { BookOpen, Cpu, Home, Layers, Mail } from "lucide-react";

const iconMap = {
  home: Home,
  bookOpen: BookOpen,
  layers: Layers,
  cpu: Cpu,
  mail: Mail
} as const;

const navLinkClass = cn(
  "motion-safe-transition flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-400 hover:bg-white/[0.04] hover:text-slate-100 sm:px-2.5 sm:py-2 sm:text-sm",
  "min-h-[44px] min-w-[44px] justify-center sm:min-w-0 sm:justify-start",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
);

export default function Header() {
  const nav = loadNavigationConfig();
  const profile = loadProfile();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link
          href="/"
          className="group flex min-h-[44px] min-w-0 shrink-0 items-center gap-2"
        >
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-glow-sm ring-1 ring-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_45%)]" />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-white/90">
              K
            </span>
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold leading-tight text-slate-100 transition-colors group-hover:text-white sm:text-base">
              {profile.name}
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:block">
              {profile.titles.join(" · ")}
            </div>
          </div>
        </Link>
        <nav
          className="-mr-1 flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto overscroll-x-contain py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mr-0 sm:justify-end [&::-webkit-scrollbar]:hidden]"
          aria-label="Primary"
        >
          <ul className="flex w-max items-center gap-0.5 pr-1 sm:gap-1">
            {nav.items.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <li key={item.id}>
                  <Link href={item.href} className={navLinkClass}>
                    {Icon ? (
                      <Icon
                        className="h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5"
                        aria-hidden
                      />
                    ) : null}
                    <span className="max-w-[7.5rem] truncate sm:max-w-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
