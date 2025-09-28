"use server";

import { prisma } from "@/lib/prisma";
import { addServiceSchema } from "@/schemas/addService";
import { mkdir, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";

export async function updateServiceAction(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const resume = formData.get("resume") as string;
    const description = formData.get("description") as string;
    const alt = formData.get("alt") as string;
    const synthese = JSON.parse(formData.get("synthese") as string);
    const image = formData.get("image") as File;

    // Préparer les données pour la validation
    const dataToValidate: any = {
      title,
      resume,
      description,
      alt,
      synthese,
    };

    // Ajouter l'image seulement si elle existe
    if (image && image.size > 0) {
      dataToValidate.imageUrl = image;
    }

    // Validation avec Zod partielle pour la mise à jour
    const validatedData = addServiceSchema
      .partial({ imageUrl: true })
      .parse(dataToValidate);

    // Préparer les données pour Prisma
    const updateData: any = {
      title: validatedData.title,
      resume: validatedData.resume,
      description: validatedData.description,
      alt: validatedData.alt,
      synthese: validatedData.synthese,
    };

    // Si une nouvelle image est fournie, traiter le fichier
    if (validatedData.imageUrl && validatedData.imageUrl instanceof File) {
      const file = validatedData.imageUrl;
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Générer un nom de fichier unique
      const fileName = `${Date.now()}-${file.name}`;
      const uploadDir = path.join(process.cwd(), "public/assets/images");
      const filePath = path.join(uploadDir, fileName);

      // Créer le répertoire s'il n'existe pas
      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (error) {
        // Le répertoire existe déjà
      }

      // Écrire le fichier
      await writeFile(filePath, buffer);

      // Stocker l'URL relative dans la base de données
      updateData.imageUrl = `/assets/images/${fileName}`;
    }

    // Mise à jour en base de données avec Prisma
    const updatedService = await prisma.services.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    console.log("Service mis à jour:", updatedService);

    revalidatePath("/admin/services");
    return { success: true, service: updatedService };
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    throw new Error("Erreur lors de la mise à jour du service");
  }
}
