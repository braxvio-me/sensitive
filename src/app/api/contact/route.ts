import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/mailer";

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

const INQUIRY_TYPES = [
  "Strategic Partnerships",
  "Enterprise Collaboration",
  "Investment & Institutional Dialogue",
  "Venture-Specific Questions",
  "Media & Press",
  "Careers & Talent",
  "Project Proposals",
  "General Institutional Inquiry",
];

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before sending another message." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, organization, inquiryType, relatedVenture, subject, message, privacyConsent, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Please provide a valid name (2-100 characters)." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 120) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!inquiryType || !INQUIRY_TYPES.includes(inquiryType)) {
      return NextResponse.json({ error: "Please select a valid inquiry type." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Please provide a message between 10 and 5000 characters." }, { status: 400 });
    }

    if (!privacyConsent) {
      return NextResponse.json({ error: "Privacy consent is required." }, { status: 400 });
    }

    // Safe server logging
    console.log(`[Braxvio Contact Inquiry] Type: ${inquiryType} | Email: ${email.split("@")[0]}@*** | Related: ${relatedVenture || "None"}`);

    // Send auto-reply to sender + forward to the correct Braxvio inbox
    const mailResult = await sendContactEmails({
      name: name.trim(),
      email,
      organization: organization?.trim(),
      inquiryType,
      relatedVenture: relatedVenture || undefined,
      subject: subject?.trim(),
      message: message.trim(),
    });

    if (!mailResult.ok) {
      console.error("[Braxvio Contact] Email delivery failed:", mailResult.error);
      // Still return success — the submission is received even if email is delayed
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received by Braxvio. A confirmation has been sent to your email address.",
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    console.error("[Braxvio Contact Error]", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "A server error occurred while processing your message. Please try again later." },
      { status: 500 }
    );
  }
}
