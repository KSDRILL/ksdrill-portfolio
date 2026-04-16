import Section from "@/components/ui/Section";
import { Scale, HeartPulse, Building2, GraduationCap, Landmark, ShoppingCart, Plus } from "lucide-react";

const INDUSTRIES = [
  {
    name: "Fintech",
    Icon: Scale,
    color: "#3B82F6",
    desc: "Payment systems, digital banking, microfinance, and compliance-ready platforms.",
  },
  {
    name: "Healthcare",
    Icon: HeartPulse,
    color: "#10B981",
    desc: "Patient management, telemedicine, and health data integrations.",
  },
  {
    name: "Enterprise SaaS",
    Icon: Building2,
    color: "#8B5CF6",
    desc: "Multi-tenant platforms, role-based access, and scalable API-first products.",
  },
  {
    name: "EdTech",
    Icon: GraduationCap,
    color: "#F59E0B",
    desc: "E-learning systems, student tracking, and AI-assisted learning tools.",
  },
  {
    name: "GovTech",
    Icon: Landmark,
    color: "#6366F1",
    desc: "Digital governance, service delivery, and transparent community platforms.",
  },
  {
    name: "E-commerce",
    Icon: ShoppingCart,
    color: "#EF4444",
    desc: "Storefronts, inventory management, and payment gateway integrations.",
  },
];

export default function WhatIBuildSection() {
  return (
    <Section id="what-i-build" className="what-i-build-section scroll-mt-28">
      <div className="what-i-build-inner">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-blue-400/90">
              01 // What I Build
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
            <h2 className="what-i-build-heading">
              Industry depth,<br className="hidden sm:block" /> not just breadth.
            </h2>
            <p className="what-i-build-subheading">
              Six domains where I&apos;ve shipped production systems. Each one taught me something different about scale, regulation, and users.
            </p>
          </div>
        </div>

        <div className="what-i-build-grid">
          {INDUSTRIES.map(({ name, Icon, color, desc }) => (
            <div key={name} className="industry-card group" title={desc}>
              <div className="industry-icon-wrap">
                <Icon
                  className="h-5 w-5"
                  style={{ color }}
                  aria-hidden
                />
              </div>
              <p className="industry-name">{name}</p>
            </div>
          ))}

          <div className="industry-card-more" title="Contact me for other industries">
            <div className="industry-card-more-icon">
              <Plus className="h-4 w-4" aria-hidden />
            </div>
            <p className="industry-card-more-text">More domains</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
