"use client";
import { addServiceSchema } from "@/schemas/addService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
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

//Il faudra ajouter un champ résumé
export default function AddFormService() {
  const form = useForm<z.infer<typeof addServiceSchema>>({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      title: "",
      resume: "",
      description: "",
      imageUrl: "",
      alt: "",
      synthese: ["", "", ""],
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof addServiceSchema>) => {
      const res = await fetch("/api/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Erreur lors de la création");
      return res.json();
    },
    onSuccess: () => {
      form.reset();
      toast.success("Service créé avec succès !");
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          mutation.mutate(data);
        })}
        className="w-1/2 mx-auto space-y-8"
      >
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre du service</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Quel est le nom du service ?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description du service</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Détaillez le service"
                    {...field}
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Résumé du service</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Résumé le service"
                    {...field}
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Icone du service</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrez une url valide pour l'icone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Balise ALT de l'icone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Renseigner le champ ALT de l'image"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="synthese.0"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Synthèse 1</FormLabel>
                <FormControl>
                  <Input placeholder="Première synthèse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="synthese.1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Synthèse 2</FormLabel>
                <FormControl>
                  <Input placeholder="Deuxième synthèse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="synthese.2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Synthèse 3</FormLabel>
                <FormControl>
                  <Input placeholder="Troisième synthèse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Publier
          </Button>
        </div>
      </form>
    </Form>
  );
}
