import ListeServiceSection from "@/components/adminUi/liste-service-section";
import ServiceSection from "@/components/adminUi/service-section";
import UserSection from "@/components/adminUi/user-section";
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
      {/* Création section Information de l'utilisateur */}
      <h2>Information de l'utilisateur</h2>
      <div className="flex gap-4">
        <p>Nom : {session.user.name}</p>
        <p>Email : {session.user.email}</p>
      </div>
      <Separator className="my-4" />
      {/* Création section liste utilisateurs */}
      <UserSection />
      <Separator className="my-4" />
      {/* Creation section des services */}
      <ServiceSection />
      <Separator className="my-4" />
      <ListeServiceSection />
    </PageContainer>
  );
}
