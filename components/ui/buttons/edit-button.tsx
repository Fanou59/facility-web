"use client";
import { Pencil, PencilOff } from "lucide-react";

type EditButtonProps = {
  onClick: () => void;
  isActive: boolean;
};

export default function EditButton({ onClick, isActive }: EditButtonProps) {
  return (
    <button onClick={onClick}>
      {isActive ? (
        <PencilOff className="hover:text-orange-500 cursor-pointer text-orange-500" />
      ) : (
        <Pencil className="hover:text-orange-500 cursor-pointer" />
      )}
    </button>
  );
}
