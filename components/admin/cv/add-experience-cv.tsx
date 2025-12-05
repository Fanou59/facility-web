"use client";
import { addExperienceCVAction } from "@/app/actions/addExperienceCV";
import { updateExperienceAction } from "@/app/actions/updateExperience";
import { cvSchema } from "@/schemas/cv";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useQueryClient } from "@tanstack/react-query";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";

interface AddExperienceCvProps {
  initialData?: Partial<z.infer<typeof cvSchema>>;
  experienceId?: string;
  mode?: "create" | "edit";
  onSuccess?: () => void;
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function AddExperienceCv({
  onSuccess,
  initialData,
  experienceId,
  mode = "create",
}: AddExperienceCvProps) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof cvSchema>>({
    resolver: zodResolver(cvSchema),
    defaultValues: {
      job: initialData?.job || "",
      company: initialData?.company || "",
      resume: initialData?.resume || "",
      startDate:
        initialData?.startDate || new Date().toISOString().split("T")[0],
    },
  });

  async function onSubmit(data: z.infer<typeof cvSchema>) {
    try {
      const formData = new FormData();
      formData.append("job", data.job);
      formData.append("company", data.company);
      formData.append("resume", data.resume);
      formData.append("startDate", data.startDate);

      if (mode === "edit" && experienceId) {
        formData.append("id", experienceId);
        await updateExperienceAction(formData);
        toast.success("Expérience modifiée avec succès !");
      } else {
        await addExperienceCVAction(formData);
        toast.success("Expérience ajoutée avec succès !");
      }
      // NE PAS RESET en mode edit !
      if (mode === "create") {
        form.reset();
      }
      queryClient.invalidateQueries({ queryKey: ["experiences"] });
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      toast.error(
        e.message ||
          `Erreur lors de ${mode === "edit" ? "modification" : "création"}`
      );
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
            name="job"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Métier</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Entreprise</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Description du job</FormLabel>
                <FormControl>
                  <Textarea {...field} className="min-h-[150px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de démarrage</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="bg-background pr-10"
                      value={
                        field.value ? formatDate(new Date(field.value)) : ""
                      }
                      readOnly
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                          e.preventDefault();
                          setOpen(true);
                        }
                      }}
                    />
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          type="button"
                          id="date-picker"
                          variant="ghost"
                          className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                        >
                          <CalendarIcon className="size-3.5" />
                          <span className="sr-only">Choisir une date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                      >
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          captionLayout="dropdown"
                          onSelect={(date) => {
                            if (date) {
                              // Utiliser le format YYYY-MM-DD
                              const year = date.getFullYear();
                              const month = String(
                                date.getMonth() + 1
                              ).padStart(2, "0");
                              const day = String(date.getDate()).padStart(
                                2,
                                "0"
                              );
                              const localDateString = `${year}-${month}-${day}`;

                              field.onChange(localDateString);
                              setOpen(false);
                            }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
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
