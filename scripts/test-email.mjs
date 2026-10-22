// Quick SMTP connection + send test
// Run with: node scripts/test-email.mjs

import { createTransport } from "nodemailer";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse .env.local manually (Next.js doesn't load it for plain node scripts)
const envPath = resolve(__dirname, "../.env.local");
const envLines = readFileSync(envPath, "utf8").split("\n");
for (const line of envLines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const [key, ...rest] = trimmed.split("=");
  process.env[key.trim()] = rest.join("=").trim();
}

const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

console.log("\n🔍 SMTP Config:");
console.log(`   Host : ${SMTP_HOST}`);
console.log(`   Port : ${SMTP_PORT}`);
console.log(`   Secure: ${SMTP_SECURE}`);
console.log(`   User : ${SMTP_USER}`);
console.log(`   Pass : ${"*".repeat((SMTP_PASS || "").length)}`);
console.log(`   From : ${SMTP_FROM}\n`);

const transport = createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT ?? 587),
  secure: SMTP_SECURE === "true",
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  tls: { rejectUnauthorized: false },
});

// Step 1: verify connection
console.log("⏳ Verifying SMTP connection...");
try {
  await transport.verify();
  console.log("✅ SMTP connection verified successfully!\n");
} catch (err) {
  console.error("❌ SMTP connection FAILED:", err.message);
  console.error("\nCommon fixes:");
  console.error("  - Check SMTP_HOST is correct (ask your host for it)");
  console.error("  - Check SMTP_PASS is the mailbox password, not your cPanel login");
  console.error("  - Try SMTP_PORT=465 and SMTP_SECURE=true if 587 fails");
  process.exit(1);
}

// Step 2: send a real test email to the SMTP_USER inbox
const TO = SMTP_USER; // sends the test to itself so you can verify
console.log(`📨 Sending test email to ${TO}...`);
try {
  const info = await transport.sendMail({
    from: SMTP_FROM,
    to: TO,
    subject: "✅ Braxvio Email Test — SMTP Working",
    text: "This is a test email confirming your Braxvio SMTP setup is working correctly.",
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:40px auto;background:#111;color:#e5e5e5;padding:32px;border-radius:12px;border:1px solid #222">
        <h2 style="color:#60a5fa;margin:0 0 16px">✅ SMTP is working!</h2>
        <p style="color:#ccc">Your Braxvio email system is correctly configured. Forms will now send auto-replies and route inquiries to the right inboxes.</p>
        <hr style="border:none;border-top:1px solid #333;margin:24px 0"/>
        <p style="color:#555;font-size:13px">Sent via ${SMTP_HOST} at ${new Date().toISOString()}</p>
      </div>
    `,
  });
  console.log(`✅ Test email sent! Message ID: ${info.messageId}`);
  console.log(`\n🎉 Everything is working. Check ${TO} for the test email.\n`);
} catch (err) {
  console.error("❌ Send failed:", err.message);
  process.exit(1);
}
