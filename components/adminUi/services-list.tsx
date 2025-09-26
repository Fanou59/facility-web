"use client";
import { deleteServiceAction } from "@/app/actions/deleteService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Service = {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
};

export default function ServicesList() {
  const queryClient = useQueryClient();
  const router = useRouter();

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

  //TODO: handleClick doit appeler la fonction
  const handleClick = () => {
    router.push("/mes-services");
  };
  return (
    <div className="flex justify-center items-center gap-16">
      <ul className="flex flex-col gap-4">
        {data.map((service) => (
          <li key={service.id} className=" flex gap-3 items-center">
            <div className="flex items-center gap-2">
              <Image
                src={service.imageUrl}
                alt={service.alt}
                width={50}
                height={50}
              />
              <span>{service.title}</span>
            </div>
            <button onClick={handleClick}>
              <Pencil className="hover:text-orange-500 cursor-pointer" />
            </button>
            <button onClick={() => handleDelete(service.id)}>
              <Trash className="hover:text-orange-500 cursor-pointer" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
/*
 * handleClick doit se tranformer en handleShow ou handleModify
 * handleShow affiche un composant qui affichera l'ensemble des données du service
 * il va falloir passer aussi l'Id du service
 * */
