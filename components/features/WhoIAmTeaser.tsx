import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Layers, Zap } from "lucide-react";
import Section from "@/components/ui/Section";
import { fetchProfile } from "@/lib/api/portfolio";

export default function WhoIAmTeaser() {
  const profile = require("@/config/profile.json");

  return (
    <Section id="profile" className="wib-teaser-section space-y-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300">
          <Zap className="h-6 w-6" aria-hidden />
        </div>
        <div className="space-y-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-400/90">
            01 // Profile
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Maluleke Kurhula Success
          </h2>
          <p className="font-mono text-xs text-slate-400">
            {profile.titles.join(" · ")}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-slate-300 max-w-2xl">
        {profile.tagline}
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4 text-center">
          <Briefcase className="mx-auto mb-2 h-5 w-5 text-blue-400" aria-hidden />
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mb-1">Organizations</p>
          <p className="text-sm font-medium text-slate-200">{profile.organizations.length}</p>
          <p className="font-mono text-[10px] text-slate-500 mt-0.5">Founder · Co-founder</p>
        </div>
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4 text-center">
          <GraduationCap className="mx-auto mb-2 h-5 w-5 text-emerald-400" aria-hidden />
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mb-1">Education</p>
          <p className="text-sm font-medium text-slate-200">BSc CS & Math</p>
          <p className="font-mono text-[10px] text-slate-500 mt-0.5">Final Year · NWU</p>
        </div>
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4 text-center">
          <Layers className="mx-auto mb-2 h-5 w-5 text-amber-400" aria-hidden />
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mb-1">Industries</p>
          <p className="text-sm font-medium text-slate-200">{profile.industries.length}+</p>
          <p className="font-mono text-[10px] text-slate-500 mt-0.5">Fintech · Healthcare · More</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/experience" className="wib-cta-secondary">
          Experience <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/education" className="wib-cta-secondary">
          Education <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}