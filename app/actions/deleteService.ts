"use server";

import { promises as fs } from "fs";
import path from "path";

export async function deleteServiceAction(id: string) {
  // 1. Récupérer le service pour avoir le chemin de l'image
  const service = await prisma.services.findUnique({
    where: { id: Number(id) },
  });

  // 2. Supprimer l'image si elle existe
  if (service?.imageUrl) {
    const imagePath = path.join(process.cwd(), "public", service.imageUrl);
    try {
      await fs.unlink(imagePath);
    } catch (e) {
      // Si le fichier n'existe pas, on ignore l'erreur
    }
  }

  // 3. Supprimer le service de la base
  await prisma.services.delete({ where: { id: Number(id) } });

  return { success: true };
}
