"use client";
import { deleteServiceAction } from "@/app/actions/deleteService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SyntheseService from "../synthese-service";
import { Button } from "../ui/button";

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
      enabled: !!selectedServiceId, // Ne lance la query que si un service est sélectionné
    });

  if (isLoading) return <div>Chargement ...</div>;
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
  const handleModify = (id: string) => {
    // router.push("/mes-services");
    setSelectedServiceId(id);
    console.log("Modifier / Afficher", id);
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
              <button onClick={() => handleModify(service.id)}>
                <Pencil className="hover:text-orange-500 cursor-pointer" />
              </button>
              <button onClick={() => handleDelete(service.id)}>
                <Trash className="hover:text-orange-500 cursor-pointer" />
              </button>
            </div>

            {/* Card des détails en dessous */}
            {selectedServiceId === service.id && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                {isLoadingDetails ? (
                  <div>Chargement des détails...</div>
                ) : serviceDetails ? (
                  <div>
                    <div>Titre : {serviceDetails.title}</div>
                    <Image
                      src={serviceDetails.imageUrl}
                      alt={serviceDetails.alt}
                      width={50}
                      height={50}
                    />
                    <div>Balise ALT : {serviceDetails.alt}</div>
                    <div>Description{serviceDetails.description}</div>
                    <SyntheseService synthese={serviceDetails.synthese} />
                    <div className="flex gap-2 mt-6">
                      <Button
                        onClick={() => {
                          router.push(
                            `/admin/services/edit/${serviceDetails.id}`
                          );
                        }}
                        className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
                      >
                        Enregistrer
                      </Button>
                      <Button
                        onClick={closeDetails}
                        className="mt-8 px-8 py-3 bg-slate-500 hover:bg-slate-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
                      >
                        Annuler
                      </Button>
                    </div>
                  </div>
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
