import Image from "next/image";
import DeleteButton from "../ui/buttons/delete-button";
import EditButton from "../ui/buttons/edit-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SyntheseService from "./synthese-service";

type CardDescriptionServicesProps = {
  title: string;
  description?: string;
  imageUrl: string;
  alt: string;
  synthese?: string[] | null;
  isActiveEdit?: boolean; // Nouvelle prop pour l'état actif du bouton d'édition
  onEdit?: () => void;
  onDelete?: () => void;
  isAdmin?: boolean;
};
export default function CardDescriptionServices({
  title,
  description,
  imageUrl,
  alt,
  synthese,
  isAdmin,
  isActiveEdit = false, // Valeur par défaut si non fournie
  onEdit,
  onDelete,
}: CardDescriptionServicesProps) {
  return (
    <Card className="py-8 px-2 rounded-xl transition-all duration-300 transform hover:-translate-y-2 shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <CardHeader className="flex flex-col items-center justify-center gap-6">
        <Image height={50} width={50} src={imageUrl} alt={alt} />
        <CardTitle className="text-xl font-bold text-slate-900 text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {description && (
          <div
            className="text-gray-600 max-w-none mb-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <div className="flex justify-center">
          <SyntheseService synthese={synthese} />
        </div>
        {isAdmin && onDelete && (
          <div className="flex mt-4 justify-end gap-4">
            {onEdit && ( // Rendre EditButton seulement si onEdit est défini
              <EditButton onClick={onEdit} isActive={isActiveEdit} />
            )}
            <DeleteButton onClick={onDelete} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
