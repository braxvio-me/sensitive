import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterConfirmation } from "@/lib/mailer";

// Simple in-memory rate limiter per IP (max 5 requests per minute)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const max = 5;

  const current = rateLimitMap.get(ip);
  if (!current || now > current.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return true;
  }

  if (current.count >= max) {
    return false;
  }

  current.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const { email } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 120) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    console.log(`[Braxvio Quarterly Signup] Email: ${email.split("@")[0].slice(0, 2)}***@${email.split("@")[1]}`);

    // Send subscription confirmation + notify admin@braxvio.com
    const mailResult = await sendNewsletterConfirmation(email);

    if (!mailResult.ok) {
      console.error("[Braxvio Newsletter] Email delivery failed:", mailResult.error);
      // Still return success — subscription recorded even if email is delayed
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[Braxvio Newsletter Error]", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "A server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
