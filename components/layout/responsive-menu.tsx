"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResponsiveMenu() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className="h-6 w-6 sm:hidden" />
      </SheetTrigger>
      <SheetContent className="w-xs">
        <VisuallyHidden>
          <SheetTitle>Menu de navigation</SheetTitle>
          <SheetDescription>
            Menu de navigation principal du site
          </SheetDescription>
        </VisuallyHidden>
        <div className="flex flex-col gap-4 px-2 py-4 items-center text-lg">
          <Link href={"/"} onClick={handleLinkClick}>
            Accueil
          </Link>
          <Link href={"/mes-services"} onClick={handleLinkClick}>
            Mes services
          </Link>
          <Link href={"/qui-suis-je"} onClick={handleLinkClick}>
            Qui suis-je ?
          </Link>
          <Link href={"/contact"} onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
