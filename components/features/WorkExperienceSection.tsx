import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";
import { Briefcase } from "lucide-react";

export default async function WorkExperienceSection() {
  const profile = await fetchProfile();
  const experience = profile.workExperience ?? [];

  if (!experience.length) return null;

  return (
    <Section id="experience" className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300">
          <Briefcase className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-400/90">Work Experience</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Professional Background</h2>
        </div>
      </div>

      <div className="space-y-5">
        {experience.map((item, i) => (
          <Card key={i} variant="glow" className="relative border-slate-800/85 overflow-hidden p-0">
            <div className="exp-timeline-glow" aria-hidden />
            <div className="exp-timeline-line" aria-hidden />
            <div className="relative space-y-5 p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
                  <p className="font-mono text-sm font-medium text-blue-400/90">{item.company}</p>
                  <p className="font-mono text-xs text-slate-500">{item.period}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-300 max-w-2xl">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="space-y-2">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="exp-highlight-item flex items-start gap-3 text-sm text-slate-300">
                      <span className="exp-highlight-dot mt-1.5 shrink-0" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
