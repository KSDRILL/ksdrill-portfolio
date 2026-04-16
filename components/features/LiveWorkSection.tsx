import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";
import { ExternalLink, Globe, Github } from "lucide-react";

export default async function LiveWorkSection() {
  const profile = await fetchProfile();
  const items = profile.liveWork ?? [];

  return (
    <Section id="live-work" className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300">
          <Globe className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-400/90">Live Work</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Source code and deployed projects.</h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => {
          const Icon = (item.url.includes("github") ? Github : Globe);
          return (
            <Card key={i} variant="glow" className="live-work-card group border-slate-800/85 overflow-hidden p-0">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="live-work-card-inner block relative p-5"
              >
                <div className="live-work-glow" aria-hidden />
                <div className="live-work-icon-row">
                  <div className="live-work-icon">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <ExternalLink className="live-work-arrow h-4 w-4" aria-hidden />
                </div>
                <div className="relative space-y-2 pt-2">
                  <h3 className="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">{item.name}</h3>
                  <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
                  <span className="live-work-url">{item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                </div>
              </a>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
