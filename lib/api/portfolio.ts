import { z } from "zod";
import {
  ProfileSchema,
  FlagshipSystemsConfigSchema,
  TechStackConfigSchema,
  ContactConfigSchema,
  type Profile,
  type FlagshipSystemsConfig,
  type TechStackConfig,
  type ContactConfig
} from "@/types/config";
import {
  loadProfile,
  loadFlagshipSystems,
  loadTechStack,
  loadContactConfig
} from "@/lib/config-loader";

// Schemas model the response shape as if from an API
const ProfileResponseSchema = ProfileSchema;
const FlagshipSystemsResponseSchema = FlagshipSystemsConfigSchema;
const TechStackResponseSchema = TechStackConfigSchema;
const ContactResponseSchema = ContactConfigSchema;

export async function fetchProfile(): Promise<Profile> {
  const data = loadProfile();
  return ProfileResponseSchema.parse(data);
}

export async function fetchFlagshipSystems(): Promise<FlagshipSystemsConfig> {
  const data = loadFlagshipSystems();
  return FlagshipSystemsResponseSchema.parse(data);
}

export async function fetchTechStack(): Promise<TechStackConfig> {
  const data = loadTechStack();
  return TechStackResponseSchema.parse(data);
}

export async function fetchContactConfig(): Promise<ContactConfig> {
  const data = loadContactConfig();
  return ContactResponseSchema.parse(data);
}

