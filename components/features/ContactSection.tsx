import Card from "@/components/ui/Card";
import { fetchContactConfig } from "@/lib/api/portfolio";
import { loadThemeConfig } from "@/lib/config-loader";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils/classNames";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const linkBtnBase =
  "motion-safe-transition inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

type ContactSectionProps = {
  variant?: "home" | "page";
};

export default async function ContactSection({
  variant = "home"
}: ContactSectionProps) {
  const contact = await fetchContactConfig();
  const { sections } = loadThemeConfig();
  const copy = sections.contact;

  const channels = [
    {
      key: "email",
      label: "Email",
      description: "Best for specs, timelines, and technical depth.",
      href: `mailto:${contact.primaryEmail}`,
      icon: Mail,
      buttonClass: cn(
        linkBtnBase,
        "bg-blue-600 px-4 py-2.5 text-white shadow-glow-sm hover:bg-blue-500 focus-visible:ring-blue-400"
      ),
      external: false
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      description: "Formal intros and role-aligned conversations.",
      href: contact.linkedinUrl,
      icon: Linkedin,
      buttonClass: cn(
        linkBtnBase,
        "border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-slate-100 hover:border-slate-600 hover:bg-slate-800/80 focus-visible:ring-slate-500"
      ),
      external: true
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      description: "Short pings and scheduling when speed matters.",
      href: contact.whatsappLink,
      icon: MessageCircle,
      buttonClass: cn(
        linkBtnBase,
        "border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-slate-100 hover:bg-slate-800/70 focus-visible:ring-slate-500"
      ),
      external: true
    },
    {
      key: "github",
      label: "GitHub",
      description: "Public activity and org work at a glance.",
      href: contact.githubUrl,
      icon: Github,
      buttonClass: cn(
        linkBtnBase,
        "border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-slate-100 hover:border-slate-600 focus-visible:ring-slate-500"
      ),
      external: true
    }
  ] as const;

  if (variant === "page") {
    return (
      <Section className="space-y-10 pb-6 md:pb-10">
        <SectionHeader
          kicker={copy.kicker}
          title={copy.title}
          description={copy.description}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((ch) => (
            <Card
              key={ch.key}
              variant="glow"
              className="flex flex-col justify-between p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300">
                  <ch.icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">{ch.label}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {ch.description}
                  </p>
                </div>
              </div>
              <a
                href={ch.href}
                className={cn(ch.buttonClass, "mt-6 w-full sm:w-auto sm:self-start")}
                {...(ch.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : undefined)}
              >
                <ch.icon className="h-4 w-4" aria-hidden />
                Open {ch.label}
              </a>
            </Card>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" className="space-y-10 pb-4 md:pb-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          kicker={copy.kicker}
          title={copy.title}
          description={copy.description}
          className="max-w-2xl"
        />
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-700/90 bg-slate-900/60 text-blue-400 md:h-16 md:w-16">
          <Mail className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
        </div>
      </div>
      <Card variant="glow" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md space-y-2">
            <p className="text-sm font-medium text-slate-200">{copy.body}</p>
            {copy.subbody ? (
              <p className="text-xs leading-relaxed text-slate-500">
                {copy.subbody}
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            {channels.map((ch) => (
              <a
                key={ch.key}
                href={ch.href}
                className={cn(ch.buttonClass, "px-4 py-2")}
                {...(ch.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : undefined)}
              >
                <ch.icon className="h-4 w-4" aria-hidden />
                {ch.label}
              </a>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}
