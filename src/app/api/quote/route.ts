import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In production, save to database or send email notification.
    // For now, we simulate a successful submission.
    console.log("Quote request received:", {
      name,
      email,
      phone,
      service,
      message,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your inquiry! Our team will contact you within 24 hours to discuss your dream pool.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }
}
