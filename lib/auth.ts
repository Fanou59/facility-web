import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import nodemailer from "nodemailer";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

interface SendResetPasswordEmailParams {
  to: string;
  url: string;
}

const sendResetPasswordEmail = async ({
  to,
  url,
}: SendResetPasswordEmailParams) => {
  const smtpPort = process.env.SMTP_PORT
    ? parseInt(process.env.SMTP_PORT)
    : 465;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Votre Application" <${process.env.SMTP_USER}>`,
      to: to,
      subject: "Réinitialisation de votre mot de passe",
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 24px; border-radius: 8px; color: #222;">
          <h2 style="color: #ea580c; margin-bottom: 16px;">🔑 Réinitialisation de mot de passe</h2>
          <p>Bonjour,</p>
          <p>Vous avez demandé à réinitialiser votre mot de passe. Cliquez sur le lien ci-dessous pour continuer :</p>
          <p><a href="${url}" style="display: inline-block; padding: 10px 20px; background-color: #ea580c; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold;">Réinitialiser mon mot de passe</a></p>
          <p>Ce lien est valide pour une durée limitée. Si vous n'avez pas demandé de réinitialisation, vous pouvez ignorer cet e-mail.</p>
          <p>Cordialement,<br>L'équipe de votre application</p>
        </div>
      `,
    });
    console.log(`Email de réinitialisation envoyé à ${to}`);
  } catch (error) {
    console.error(
      "Erreur lors de l'envoi de l'email de réinitialisation :",
      error
    );
    throw new Error("Erreur lors de l'envoi de l'e-mail de réinitialisation.");
  }
};

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await sendResetPasswordEmail({ to: user.email, url });
    },
  },
  //...
});
