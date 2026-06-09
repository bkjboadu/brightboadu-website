import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        { error: "Please share a bit more detail so I can help effectively." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      return NextResponse.json(
        {
          error:
            "Contact delivery is not configured yet. Please try again later."
        },
        { status: 503 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: "Bright Boadu Portfolio <contact@send.brightboadu.com>",
        to: [contactEmail],
        reply_to: email,
        subject: `New portfolio inquiry from ${name}`,
        text: `Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}`
      })
    });

    if (!resendResponse.ok) {
      return NextResponse.json(
        { error: "Message could not be delivered right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thanks for reaching out. Your message has been received and Bright will follow up shortly.",
      submission: {
        name,
        email,
        company: company ?? "",
        preview: message.slice(0, 120)
      }
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
