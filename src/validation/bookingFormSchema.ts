import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 characters"),

  email: z.email("Please enter a valid email"),
  phone: z.string().trim().min(8, "Please enter a valid phone number"),

  lessonFormat: z.string().min(1, "Please select a lesson format"),

  vocalLevel: z.string().min(1, "Please select your vocal level"),
  lessonTime: z.string().min(1, "Please select a lesson time"),

  date: z
    .date()
    .nullable()
    .refine((value) => value !== null, {
      message: "Please select a lesson date",
    }),
  message: z.string().trim().max(500, "Message is too long").optional(),
});

// export type BookingFormValues = z.infer<typeof bookingSchema>;

export type BookingFormInput = z.input<typeof bookingSchema>;
export type BookingFormOutput = z.output<typeof bookingSchema>;
