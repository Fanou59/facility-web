import { PlusCircle } from "lucide-react";

export default function PlusAddService() {
  return (
    <div className="flex justify-center">
      <span className="flex items-center gap-2">
        <PlusCircle className="fill-orange-500 text-white" size={40} />
        Ajouter un service
      </span>
    </div>
  );
}
