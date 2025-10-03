import InformationCVSection from "@/components/adminUi/information-cv-section";
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
      <div className="text-3xl flex justify-center pt-4">
        <span>Bonjour {session.user.name}</span>
      </div>
      <UserSection />
      <Separator className="my-4" />
      <ServiceSection />
      <Separator className="my-4" />
      <ListeServiceSection />
      <Separator className="my-4" />
      <InformationCVSection />
    </PageContainer>
  );
}
