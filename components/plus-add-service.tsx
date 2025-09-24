"use client";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlusAddService() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/admin");
  };
  return (
    <button
      className="flex justify-center items-center h-full mx-auto cursor-pointer"
      onClick={handleClick}
    >
      <PlusCircle
        className="fill-orange-500 hover:fill-orange-600 transition-all duration-300 transform text-white"
        size={40}
      />
    </button>
  );
}
