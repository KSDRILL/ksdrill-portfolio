import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BackgroundImage from "@/components/ui/BackgroundImage";
import Card from "@/components/ui/Card";
import { loadThemeConfig } from "@/lib/config-loader";
import { fetchProfile } from "@/lib/api/portfolio";
import Skeleton from "@/components/ui/Skeleton";
import { lucideFromConfig } from "@/lib/utils/lucide-from-config";
import ProfilePortrait from "@/components/ui/ProfilePortrait";

async function HeroContent() {
  const profile = await fetchProfile();
  const theme = loadThemeConfig();
  const { home } = theme;
  const BadgeIcon = lucideFromConfig(home.heroBadgeLucide);

  return (
    <div className="relative mx-auto flex min-h-0 max-w-6xl flex-col gap-12 px-4 py-12 sm:py-16 md:flex-row md:items-stretch md:py-24 lg:py-28">
      <div className="flex flex-1 flex-col justify-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300/95">
            <BadgeIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {home.heroBadgeLabel}
          </div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-blue-400/90">
            {home.heroKicker}
          </p>
          <div className="h-px w-14 bg-gradient-to-r from-blue-500 via-blue-400/50 to-transparent" />
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl">
            {home.heroHeadline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            {home.heroSubline}
          </p>
          <p className="max-w-xl font-mono text-xs text-slate-500 md:text-sm">
            <span className="text-slate-400">{profile.name}</span>
            <span className="text-slate-600"> · </span>
            <span>{profile.titles.join(" · ")}</span>
          </p>
        </div>

        <dl className="grid max-w-md gap-4 rounded-xl border border-slate-800/90 bg-slate-950/50 p-4 font-mono text-[11px] uppercase tracking-wider text-slate-400 backdrop-blur-sm sm:grid-cols-2">
          <div className="space-y-1">
            <dt className="text-slate-500">{home.heroMetricLabel}</dt>
            <dd className="text-xs font-semibold tracking-wide text-blue-300/95">
              {home.heroMetricValue}
            </dd>
          </div>
          <div className="space-y-1 border-slate-800/80 sm:border-l sm:pl-4">
            <dt className="text-slate-500">ROLE_SURFACE</dt>
            <dd className="text-xs font-semibold tracking-wide text-slate-200">
              {profile.titles.join(" · ")}
            </dd>
          </div>
        </dl>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={home.primaryCtaHref}
              className="motion-safe-transition inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {home.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {home.secondaryCtaLabel && home.secondaryCtaHref ? (
              <Link
                href={home.secondaryCtaHref}
                className="motion-safe-transition inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-600/90 bg-slate-950/40 px-5 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur-sm hover:border-slate-500 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {home.secondaryCtaLabel}
              </Link>
            ) : null}
            {home.tertiaryCtaLabel && home.tertiaryCtaHref ? (
              <Link
                href={home.tertiaryCtaHref}
                className="motion-safe-transition inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-800/90 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {home.tertiaryCtaLabel}
              </Link>
            ) : null}
          </div>
          <span className="font-mono text-[11px] text-slate-500 sm:ml-1">
            {home.heroScrollHint}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-6">
        {profile.portraitSrc ? (
          <ProfilePortrait
            src={profile.portraitSrc}
            alt={profile.portraitAlt ?? profile.name}
            className="md:max-w-[300px] lg:max-w-[320px]"
            priority
          />
        ) : null}
        <Card variant="glow" className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
          />
          <div className="relative space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  {home.heroAsideTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {home.heroAsideBody}
                </p>
              </div>
              <div className="hidden shrink-0 font-mono text-[10px] leading-loose text-slate-600 sm:block">
                <div>│ L1 · Design</div>
                <div>│ L2 · Contracts</div>
                <div>│ L3 · Ship</div>
                <div>└─ Validate</div>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-blue-500/40 via-slate-700 to-transparent" />
            <p className="text-xs leading-relaxed text-slate-500">
              {home.heroFooterNote}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function HomeHero() {
  const theme = loadThemeConfig();

  return (
    <BackgroundImage
      imageDesktop={theme.hero.backgroundImage.desktop}
      imageMobile={theme.hero.backgroundImage.mobile}
      fallback={theme.hero.backgroundImage.fallback}
      alt={theme.hero.backgroundAlt}
      backgroundSize={theme.hero.backgroundSize}
      backgroundPosition={theme.hero.backgroundPosition}
      overlayColor={theme.hero.overlay.color}
      overlayOpacity={theme.hero.overlay.opacity}
      blur={theme.hero.overlay.blur}
      priority
    >
      <div className="hero-mesh pointer-events-none absolute inset-0" />
      <div className="relative">
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-4 py-24">
              <Skeleton className="mb-6 h-10 w-2/3 max-w-md" />
              <Skeleton className="mb-3 h-4 w-full max-w-lg" />
              <Skeleton className="h-4 w-5/6 max-w-md" />
            </div>
          }
        >
          <HeroContent />
        </Suspense>
      </div>
    </BackgroundImage>
  );
}
