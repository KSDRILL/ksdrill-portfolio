import Link from "next/link";
import { loadNavigationConfig, loadProfile } from "@/lib/config-loader";
import { cn } from "@/lib/utils/classNames";
import { Home, Layers, Cpu, Mail } from "lucide-react";

const iconMap = {
  home: Home,
  layers: Layers,
  cpu: Cpu,
  mail: Mail
} as const;

export default function Header() {
  const nav = loadNavigationConfig();
  const profile = loadProfile();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-slate-950/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-glow-sm ring-1 ring-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_45%)]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-100 transition-colors group-hover:text-white">
              {profile.name}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {profile.titles.join(" · ")}
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          {nav.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "motion-safe-transition flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-400 hover:bg-white/[0.04] hover:text-slate-100 sm:text-sm",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                )}
              >
                {Icon ? <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : null}
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
