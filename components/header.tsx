import React from "react";
import PageContainer from "./page-container";
import { HeaderNavigation } from "./header-navigation";
import ResponsiveMenu from "./responsive-menu";

export default function Header() {
  return (
    <PageContainer>
      <header className="p-4 border-b">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold capitalize tracking-wider">
            facility-web
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
