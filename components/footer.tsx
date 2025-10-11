import Link from "next/link";
import PageContainer from "./page-container";

export default function Footer() {
  return (
    <PageContainer>
      <footer className="bg-gray-800 text-gray-300 py-6 ">
        <div className="container mx-auto px-6 text-center">
          <div className="flex gap-2 justify-center">
            <Link href="/mentions-legales">Mentions légales</Link>
            <span className="text-gray-500">|</span>
            <Link href="/politique-confidentialite">
              Politique de confidentialité
            </Link>
            <span className="text-gray-500">|</span>

            <Link href="/politique-cookie">Politique de cookies</Link>
          </div>
          <p>&copy; 2025 Facility-web. Tous droits réservés.</p>
        </div>
      </footer>
    </PageContainer>
  );
}
