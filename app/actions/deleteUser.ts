"use server";

import { prisma } from "@/lib/prisma";
import { promises as fs } from "fs";
import path from "path";

export async function deleteUserAction(id: string) {
  // 1. Récupérer l'utilisateur pour avoir le chemin de l'image
  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  // 2. Supprimer l'image si elle existe
  if (user?.image) {
    const imagePath = path.join(process.cwd(), "public", user.image);
    try {
      await fs.unlink(imagePath);
    } catch (e) {
      // Si le fichier n'existe pas, on ignore l'erreur
    }
  }

  // 3. Supprimer le service de la base
  await prisma.user.delete({ where: { id: id } });

  return { success: true };
}
