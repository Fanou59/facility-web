"use client";
import AddFormService from "@/components/admin/services/add-form-service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function PlusAddService() {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex justify-center items-center h-full mx-auto cursor-pointer">
          <PlusCircle
            className="fill-orange-500 hover:fill-orange-600 transition-all duration-300 transform text-white"
            size={40}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Ajouter un nouveau service
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <AddFormService mode="create" onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
