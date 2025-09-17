import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message, surname } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `Nouveau message de Mr/Mme ${name} via le formulaire de contact`,
      // text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: ` <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 24px; border-radius: 8px; color: #222;">
          <h2 style="color: #ea580c; margin-bottom: 16px;">📬 Demande d'informations ou de rendez-vous</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Nom&nbsp;:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Prénom&nbsp;:</td>
              <td style="padding: 8px 0;">${surname}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email&nbsp;:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message&nbsp;:</td>
              <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
            </tr>
          </table>
        </div>`,
    });

    return NextResponse.json(
      { message: "Email envoyé avec succès !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
