"use client";
import { deleteServiceAction } from "@/app/actions/deleteService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";

type Service = {
  id: string;
  title: string;
};

export default function ServicesList() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("/api/services");
      if (!res.ok) throw new Error("Erreur lors du chargement");
      return res.json();
    },
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
  return (
    <div className="flex justify-center w-full">
      <ul className="flex flex-col items-center w-full max-w-md">
        {data.map((service) => (
          <li
            key={service.id}
            className="flex items-center gap-2 mb-3 self-start"
          >
            <span>{service.title}</span>
            <Button
              onClick={() => {}}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Modifier
            </Button>
            <Button
              onClick={() => handleDelete(service.id)}
              className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Supprimer
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
