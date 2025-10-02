"use client";
import { deleteUserAction } from "@/app/actions/deleteUser";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import EditButton from "../edit-button";
import { Button } from "../ui/button";
import SpinnerPerso from "../ui/spinner-perso";

type User = {
  id: string;
  name: string;
  firstName: string;
};

export default function UserList() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Erreur lors du chargement");
      return res.json();
    },
  });
  if (isLoading) return <SpinnerPerso />;
  if (error) return <div>Erreur: {error.message}</div>;
  if (!data) return <div>Aucun service trouvé.</div>;

  async function handleDelete(id: string) {
    try {
      await deleteUserAction(id);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    } catch (e: any) {
      alert(e.message || "Erreur lors de la suppression");
    }
  }
  return (
    <div className="flex justify-center w-full">
      <ul className="flex flex-col items-center w-full max-w-md">
        {data.map((user) => (
          <li key={user.id} className="flex items-center gap-2 mb-3 self-start">
            <span>{user.name}</span>
            <span>{user.firstName}</span>

            <EditButton onClick={() => {}} isActive={false} />
            <Button
              onClick={() => handleDelete(user.id)}
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
