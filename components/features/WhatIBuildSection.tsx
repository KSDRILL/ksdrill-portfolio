import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";

export default async function WhatIBuildSection() {
  const profile = await fetchProfile();
  const industries = profile.industries ?? [];
  const whatICanBuild = profile.whatICanBuild ?? "Scalable full-stack systems integrated with AI — across every industry.";

  return (
    <Section id="what-i-build" className="space-y-6">
      <div className="space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-400/90">What I Build</p>
        <h2 className="what-i-build-heading">{whatICanBuild}</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry: string) => (
          <Card key={industry} className="industry-card border-slate-800/80 p-4 text-center">
            <span className="text-sm font-medium text-slate-200">{industry}</span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
