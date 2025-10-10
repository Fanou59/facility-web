import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const cvId = parseInt(id);

    if (isNaN(cvId)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }
    const experience = await prisma.cv.findUnique({
      where: { id: cvId },
    });
    if (experience) {
      return NextResponse.json(experience, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Experience not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de la récupération du service" },
      { status: 500 }
    );
  }
}
