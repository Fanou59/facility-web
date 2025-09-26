"use server";
import { Prisma, PrismaClient } from "@/lib/generated/prisma";
const prisma = new PrismaClient();

export async function updateServiceAction(id: number) {
  // 1. Récupérer l'utilisateur pour avoir le chemin de l'image
  const service = await prisma.services.findUnique({
    where: { id: id },
  });
  if (!service) {
    return { success: false, error: "Service not found" };
  }
  // 2. Mettre à jour les informations de l'utilisateur (exemple)
  await prisma.services.update({
    where: { id: id },
    data: {
      // Mettre à jour les champs nécessaires, par exemple le nom
      title: service?.title,
      resume: service?.resume,
      description: service?.description,
      imageUrl: service?.imageUrl,
      alt: service?.alt,
      synthese: service?.synthese === null ? Prisma.JsonNull : service?.synthese,
    },
  });

  return { success: true };
}
