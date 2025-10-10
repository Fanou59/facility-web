"use server";

import { prisma } from "@/lib/prisma";

export async function deleteExperienceAction(id: string) {
  // 1. Récupérer le service pour avoir le chemin de l'image
  const experience = await prisma.cv.findUnique({
    where: { id: Number(id) },
  });

  // 2. Supprimer le service de la base
  await prisma.cv.delete({ where: { id: Number(id) } });

  return { success: true };
}
