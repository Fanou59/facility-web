import React from "react";
import Link from "next/link";

type ContactButtonProps = {
  children: string;
};

export default function ContactButton({ children }: ContactButtonProps) {
  return (
    <Link
      href="/contact"
      className="mt-8 inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
    >
      {children}
    </Link>
  );
}
