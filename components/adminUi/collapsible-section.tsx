"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type CollapsibleSectionProps = {
  children: React.ReactNode;
  title: string;
};

export default function CollapsibleSection({
  title,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex gap-4 i items-center mt-4 mb-4">
        <h2>{title}</h2>
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 w-6 h-6"
          onClick={handleToggle}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
      {isOpen && children}
    </>
  );
}
