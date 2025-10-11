import Link from "next/link";
import PageContainer from "./page-container";

export default function Footer() {
  return (
    <PageContainer>
      <footer className="bg-gray-800 text-gray-300 py-6 ">
        <div className="container mx-auto px-6 text-center">
          <Link href="/mentions-legales">Mentions légales</Link>
          <p>&copy; 2025 Facility-web. Tous droits réservés.</p>
        </div>
      </footer>
    </PageContainer>
  );
}
