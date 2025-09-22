import AddFormService from "@/components/adminUi/add-form-service";
import ServicesList from "@/components/adminUi/services-list";
import PageContainer from "@/components/page-container";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }
  return (
    <PageContainer>
      {/* Récupérer les données de l'utilisateur connecté */}
      <h2>Information de l'utilisateur</h2>
      <div className="flex gap-4">
        <p>Nom : {session.user.name}</p>
        <p>Email : {session.user.email}</p>
      </div>
      <Separator className="my-4" />
      <h2>Ajouter un service</h2>
      <AddFormService />
      <Separator className="my-4" />
      <h2>Liste des services</h2>
      <ServicesList />
    </PageContainer>
  );
}
