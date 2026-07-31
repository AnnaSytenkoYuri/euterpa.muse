import { bookingSchema } from "@/components/BookingForm/validation";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const booking = bookingSchema.parse(body);

    
    const {error} = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "anna_sytenko91@icloud.com",
        subject: "New booking request",
        text: `
      Name: ${booking.name}
      
      Email: ${booking.email}
      
      Phone: ${booking.phone}
      
      Lesson format: ${booking.lessonFormat}
      
      Vocal level: ${booking.vocalLevel}
      
      Date: ${booking.date.toLocaleDateString()}
      
      Time: ${booking.lessonTime}
      
      Message:
      ${booking.message ?? "-"}
      `,
      });

      if (error) {
        console.error(error);
      
        return NextResponse.json(
          {
            success: false,
            message: "Failed to send email.",
          },
          {
            status: 500,
          }
        );
      }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
        console.error(error);
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking data.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
