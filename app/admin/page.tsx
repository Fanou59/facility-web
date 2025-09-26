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
      <div className="text-3xl flex justify-center pt-4">
        <span>Bonjour {session.user.name}</span>
      </div>
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

// TODO Rendre modifiable les services en dB
/*
 * Afficher les données lors du click sur le pencil -> il faut créer un server component pour récuperer les données
 * Rendre le champ modifiable par un click pencil
 * Modifier les données dasn un champ input
 * Envoyer les données modifiées dans la dB
 */
