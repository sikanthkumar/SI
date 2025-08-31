import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST as string;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER as string;
const smtpPass = process.env.SMTP_PASS as string;
const emailFrom = process.env.EMAIL_FROM as string;

if (!smtpHost || !smtpUser || !smtpPass || !emailFrom) {
    // Do not throw during build; runtime routes will throw if used without config
    // console.warn("SMTP or EMAIL_FROM envs are not fully configured.");
}

export async function sendVerificationEmail(params: {
    to: string;
    verifyUrl: string;
    name?: string;
}): Promise<void> {
    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
    });

    const { to, verifyUrl, name } = params;

    const subject = "Verify your email";
    const text = `Hi${name ? " " + name : ""},\n\nPlease verify your email by clicking the link below:\n${verifyUrl}\n\nIf you didn't request this, you can ignore this email.`;
    const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Verify your email</h2>
      <p>Hi${name ? " " + name : ""},</p>
      <p>Please confirm your email by clicking the button below.</p>
      <p><a href="${verifyUrl}" style="display:inline-block;padding:10px 16px;background:#007bff;color:#fff;text-decoration:none;border-radius:6px">Verify Email</a></p>
      <p>Or copy this link into your browser:<br/><a href="${verifyUrl}">${verifyUrl}</a></p>
      <p>If you didn't request this, you can ignore this email.</p>
    </div>
  `;

    await transporter.sendMail({ from: emailFrom, to, subject, text, html });
}
