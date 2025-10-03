import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." })
    .optional(),
  email: z.email({ message: "L'adresse e-mail doit être valide." }).optional(),
  firstName: z
    .string()
    .min(2, { message: "Le prénom doit contenir au moins 2 caractères." })
    .optional(),
  lastName: z
    .string()
    .min(2, {
      message: "Le nom de famille doit contenir au moins 2 caractères.",
    })
    .optional(),
  actualJob: z.string().max(100).optional(),
  presentation: z.string().max(500).optional(),
});
