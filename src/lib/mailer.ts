import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// SMTP transport — configured entirely via environment variables
// ---------------------------------------------------------------------------

function validateSmtpConfig(): string | null {
  const required: Record<string, string | undefined> = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  };
  for (const [key, val] of Object.entries(required)) {
    if (!val || val.includes("YOUR_") || val.includes("your-smtp")) {
      return `[Braxvio Mailer] Missing or placeholder value for ${key} in .env.local — emails will not send.`;
    }
  }
  return null;
}

function createTransport() {
  const warning = validateSmtpConfig();
  if (warning) console.error(warning);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587/25
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // cPanel hosts sometimes need this to accept self-signed certs
    tls: { rejectUnauthorized: false },
  });
}

// Friendly sender address
const FROM_ADDRESS = process.env.SMTP_FROM ?? "Braxvio <no-reply@braxvio.com>";

// ---------------------------------------------------------------------------
// Routing: map inquiry types → the correct Braxvio inbox
// ---------------------------------------------------------------------------
const PARTNERSHIP_TYPES = [
  "Strategic Partnerships",
  "Enterprise Collaboration",
  "Investment & Institutional Dialogue",
  "Project Proposals",
];

const PRESS_TYPES = ["Media & Press"];

const CAREERS_TYPES = ["Careers & Talent"];

export function resolveInbox(inquiryType: string): string {
  if (PARTNERSHIP_TYPES.includes(inquiryType)) return "partnerships@braxvio.com";
  if (PRESS_TYPES.includes(inquiryType)) return "press@braxvio.com";
  if (CAREERS_TYPES.includes(inquiryType)) return "jobs@braxvio.com";
  return "admin@braxvio.com"; // General / Venture-Specific Questions / fallback
}

