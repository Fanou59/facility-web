"use client";

import { deleteServiceAction } from "@/app/actions/deleteService";
import AddFormService from "@/components/admin/services/add-form-service";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SpinnerPerso from "@/components/ui/spinner-perso";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import CardDescriptionServices from "./card-description-services";
import PlusAddService from "./plus-add-service";

type Service = {
  id: string;
  title: string;
  resume: string;
  description: string;
  imageUrl: string;
  alt: string;
  synthese: any;
};

export default function ServicesGrid({ isAdmin }: { isAdmin: boolean }) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [serviceToEditId, setServiceToEditId] = useState<string | null>(null);

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("/api/services");
      if (!res.ok) throw new Error("Erreur lors du chargement des services");
      return res.json();
    },
  });

  // Query pour récupérer les détails du service à éditer
  const {
    data: serviceDetails,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
  } = useQuery<Service>({
    queryKey: ["service", serviceToEditId],
    queryFn: async () => {
      const res = await fetch(`/api/services/${serviceToEditId}`);
      if (!res.ok) throw new Error("Erreur lors du chargement du service");
      return res.json();
    },
    enabled: !!serviceToEditId, // La requête ne s'exécute que si un ID est sélectionné
  });

  function handleDeleteClick(id: string) {
    setServiceToDelete(id);
    setIsDeleteDialogOpen(true);
  }

  function handleEditClick(id: string) {
    setServiceToEditId(id);
    setIsEditDialogOpen(true);
  }

  async function confirmDelete() {
    if (!serviceToDelete) return;

    try {
      await deleteServiceAction(serviceToDelete);
      queryClient.invalidateQueries({ queryKey: ["services"] });
      toast.success("Service supprimé avec succès !");
    } catch (e: any) {
      toast.error(e.message || "Erreur lors de la suppression");
    } finally {
      setIsDeleteDialogOpen(false);
      setServiceToDelete(null);
    }
  }

  const handleEditSuccess = () => {
    setIsEditDialogOpen(false);
    setServiceToEditId(null);
  };

  if (isLoading) return <SpinnerPerso />;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {data?.map((service) => (
          <CardDescriptionServices
            key={service.id}
            {...service}
            synthese={service.synthese as string[] | null}
            isAdmin={isAdmin}
            isActiveEdit={serviceToEditId === service.id}
            onEdit={() => handleEditClick(service.id)}
            onDelete={() => handleDeleteClick(service.id)}
          />
        ))}
        {isAdmin && <PlusAddService />}
      </div>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Êtes-vous sûr de vouloir supprimer ce service ?
            </DialogTitle>
            <DialogDescription>
              Cette action est irréversible. Le service sera définitivement
              supprimé.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              Modifier le service
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {isLoadingDetails && <SpinnerPerso />}
            {isErrorDetails && (
              <div>Erreur lors du chargement des détails.</div>
            )}
            {serviceDetails && (
              <AddFormService
                mode="edit"
                serviceId={serviceToEditId!}
                initialData={serviceDetails}
                onSuccess={handleEditSuccess}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
