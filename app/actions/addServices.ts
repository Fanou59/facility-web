"use server";

import { prisma } from "@/lib/prisma";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import { addServiceSchema } from "@/schemas/addService";
import { revalidatePath } from "next/cache";

export async function addServiceAction(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const resume = formData.get("resume") as string;
    const description = formData.get("description") as string;
    const alt = formData.get("alt") as string;
    const synthese = JSON.parse(formData.get("synthese") as string);
    const image = formData.get("image") as File;

    // Validation des données
    const validatedData = addServiceSchema.parse({
      title,
      resume,
      description,
      alt,
      synthese,
      imageUrl: image, // On valide l'objet File
    });

    // Vérification que l'image est bien présente après validation
    if (!validatedData.imageUrl) {
      throw new Error("L'image est requise pour la création du service.");
    }

    // Upload vers Cloudinary - retourne une URL
    const cloudinaryUrl = await uploadToCloudinary(validatedData.imageUrl);

    // Création en base de données avec l'URL Cloudinary
    const newService = await prisma.services.create({
      data: {
        title: validatedData.title,
        resume: validatedData.resume,
        description: validatedData.description,
        alt: validatedData.alt,
        synthese: validatedData.synthese,
        imageUrl: cloudinaryUrl, // URL Cloudinary stockée en BDD
      },
    });

    console.log("Service créé:", newService);

    revalidatePath("/admin/services");
    return { success: true, service: newService };
  } catch (error) {
    console.error("Erreur lors de la création:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Erreur lors de la création du service"
    );
  }
}
