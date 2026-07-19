import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 characters"),

  email: z.email("Please enter a valid email"),
  phone: z.string().trim().min(8, "Please enter a valid phone number"),

  lessonFormat: z.string().min(1, "Please select a lesson format"),

  vocalLevel: z.string().min(1, "Please select your vocal level"),

  date: z.string().optional(),

  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
