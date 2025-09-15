import React from "react";
import { TimelineLayout } from "./timeline-layout";

export default function CvSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl relative min-h-[300px]">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Mon parcours
        </h2>
        <TimelineLayout />
      </div>
    </section>
  );
}
