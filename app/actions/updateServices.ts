"use server";

import { prisma } from "@/lib/prisma";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import { addServiceSchema } from "@/schemas/addService";
import { revalidatePath } from "next/cache";

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

    // Si une nouvelle image est fournie, uploader vers Cloudinary
    if (validatedData.imageUrl && validatedData.imageUrl instanceof File) {
      try {
        // Upload vers Cloudinary - retourne une URL comme:
        // "https://res.cloudinary.com/xxx/image/upload/v123/facility-services/image.png"
        const cloudinaryUrl = await uploadToCloudinary(validatedData.imageUrl);

        // Cette URL est stockée dans la BDD
        updateData.imageUrl = cloudinaryUrl;
      } catch (error) {
        console.error("Erreur lors de l'upload vers Cloudinary:", error);
        throw new Error("Erreur lors de l'upload de l'image");
      }
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
