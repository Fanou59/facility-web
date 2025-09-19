import AddFormService from "@/components/adminUi/add-form-service";
import ServicesList from "@/components/adminUi/services-list";
import PageContainer from "@/components/page-container";
import { Separator } from "@/components/ui/separator";
export default function AdminPage() {
  return (
    <PageContainer>
      <h2>Ajouter un service</h2>
      <AddFormService />
      <Separator className="my-4" />
      <h2>Liste des services</h2>
      <ServicesList />
    </PageContainer>
  );
}
