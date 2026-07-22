import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LEAD_EMAIL = "palys.bruno@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const company = body?.company?.trim();
  const phone = body?.phone?.trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Brakuje wymaganych pól." },
      { status: 400 },
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    return NextResponse.json(
      { error: "Serwer nie jest skonfigurowany do wysyłki maili." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `Formularz brunopalys.pl <${user}>`,
      to: LEAD_EMAIL,
      replyTo: email,
      subject: company
        ? `Nowy brief od ${name} (${company})`
        : `Nowy brief od ${name}`,
      text: `Imię i nazwisko: ${name}\nEmail: ${email}\nFirma / agencja: ${company || "nie podano"}\nTelefon: ${phone}`,
      html: `
        <h2>Nowy brief ze strony brunopalys.pl</h2>
        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Firma / agencja:</strong> ${escapeHtml(company || "nie podano")}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead email send failed", err);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości." },
      { status: 502 },
    );
  }
}
