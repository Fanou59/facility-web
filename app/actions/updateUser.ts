"use server";
import { prisma } from "@/lib/prisma";
import { userSchema } from "@/schemas/user";
import { z } from "zod";

export async function updateUserAction(
  id: string,
  data: z.infer<typeof userSchema>
) {
  try {
    // Valider les données
    const validatedData = userSchema.parse(data);

    // Mettre à jour l'utilisateur
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        name: validatedData.name,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
      },
    });

    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    throw new Error("Erreur lors de la mise à jour de l'utilisateur");
  }
}
