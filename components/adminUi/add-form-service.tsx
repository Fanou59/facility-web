"use client";
import { addServiceAction } from "@/app/actions/addServices";
import { updateServiceAction } from "@/app/actions/updateServices";
import { addServiceSchema } from "@/schemas/addService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
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

interface AddFormServiceProps {
  initialData?: Partial<z.infer<typeof addServiceSchema>>;
  serviceId?: string;
  mode?: "create" | "edit";
  onSuccess?: () => void;
}

export default function AddFormService({
  initialData,
  serviceId,
  mode = "create",
  onSuccess,
}: AddFormServiceProps) {
  const queryClient = useQueryClient();

  // Créer un schéma pour l'édition où l'image est optionnelle
  const editServiceSchema = addServiceSchema.partial({ imageUrl: true });
  const currentSchema = mode === "edit" ? editServiceSchema : addServiceSchema;
  const form = useForm<z.infer<typeof addServiceSchema>>({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      title: initialData?.title || "",
      resume: initialData?.resume || "",
      description: initialData?.description || "",
      imageUrl: mode === "edit" ? undefined : "",
      alt: initialData?.alt || "",
      synthese: initialData?.synthese || ["", "", ""],
    },
  });
  async function onSubmit(data: z.infer<typeof addServiceSchema>) {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("resume", data.resume);
      formData.append("description", data.description);
      formData.append("alt", data.alt);
      formData.append("synthese", JSON.stringify(data.synthese));
      // En mode edit, n'ajouter l'image que si une nouvelle image a été sélectionnée
      if (data.imageUrl && data.imageUrl instanceof File) {
        formData.append("image", data.imageUrl);
      }

      if (mode === "edit" && serviceId) {
        formData.append("id", serviceId);
        await updateServiceAction(formData);
        toast.success("Service modifié avec succès !");
      } else {
        await addServiceAction(formData);
        toast.success("Service créé avec succès !");
      }

      form.reset();
      queryClient.invalidateQueries({ queryKey: ["services"] });

      // Appeler le callback onSuccess si fourni
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      toast.error(
        e.message ||
          `Erreur lors de la ${mode === "edit" ? "modification" : "création"}`
      );
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" mx-auto space-y-8"
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
                <FormLabel>
                  {" "}
                  Icone du service (PNG){" "}
                  {mode === "edit" &&
                    "(optionnel - garder vide pour conserver l'image actuelle)"}
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/png"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
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
            {mode === "edit" ? "Modifier" : "Publier"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
