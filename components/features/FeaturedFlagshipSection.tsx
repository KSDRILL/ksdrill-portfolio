import Link from "next/link";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { loadThemeConfig } from "@/lib/config-loader";
import { fetchFlagshipSystems } from "@/lib/api/portfolio";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";

export default async function FeaturedFlagshipSection() {
  const theme = loadThemeConfig();
  const f = theme.home.featuredFlagship;
  const { systems } = await fetchFlagshipSystems();
  const exists = systems.some((s) => s.id === f.systemId);

  return (
    <Section className="space-y-8">
      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-400/90">
          {f.kicker}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          {f.headline}
        </h2>
      </div>

      <Card variant="glow" className="overflow-hidden border-slate-800/90 p-0">
        <div className="grid gap-0 md:grid-cols-[1fr_minmax(0,280px)]">
          <div className="space-y-6 p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="mb-2 flex items-center gap-2 text-blue-400/90">
                  <Target className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Problem
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{f.problem}</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-blue-400/90">
                  <Lightbulb className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Solution
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{f.solution}</p>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-emerald-400/90">
                <TrendingUp className="h-4 w-4 shrink-0" aria-hidden />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Result
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{f.result}</p>
            </div>
            {exists ? (
              <Link
                href={`/flagship/${f.systemId}`}
                className="motion-safe-transition inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {f.ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            ) : null}
          </div>
          <div className="border-t border-slate-800/80 bg-slate-950/50 p-6 font-mono text-[10px] leading-relaxed text-slate-500 md:border-l md:border-t-0">
            <p className="uppercase tracking-[0.2em] text-slate-600">Evidence</p>
            <p className="mt-3 text-slate-400">
              Architecture diagram, expanded narrative, and stack on the dedicated case study route — built to match how senior reviewers actually read portfolios.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
