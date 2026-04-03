import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { loadThemeConfig } from "@/lib/config-loader";
import { lucideFromConfig } from "@/lib/utils/lucide-from-config";

export default function HomeNarrativeSection() {
  const { home } = loadThemeConfig();
  const { narrative } = home;
  const NarrativeIcon = lucideFromConfig(narrative.lucideIcon);

  return (
    <Section id="thesis" className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          kicker={narrative.kicker}
          title={narrative.title}
          className="max-w-2xl"
        />
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-700/90 bg-slate-900/60 text-blue-400 md:h-16 md:w-16">
          <NarrativeIcon className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
        </div>
      </div>
      <Card className="relative overflow-hidden border-slate-800/80">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 top-0 h-36 w-36 rounded-full bg-blue-600/10 blur-3xl"
        />
        <div className="relative space-y-5">
          {narrative.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-slate-300 md:text-[15px]"
            >
              {p}
            </p>
          ))}
        </div>
      </Card>
    </Section>
  );
}
