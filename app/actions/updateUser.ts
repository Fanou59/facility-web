"use server";

export async function updateUserAction(id: string) {
  // 1. Récupérer l'utilisateur pour avoir le chemin de l'image
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  // 2. Mettre à jour les informations de l'utilisateur (exemple)
  await prisma.user.update({
    where: { id: id },
    data: {
      // Mettre à jour les champs nécessaires, par exemple le nom
      name: user?.name,
    },
  });

  return { success: true };
}
