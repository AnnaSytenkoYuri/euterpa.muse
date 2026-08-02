import { z } from "zod";

export const bookingApiSchema = z.object({
  name: z.string().trim().min(2),

  email: z.email(),

  phone: z.string().trim().min(8),

  lessonFormat: z.string(),

  vocalLevel: z.string(),

  lessonTime: z.string(),

  date: z.coerce.date(),

  message: z.string().trim().max(500).optional(),
});

export type BookingApi = z.infer<typeof bookingApiSchema>;