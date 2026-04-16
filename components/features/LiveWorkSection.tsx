import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";
import { ExternalLink } from "lucide-react";

export default async function LiveWorkSection() {
  const profile = await fetchProfile();
  const items = profile.liveWork ?? [];

  return (
    <Section id="live-work" className="space-y-6">
      <div className="space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-400/90">
          Live Work
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Source code and deployed projects.
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <Card key={i} variant="glow" className="group border-slate-800/85 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-100">{item.name}</h3>
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-blue-400" aria-hidden />
              </div>
              <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-blue-400/90 hover:text-blue-300"
              >
                {item.url.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
