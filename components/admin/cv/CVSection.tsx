import CollapsibleSection from "@/components/admin/collapsible-section";
import AddExperienceCv from "@/components/admin/cv/add-experience-cv";

export default function CVSection() {
  return (
    <>
      <CollapsibleSection title="Ajouter une expérience professionelle">
        <AddExperienceCv />
      </CollapsibleSection>
    </>
  );
}
