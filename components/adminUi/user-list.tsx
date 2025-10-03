"use client";
import { deleteUserAction } from "@/app/actions/deleteUser";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import DeleteButton from "../delete-button";
import EditButton from "../edit-button";
import SpinnerPerso from "../ui/spinner-perso";
import UpdateUserForm from "./update-user-form";

type User = {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  actualjob?: string;
  presentation?: string;
};

export default function UserList() {
  const queryClient = useQueryClient();
  const [selectedUserId, setselectedUserId] = useState<string | null>(null);

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

  const handleEdit = (id: string) => {
    if (selectedUserId === id) {
      setselectedUserId(null);
    } else {
      setselectedUserId(id);
    }
  };

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
        {data.map((user) => {
          const isSelected = selectedUserId === user.id;
          const selectedUser = data.find((u) => u.id === selectedUserId);

          return (
            <li key={user.id} className="flex flex-col gap-2 mb-3 w-full">
              <div className="flex items-center gap-2 self-start">
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
                <span>{user.actualjob}</span>

                <EditButton
                  onClick={() => handleEdit(user.id)}
                  isActive={isSelected}
                />
                <DeleteButton onClick={() => handleDelete(user.id)} />
              </div>

              {isSelected && selectedUser && (
                <div className="w-full mt-2">
                  <UpdateUserForm
                    initialData={selectedUser}
                    userId={selectedUser.id}
                    onSuccess={() => setselectedUserId(null)}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
