import AddFormService from "@/components/adminUi/add-form-service";
import PageContainer from "@/components/page-container";

export default function AdminPage() {
  return (
    <PageContainer>
      <h2>Ajouter un service</h2>
      <AddFormService />
      <h2>Modifier un service</h2>
    </PageContainer>
  );
}
