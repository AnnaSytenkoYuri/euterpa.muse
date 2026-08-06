import { NextResponse } from "next/server";
import { bookingApiSchema } from "@/validation/bookingApiSchema";
import { resend } from "@/lib/resend";
import { BookingEmail } from "@/emails/BookingEmail";

export async function POST(request: Request) {
  const body = await request.json();
  const result = bookingApiSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid booking data.",
      },
      { status: 400 }
    );
  }

  const booking = result.data;
  const email = <BookingEmail booking={booking} />;

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anna_sytenko91@icloud.com",
      subject: `🎤 New booking from ${booking.name}`,
      react: email,
    });
    console.log("Resend data:", data);
    console.log("Resend error:", error);

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
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
