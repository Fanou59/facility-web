import { Check } from "lucide-react";
import React from "react";

type SyntheseServiceProps = {
  synthese: Record<string, string>;
};

export default function SyntheseService({ synthese }: SyntheseServiceProps) {
  if (!synthese) return null;
  return (
    <ul className="mt-6 space-y-3 text-slate-600">
      {Object.values(synthese).map((item, idx) => (
        <li key={idx} className="flex items-center gap-3">
          <Check className="text-orange-500 w-6 h-6" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
