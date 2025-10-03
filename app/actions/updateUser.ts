"use server";
import { prisma } from "@/lib/prisma";
import { userSchema } from "@/schemas/user";
import { z } from "zod";

export async function updateUserAction(
  id: string,
  data: z.infer<typeof userSchema>
) {
  try {
    console.log("=== DEBUT updateUserAction ===");
    console.log("ID reçu:", id);
    console.log("Données reçues:", JSON.stringify(data, null, 2));
    // Valider les données
    const validatedData = userSchema.parse(data);
    console.log("Données validées:", JSON.stringify(validatedData, null, 2));

    // Mettre à jour l'utilisateur
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        name: validatedData.name,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        actualJob: validatedData.actualJob,
        presentation: validatedData.presentation,
      },
    });

    return { success: true, user: updatedUser };
  } catch (error: any) {
    console.error("Erreur lors de la mise à jour:", error);
    console.error("=== ERREUR DÉTAILLÉE ===");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Meta:", error.meta);
    console.error("Stack:", error.stack);
    console.error("Erreur complète:", error);
    throw new Error("Erreur lors de la mise à jour de l'utilisateur");
  }
}
