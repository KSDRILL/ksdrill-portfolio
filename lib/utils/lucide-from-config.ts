import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Home,
  Landmark,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  PiggyBank,
  Radio,
  Server,
  Sparkles,
  Target,
  User,
  Users2
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Home,
  Landmark,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  PiggyBank,
  Radio,
  Server,
  Sparkles,
  Target,
  User,
  Users2
};

export function lucideFromConfig(name: string): LucideIcon {
  const Icon = ICONS[name];
  return Icon ?? Layers;
}

export function statusLucideIcon(status: string): LucideIcon {
  if (status === "active-development") return Activity;
  if (status === "design-complete") return CheckCircle2;
  return CircleDashed;
}
