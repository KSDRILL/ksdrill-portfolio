import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";
import { GraduationCap, Award } from "lucide-react";

export default async function EducationSection() {
  const profile = await fetchProfile();
  const edu = profile.education;

  if (!edu) return null;

  return (
    <Section id="education" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-300">
          <GraduationCap className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-400/90">Education</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Academic Background</h2>
        </div>
      </div>

      <Card variant="glow" className="edu-card border-slate-800/85 overflow-hidden">
        <div className="edu-glow" aria-hidden />
        <div className="edu-marks-decoration" aria-hidden>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="edu-content relative space-y-4 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
              <Award className="h-6 w-6" aria-hidden />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-slate-100">{edu.degree}</h3>
              <p className="font-mono text-sm font-medium text-emerald-400/90">{edu.institution}</p>
              <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-300/95">
                {edu.status}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
