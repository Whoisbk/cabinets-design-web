import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, service, message } =
      await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 2. Send email notification using EmailJS
    try {
      const emailResponse = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID || "service_s6zpjwb",
            template_id: process.env.EMAILJS_TEMPLATE_ID || "template_yxwax0h",
            user_id: process.env.EMAILJS_PUBLIC_KEY || "m9mEOlb4m_-sPGt-b",
            template_params: {
              to_email: "beekayhuncho@gmail.com",
              from_name: `${firstName} ${lastName}`,
              from_email: email,
              phone: phone || "Not provided",
              service: service || "Not specified",
              message: message || "No message provided",
              subject: `New Contact: ${firstName} ${lastName} - ${
                service || "General"
              }`,
            },
          }),
        }
      );

      if (emailResponse.ok) {
        console.log("✅ Notification email sent");
      } else {
        console.log("⚠️ Email failed:", await emailResponse.text());
      }
    } catch (emailError) {
      console.error("Email error:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received.",
    });
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
