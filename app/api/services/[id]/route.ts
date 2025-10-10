import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const serviceId = parseInt(id);

    if (isNaN(serviceId)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }
    const service = await prisma.services.findUnique({
      where: { id: serviceId },
    });
    if (service) {
      return NextResponse.json(service, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Service not found" },
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
