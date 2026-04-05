import {
  ApiConfigSchema,
  FeaturesConfigSchema,
  NavigationConfigSchema,
  ProfileSchema,
  FlagshipSystemsConfigSchema,
  TechStackConfigSchema,
  ContactConfigSchema,
  ThemeConfigSchema,
  MethodologyConfigSchema,
  CapabilitiesConfigSchema,
  type ApiConfig,
  type FeaturesConfig,
  type NavigationConfig,
  type Profile,
  type FlagshipSystemsConfig,
  type TechStackConfig,
  type ContactConfig,
  type ThemeConfig,
  type MethodologyConfig,
  type CapabilitiesConfig
} from "@/types/config";
import apiConfigJson from "@/config/api-config.json";
import capabilitiesJson from "@/config/capabilities.json";
import contactJson from "@/config/contact.json";
import featuresJson from "@/config/features.json";
import flagshipSystemsJson from "@/config/flagship-systems.json";
import methodologyJson from "@/config/methodology.json";
import navigationJson from "@/config/navigation.json";
import profileJson from "@/config/profile.json";
import techStackJson from "@/config/tech-stack.json";
import themeJson from "@/config/theme.json";

export function loadProfile(): Profile {
  return ProfileSchema.parse(profileJson);
}

export function loadFlagshipSystems(): FlagshipSystemsConfig {
  return FlagshipSystemsConfigSchema.parse(flagshipSystemsJson);
}

export function loadTechStack(): TechStackConfig {
  return TechStackConfigSchema.parse(techStackJson);
}

export function loadContactConfig(): ContactConfig {
  return ContactConfigSchema.parse(contactJson);
}

export function loadNavigationConfig(): NavigationConfig {
  return NavigationConfigSchema.parse(navigationJson);
}

export function loadThemeConfig(): ThemeConfig {
  return ThemeConfigSchema.parse(themeJson);
}

export function loadFeaturesConfig(): FeaturesConfig {
  return FeaturesConfigSchema.parse(featuresJson);
}

export function loadApiConfig(): ApiConfig {
  return ApiConfigSchema.parse(apiConfigJson);
}

export function loadMethodologyConfig(): MethodologyConfig {
  return MethodologyConfigSchema.parse(methodologyJson);
}

export function loadCapabilitiesConfig(): CapabilitiesConfig {
  return CapabilitiesConfigSchema.parse(capabilitiesJson);
}
