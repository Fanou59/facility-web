import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 sm:hidden" />
      </SheetTrigger>
      <SheetContent className="w-xs">
        <div className="flex flex-col gap-4 px-2 py-4 items-center text-lg">
          <Link href={"/"}>Accueil</Link>
          <Link href={"/mes-services"}>Mes services</Link>
          <Link href={"/qui-suis-je"}>Qui suis-je ?</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
