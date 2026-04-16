import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BackgroundImage from "@/components/ui/BackgroundImage";
import Card from "@/components/ui/Card";
import { loadThemeConfig } from "@/lib/config-loader";
import { fetchProfile } from "@/lib/api/portfolio";
import ProfilePortrait from "@/components/ui/ProfilePortrait";

async function HeroContent() {
  const profile = await fetchProfile();
  const theme = loadThemeConfig();
  const { home } = theme;

  return (
    <div className="relative mx-auto flex min-h-0 max-w-6xl flex-col gap-10 px-4 py-16 sm:py-20 md:flex-row md:items-stretch md:py-24 lg:py-28">
      <div className="flex flex-1 flex-col justify-center space-y-8">
        <div className="space-y-5">
          {profile.openToWork && (
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/95">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {profile.openToWorkLabel}
            </div>
          )}
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="max-w-xl font-mono text-sm font-medium uppercase tracking-wider text-blue-400/90 md:text-base">
            {profile.titles.join(" · ")}
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            {profile.tagline}
          </p>
          <p className="max-w-xl font-mono text-xs text-slate-500 md:text-sm">
            {profile.location}
          </p>
        </div>

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
                className="motion-safe-transition inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-600/90 bg-slate-950/40 px-5 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur-sm hover:border-slate-500 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {home.secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {profile.socialLinks.map((link) => {
            const label = link.type === "email" ? "Email Me" : link.type === "github" ? "GitHub" : link.type === "linkedin" ? "LinkedIn" : link.type === "whatsapp" ? "WhatsApp" : link.label;
            return (
              <a
                key={link.type}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                className="motion-safe-transition inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-700/80 bg-slate-950/40 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-sm hover:border-slate-500 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-6">
        {profile.portraitSrc ? (
          <ProfilePortrait
            src={profile.portraitSrc}
            alt={profile.portraitAlt ?? profile.name}
            className="md:max-w-[280px] lg:max-w-[300px]"
            priority
          />
        ) : null}
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
        <HeroContent />
      </div>
    </BackgroundImage>
  );
}
