import Link from "next/link";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { loadThemeConfig } from "@/lib/config-loader";
import { fetchFlagshipSystems } from "@/lib/api/portfolio";
import { ArrowRight, Target, Lightbulb, TrendingUp, ArrowUpRight } from "lucide-react";

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

      <Card variant="glow" className="featured-flagship-card overflow-hidden border-slate-800/90 p-0">
        <div className="featured-flagship-top-line" aria-hidden />
        <div className="featured-flagship-glow" aria-hidden />
        <div className="featured-flagship-content relative">
          <div className="grid gap-0 md:grid-cols-[1fr_minmax(0,280px)]">
            <div className="space-y-6 p-6 md:p-8">
              <div className="featured-problem-solution-grid">
                <div className="featured-problem-card">
                  <div className="featured-card-label">
                    <Target className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">Problem</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{f.problem}</p>
                </div>
                <div className="featured-solution-card">
                  <div className="featured-card-label">
                    <Lightbulb className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">Solution</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{f.solution}</p>
                </div>
              </div>
              <div className="featured-result">
                <div className="featured-card-label">
                  <TrendingUp className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400/90">Impact</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{f.result}</p>
              </div>
              {exists ? (
                <Link
                  href={`/flagship/${f.systemId}`}
                  className="featured-cta"
                >
                  {f.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              ) : null}
            </div>
            <div className="featured-evidence-panel">
              <p className="evidence-label">Evidence</p>
              <div className="evidence-divider" />
              <p className="evidence-body">
                Architecture diagram, expanded narrative, and stack on the dedicated case study route — built to match how senior reviewers actually read portfolios.
              </p>
              <div className="evidence-link-row">
                <span className="evidence-link-text">Open case study</span>
                <ArrowUpRight className="h-4 w-4 evidence-arrow" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
