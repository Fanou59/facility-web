"use client";
import { updateUserAction } from "@/app/actions/updateUser";
import { userSchema } from "@/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface UpdateUserFormProps {
  initialData?: Partial<z.infer<typeof userSchema>>;
  userId?: string;
  onSuccess?: () => void;
}

export default function UpdateUserForm({
  initialData,
  userId,
  onSuccess,
}: UpdateUserFormProps) {
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: initialData?.name || "",
      firstName: initialData?.firstName || "",
      lastName: initialData?.lastName || "",
      email: initialData?.email || "",
      actualJob: initialData?.actualJob || "",
      presentation: initialData?.presentation || "",
    },
  });

  async function onSubmit(data: z.infer<typeof userSchema>) {
    if (!userId) {
      toast.error("ID utilisateur manquant");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Données envoyées:", data);
      console.log("ID utilisateur:", userId);
      await updateUserAction(userId, data);
      toast.success("Utilisateur modifié avec succès");
      queryClient.invalidateQueries({ queryKey: ["user"] });

      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.error("=== ERREUR DANS LE FORMULAIRE ===");
      console.error("Type:", e.constructor.name);
      console.error("Message:", e.message);
      console.error("Code:", e.code);
      console.error("Meta:", e.meta);
      console.error("Stack:", e.stack);
      console.error("Erreur complète:", e);
      toast.error(
        e.message || "Erreur lors de la modification de l'utilisateur"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto space-y-8"
      >
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de l'utilisateur</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de famille</FormLabel>
                <FormControl>
                  <Input placeholder="Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="actualJob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Métier actuel</FormLabel>
                <FormControl>
                  <Input placeholder="Analyste" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="presentation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Présentation</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Blabla..."
                    {...field}
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 disabled:opacity-50"
          >
            {isSubmitting ? "Modification..." : "Modifier"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
