import { z } from "zod";

export const performanceRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "name"),

  email: z
    .string()
    .trim()
    .email("email"),

  phone: z.string().trim().optional(),

  message: z.string().trim().optional(),
});

export type PerformanceRequestInput = z.infer<
  typeof performanceRequestSchema
>;