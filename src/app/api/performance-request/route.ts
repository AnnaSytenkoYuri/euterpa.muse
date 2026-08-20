import { NextResponse } from "next/server";

import { performanceRequestSchema } from "@/validation/performanceRequestSchema";
import { resend } from "@/lib/resend";
import { PerformanceRequestEmail } from "@/emails/PerformanceRequestEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = performanceRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
        },
        { status: 400 }
      );
    }

    const requestData = result.data;

    const email = PerformanceRequestEmail({ request: requestData });

    const { data, error } = await resend.emails.send({
      from: "Euterpa <onboarding@resend.dev>",
      to: "anna_sytenko91@icloud.com",
      subject: `New performance request from ${requestData.name}`,
      react: email,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    console.log("Resend data:", data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Performance request error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}