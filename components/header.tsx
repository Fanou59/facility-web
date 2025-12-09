import { HeaderNavigation } from "./header-navigation";
import PageContainer from "./page-container";
import ResponsiveMenu from "./responsive-menu";

export default function Header() {
  return (
    <PageContainer>
      <header className="p-4 border-b">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold capitalize tracking-wider">
            product-axis
          </span>
          {/* Menu de navigation */}
          <div className="flex items-center">
            <HeaderNavigation />
            <ResponsiveMenu />
          </div>
        </div>
      </header>
    </PageContainer>
  );
}
