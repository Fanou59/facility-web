import React from "react";
import PageContainer from "./page-container";
import { HeaderNavigation } from "./header-navigation";

export default function Header() {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize tracking-wider">
            facility-web
          </h1>
          {/* Menu de navigation */}
          <HeaderNavigation />
        </div>
      </PageContainer>
    </header>
  );
}
