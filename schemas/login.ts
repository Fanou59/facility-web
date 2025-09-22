import { z } from "zod";

export const loginFormSchema = z.object({
  password: z.string().min(2, {
    message: "Le mot de passe doit contenir au moins 2 caractères.",
  }),
  email: z.email({
    message: "L'email n'est pas valide.",
  }),
});
