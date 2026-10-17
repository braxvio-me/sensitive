import { NextRequest, NextResponse } from "next/server";

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

    return NextResponse.json({
      success: true,
      message: "Expression of interest recorded successfully.",
    });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: "Failed to process application. Please try again." },
      { status: 500 }
    );
  }
}
