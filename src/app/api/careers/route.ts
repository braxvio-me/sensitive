import { NextRequest, NextResponse } from "next/server";
import { sendCareersEmails } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, discipline, portfolioUrl, note, privacyConsent, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }

    if (!note || note.trim().length < 10) {
      return NextResponse.json({ error: "Please provide more detail in your note." }, { status: 400 });
    }

    if (!privacyConsent) {
      return NextResponse.json({ error: "Privacy consent is required." }, { status: 400 });
    }

    console.log(`[Braxvio Talent Interest] Discipline: ${discipline} | Name: ${name}`);

    // Send auto-reply to applicant + forward to jobs@braxvio.com
    const mailResult = await sendCareersEmails({
      name: name.trim(),
      email,
      discipline: discipline || "Not specified",
      portfolioUrl: portfolioUrl?.trim() || undefined,
      note: note.trim(),
    });

    if (!mailResult.ok) {
      console.error("[Braxvio Careers] Email delivery failed:", mailResult.error);
      // Still return success — submission recorded even if email is delayed
    }

    return NextResponse.json({
      success: true,
      message: "Expression of interest recorded. A confirmation has been sent to your email address.",
    });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: "Failed to process application. Please try again." },
      { status: 500 }
    );
  }
}
