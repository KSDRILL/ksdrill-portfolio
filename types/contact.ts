import { z } from "zod";

export const ContactRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message is too long.")
});

export type ContactRequest = z.infer<typeof ContactRequestSchema>;

const fieldErrorsSchema = z.record(z.array(z.string()));

export const ContactErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  fieldErrors: fieldErrorsSchema.optional()
});

export const ContactSuccessResponseSchema = z.object({
  success: z.literal(true),
  message: z.string()
});

export type ContactSuccessResponse = z.infer<typeof ContactSuccessResponseSchema>;
