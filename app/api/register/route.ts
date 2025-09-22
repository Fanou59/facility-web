import { authClient } from "@/lib/auth-client";
import { NextRequest, NextResponse } from "next/server";

const allowedEmails = ["stephane@facility-web.fr", "steph.guery@gmail.com"];

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  if (!allowedEmails.includes(email)) {
    return NextResponse.json(
      { error: "Adresse email non autorisée." },
      { status: 403 }
    );
  }

  try {
    await authClient.signUp.email({ email, password, name });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Erreur lors de l'inscription" },
      { status: 400 }
    );
  }
}
