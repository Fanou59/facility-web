"use client";
import { deleteExperienceAction } from "@/app/actions/deleteExperienceCV";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteButton from "../delete-button";
import EditButton from "../edit-button";
import SpinnerPerso from "../ui/spinner-perso";

type Experience = {
  id: string;
  job: string;
  company: string;
  startDate: string;
};

export default function ExperiencesList() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [selectedExperienceId, setSelectedExperienceId] = useState<
    string | null
  >(null);

  const { data, isLoading, error } = useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: async () => {
      const res = await fetch("/api/experiences");
      if (!res.ok) throw new Error("Erreur lors du chargement");
      return res.json();
    },
  });

  // Query pour récupérer les détails du service sélectionné
  const { data: serviceDetails, isLoading: isLoadingDetails } =
    useQuery<Experience>({
      queryKey: ["experiences", selectedExperienceId],
      queryFn: async () => {
        const res = await fetch(`/api/experiences/${selectedExperienceId}`);
        if (!res.ok) throw new Error("Erreur lors du chargement du service");
        return res.json();
      },
      enabled: !!selectedExperienceId, // Ne lance la query que si un service est sélectionné
    });

  if (isLoading) return <SpinnerPerso />;
  if (error) return <div>Erreur: {error.message}</div>;
  if (!data) return <div>Aucun service trouvé.</div>;

  async function handleDelete(id: string) {
    try {
      await deleteExperienceAction(id);
      queryClient.invalidateQueries({ queryKey: ["experiences"] });
    } catch (e: any) {
      alert(e.message || "Erreur lors de la suppression");
    }
  }

  //TODO: handleClick doit appeler la fonction qui va permettre d'afficher les données détaillées du service
  const handleEdit = (id: string) => {
    if (selectedExperienceId === id) {
      setSelectedExperienceId(null);
    } else {
      setSelectedExperienceId(id);
    }
  };

  const closeDetails = () => {
    setSelectedExperienceId(null);
  };
  return (
    <div className="flex justify-center items-center gap-16">
      <ul className="flex flex-col gap-4">
        {data.map((experience) => (
          <li key={experience.id} className="flex flex-col gap-3">
            {/* Ligne du service avec boutons */}
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <span>{experience.job}</span>
              </div>
              <EditButton
                onClick={() => handleEdit(experience.id)}
                isActive={selectedExperienceId === experience.id}
              />
              <DeleteButton onClick={() => handleDelete(experience.id)} />
            </div>

            {/* Card des détails en dessous */}
            {/* {selectedExperienceId === experience.id && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                {isLoadingDetails ? (
                  <SpinnerPerso />
                ) : serviceDetails ? (
                  <AddFormService
                    initialData={{
                      title: serviceDetails.title,
                      imageUrl: serviceDetails.imageUrl,
                      alt: serviceDetails.alt,
                      resume: serviceDetails.resume,
                      description: serviceDetails.description,
                      synthese: serviceDetails.synthese,
                    }}
                    serviceId={serviceDetails.id}
                    mode="edit"
                    onSuccess={closeDetails}
                  />
                ) : (
                  <div>Service non trouvé</div>
                )}
              </div>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
}