// ---------------------------------------------------------------------------
// Shared HTML shell
// ---------------------------------------------------------------------------
function wrapHtml(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Braxvio</title>
  <style>
    body { margin:0; padding:0; background:#0a0a0a; font-family:'Helvetica Neue',Arial,sans-serif; color:#e5e5e5; }
    .wrap { max-width:600px; margin:40px auto; background:#111; border:1px solid #1f1f1f; border-radius:12px; overflow:hidden; }
    .header { background:linear-gradient(135deg,#0f2027,#203a43,#2c5364); padding:36px 40px; }
    .header img { height:32px; }
    .header h1 { margin:16px 0 0; font-size:22px; font-weight:700; color:#fff; letter-spacing:-0.3px; }
    .body { padding:32px 40px; }
    .body p { margin:0 0 16px; font-size:15px; line-height:1.7; color:#ccc; }
    .body p.lead { color:#e5e5e5; font-size:16px; font-weight:500; }
    .divider { border:none; border-top:1px solid #1f1f1f; margin:28px 0; }
    .pill { display:inline-block; background:#1a2a3a; border:1px solid #2a4a6a; color:#60a5fa; font-size:13px; padding:4px 14px; border-radius:999px; margin-bottom:20px; }
    .footer { background:#0d0d0d; padding:20px 40px; font-size:12px; color:#555; border-top:1px solid #1a1a1a; }
    .footer a { color:#60a5fa; text-decoration:none; }
  </style>
</head>
<body>
  <div class="wrap">
    ${body}
    <div class="footer">
      &copy; ${new Date().getFullYear()} Braxvio Technologies &bull; Accra, Ghana &bull;
      <a href="https://braxvio.com">braxvio.com</a>
    </div>
  </div>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Auto-reply templates
// ---------------------------------------------------------------------------

/** Generic contact / inquiry form */
export function buildContactAutoReply(name: string, inquiryType: string) {
  const inbox = resolveInbox(inquiryType);
  const html = wrapHtml(`
    <div class="header">
      <h1>We've received your inquiry.</h1>
    </div>
    <div class="body">
      <span class="pill">${inquiryType}</span>
      <p class="lead">Hello ${name},</p>
      <p>Thank you for reaching out to Braxvio. We have successfully received your message and our team is now reviewing it.</p>
      <p>All communications are assessed carefully. You can expect a substantive response from the relevant team within <strong>2–5 business days</strong>.</p>
      <hr class="divider"/>
      <p>If your inquiry is time-sensitive, you may follow up directly at <a href="mailto:${inbox}" style="color:#60a5fa">${inbox}</a>.</p>
      <p style="margin-bottom:0;color:#777;font-size:13px;">This is an automated confirmation — please do not reply to this email.</p>
    </div>
  `);

  const text = `Hello ${name},\n\nThank you for reaching out to Braxvio. We have received your inquiry (${inquiryType}) and our team will review it shortly.\n\nExpect a response within 2–5 business days.\n\nFor urgent matters contact: ${inbox}\n\n— Braxvio Team`;

  return { html, text };
}

/** Careers / talent expression of interest */
export function buildCareersAutoReply(name: string, discipline: string) {
  const html = wrapHtml(`
    <div class="header">
      <h1>Expression of interest received.</h1>
    </div>
    <div class="body">
      <span class="pill">Careers &amp; Talent</span>
      <p class="lead">Hello ${name},</p>
      <p>Thank you for expressing your interest in joining Braxvio. We have received your submission and our people team will review your profile.</p>
      <p>We evaluate candidates against our current and upcoming technical needs. If your background aligns, a member of our team will be in touch within <strong>5–10 business days</strong>.</p>
      <hr class="divider"/>
      <p>In the meantime, feel free to explore our ventures and open projects at <a href="https://braxvio.com" style="color:#60a5fa">braxvio.com</a>.</p>
      <p style="margin-bottom:0;color:#777;font-size:13px;">This is an automated confirmation — please do not reply to this email.</p>
    </div>
  `);

  const text = `Hello ${name},\n\nThank you for expressing your interest in Braxvio (${discipline}). We have received your submission and will be in touch if your profile is a match.\n\nExpect a response within 5–10 business days.\n\n— Braxvio People Team`;

  return { html, text };
}

/** Newsletter subscription confirmation */
export function buildNewsletterConfirmation() {
  const html = wrapHtml(`
    <div class="header">
      <h1>You're subscribed to The Braxvio Quarterly.</h1>
    </div>
    <div class="body">
      <span class="pill">The Braxvio Quarterly</span>
      <p class="lead">Welcome aboard.</p>
      <p>You will receive our curated briefing once every three months covering African macro-technology trends, architectural breakthroughs, and portfolio milestones.</p>
      <p>Strictly zero marketing noise — only signal.</p>
      <hr class="divider"/>
      <p>You can unsubscribe at any time by replying with "Unsubscribe" or clicking the link in any future email.</p>
      <p style="margin-bottom:0;color:#777;font-size:13px;">Protected under Ghana Data Protection Act 2012 (Act 843).</p>
    </div>
  `);

  const text = `Welcome to The Braxvio Quarterly.\n\nYou'll receive our briefing once every three months — African macro-technology trends, architectural breakthroughs, and portfolio milestones. Zero marketing noise.\n\nReply "Unsubscribe" at any time.\n\n— Braxvio`;

  return { html, text };
}

// ---------------------------------------------------------------------------
// Internal notification sent to the Braxvio team inbox
// ---------------------------------------------------------------------------
export function buildInternalNotification(
  type: "contact" | "careers" | "newsletter",
  fields: Record<string, string | undefined>
) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#888;font-size:13px;white-space:nowrap">${k}</td><td style="padding:6px 12px;color:#e5e5e5;font-size:13px">${v}</td></tr>`)
    .join("");

  const html = wrapHtml(`
    <div class="header">
      <h1>New ${type} submission</h1>
    </div>
    <div class="body">
      <table style="width:100%;border-collapse:collapse;background:#0d0d0d;border-radius:8px;overflow:hidden">
        ${rows}
      </table>
    </div>
  `);

  const text = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  return { html, text };
}

// ---------------------------------------------------------------------------
// Send helpers
// ---------------------------------------------------------------------------

interface SendResult {
  ok: boolean;
  error?: string;
}

/** Send an auto-reply + internal notification for contact inquiries */
export async function sendContactEmails(opts: {
  name: string;
  email: string;
  organization?: string;
  inquiryType: string;
  relatedVenture?: string;
  subject?: string;
  message: string;
}): Promise<SendResult> {
  try {
    const transport = createTransport();
    const inbox = resolveInbox(opts.inquiryType);
    const { html: replyHtml, text: replyText } = buildContactAutoReply(opts.name, opts.inquiryType);
    const { html: notifHtml, text: notifText } = buildInternalNotification("contact", {
      Name: opts.name,
      Email: opts.email,
      Organization: opts.organization,
      "Inquiry Type": opts.inquiryType,
      "Related Venture": opts.relatedVenture,
      Subject: opts.subject,
      Message: opts.message.slice(0, 500) + (opts.message.length > 500 ? "…" : ""),
    });

    await Promise.all([
      // Auto-reply to sender
      transport.sendMail({
        from: FROM_ADDRESS,
        to: opts.email,
        subject: "We've received your inquiry — Braxvio",
        text: replyText,
        html: replyHtml,
      }),
      // Internal notification to the right inbox
      transport.sendMail({
        from: FROM_ADDRESS,
        to: inbox,
        replyTo: opts.email,
        subject: `[${opts.inquiryType}] New inquiry from ${opts.name}`,
        text: notifText,
        html: notifHtml,
      }),
    ]);

    return { ok: true };
  } catch (err) {
    console.error("[Braxvio Mailer] sendContactEmails failed:", err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/** Send an auto-reply + internal notification for careers submissions */
export async function sendCareersEmails(opts: {
  name: string;
  email: string;
  discipline: string;
  portfolioUrl?: string;
  note: string;
}): Promise<SendResult> {
  try {
    const transport = createTransport();
    const { html: replyHtml, text: replyText } = buildCareersAutoReply(opts.name, opts.discipline);
    const { html: notifHtml, text: notifText } = buildInternalNotification("careers", {
      Name: opts.name,
      Email: opts.email,
      Discipline: opts.discipline,
      Portfolio: opts.portfolioUrl,
      Note: opts.note.slice(0, 500) + (opts.note.length > 500 ? "…" : ""),
    });

    await Promise.all([
      transport.sendMail({
        from: FROM_ADDRESS,
        to: opts.email,
        subject: "Expression of interest received — Braxvio",
        text: replyText,
        html: replyHtml,
      }),
      transport.sendMail({
        from: FROM_ADDRESS,
        to: "jobs@braxvio.com",
        replyTo: opts.email,
        subject: `[Talent] New expression of interest — ${opts.name} (${opts.discipline})`,
        text: notifText,
        html: notifHtml,
      }),
    ]);

    return { ok: true };
  } catch (err) {
    console.error("[Braxvio Mailer] sendCareersEmails failed:", err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/** Send a newsletter subscription confirmation */
export async function sendNewsletterConfirmation(email: string): Promise<SendResult> {
  try {
    const transport = createTransport();
    const { html, text } = buildNewsletterConfirmation();

    await Promise.all([
      transport.sendMail({
        from: FROM_ADDRESS,
        to: email,
        subject: "You're subscribed to The Braxvio Quarterly",
        text,
        html,
      }),
      // Notify admin of new subscriber
      transport.sendMail({
        from: FROM_ADDRESS,
        to: "admin@braxvio.com",
        subject: `[Newsletter] New subscriber: ${email}`,
        text: `New Braxvio Quarterly subscriber:\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
        html: wrapHtml(`
          <div class="header"><h1>New newsletter subscriber</h1></div>
          <div class="body">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          </div>
        `),
      }),
    ]);

    return { ok: true };
  } catch (err) {
    console.error("[Braxvio Mailer] sendNewsletterConfirmation failed:", err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
