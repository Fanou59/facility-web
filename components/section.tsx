import React from "react";

type SectionProps = {
  title: string;
  bgColor?: string;
  description?: string;
  titleColor?: string;
  descriptionColor?: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  titleColor = "text-gray-900",
  descriptionColor = "text-gray-600",
  children,
  bgColor = "",
  description,
}: SectionProps) {
  return (
    <section className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto max-w-4xl relative min-h-[300px] flex flex-col justify-center">
        <h2
          className={`text-3xl md:text-5xl lg:text-6xlfont-bold ${titleColor} mb-12 text-center`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`${descriptionColor} max-w-2xl mx-auto mb-12 text-center text-lg`}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
