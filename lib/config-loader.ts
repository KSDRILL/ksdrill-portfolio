import fs from "node:fs";
import path from "node:path";
import {
  ApiConfigSchema,
  FeaturesConfigSchema,
  NavigationConfigSchema,
  ProfileSchema,
  FlagshipSystemsConfigSchema,
  TechStackConfigSchema,
  ContactConfigSchema,
  ThemeConfigSchema,
  type ApiConfig,
  type FeaturesConfig,
  type NavigationConfig,
  type Profile,
  type FlagshipSystemsConfig,
  type TechStackConfig,
  type ContactConfig,
  type ThemeConfig
} from "@/types/config";

const rootDir = process.cwd();

function readJson(filePath: string): unknown {
  const absolute = path.join(rootDir, filePath);
  const raw = fs.readFileSync(absolute, "utf-8");
  return JSON.parse(raw);
}

export function loadProfile(): Profile {
  const data = readJson("config/profile.json");
  return ProfileSchema.parse(data);
}

export function loadFlagshipSystems(): FlagshipSystemsConfig {
  const data = readJson("config/flagship-systems.json");
  return FlagshipSystemsConfigSchema.parse(data);
}

export function loadTechStack(): TechStackConfig {
  const data = readJson("config/tech-stack.json");
  return TechStackConfigSchema.parse(data);
}

export function loadContactConfig(): ContactConfig {
  const data = readJson("config/contact.json");
  return ContactConfigSchema.parse(data);
}

export function loadNavigationConfig(): NavigationConfig {
  const data = readJson("config/navigation.json");
  return NavigationConfigSchema.parse(data);
}

export function loadThemeConfig(): ThemeConfig {
  const data = readJson("config/theme.json");
  return ThemeConfigSchema.parse(data);
}

export function loadFeaturesConfig(): FeaturesConfig {
  const data = readJson("config/features.json");
  return FeaturesConfigSchema.parse(data);
}

export function loadApiConfig(): ApiConfig {
  const data = readJson("config/api-config.json");
  return ApiConfigSchema.parse(data);
}

