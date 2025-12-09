"use client";
import { deleteServiceAction } from "@/app/actions/deleteService";
import AddFormService from "@/components/admin/services/add-form-service";
import DeleteButton from "@/components/ui/buttons/delete-button";
import EditButton from "@/components/ui/buttons/edit-button";
import SpinnerPerso from "@/components/ui/spinner-perso";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Service = {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
  resume: string;
  synthese: any;
  description: string;
};

export default function ServicesList() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null
  );

  const { data, isLoading, error } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("/api/services");
      if (!res.ok) throw new Error("Erreur lors du chargement");
      return res.json();
    },
  });

  // Query pour récupérer les détails du service sélectionné
  const { data: serviceDetails, isLoading: isLoadingDetails } =
    useQuery<Service>({
      queryKey: ["service", selectedServiceId],
      queryFn: async () => {
        const res = await fetch(`/api/services/${selectedServiceId}`);
        if (!res.ok) throw new Error("Erreur lors du chargement du service");
        return res.json();
      },
      enabled: !!selectedServiceId,
    });

  if (isLoading) return <SpinnerPerso />;
  if (error) return <div>Erreur: {error.message}</div>;
  if (!data) return <div>Aucun service trouvé.</div>;

  async function handleDelete(id: string) {
    try {
      await deleteServiceAction(id);
      queryClient.invalidateQueries({ queryKey: ["services"] });
    } catch (e: any) {
      alert(e.message || "Erreur lors de la suppression");
    }
  }

  //TODO: handleClick doit appeler la fonction qui va permettre d'afficher les données détaillées du service
  const handleEdit = (id: string) => {
    if (selectedServiceId === id) {
      setSelectedServiceId(null);
    } else {
      setSelectedServiceId(id);
    }
  };

  const closeDetails = () => {
    setSelectedServiceId(null);
  };
  return (
    <div className="flex justify-center items-center gap-16">
      <ul className="flex flex-col gap-4">
        {data.map((service) => (
          <li key={service.id} className="flex flex-col gap-3">
            {/* Ligne du service avec boutons */}
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={service.imageUrl}
                  alt={service.alt}
                  width={50}
                  height={50}
                />
                <span>{service.title}</span>
              </div>
              <EditButton
                onClick={() => handleEdit(service.id)}
                isActive={selectedServiceId === service.id}
              />
              <DeleteButton onClick={() => handleDelete(service.id)} />
            </div>

            {/* Card des détails en dessous */}
            {selectedServiceId === service.id && (
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
