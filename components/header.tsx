import React from "react";
import PageContainer from "./page-container";
import { NavigationMenuDemo } from "./navigation-menu";

export default function Header() {
  return (
    <header>
      <PageContainer>
        <h1 className="p-4 border-b">FACILITY-WEB</h1>
        {/* Menu de navigation */}
        <NavigationMenuDemo />
      </PageContainer>
    </header>
  );
}
