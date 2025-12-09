import AddExperienceCv from "@/components/admin/cv/add-experience-cv";
import CollapsibleSection from "@/components/ui/collapsible-section";

export default function CVSection() {
  return (
    <>
      <CollapsibleSection title="Ajouter une expérience professionelle">
        <AddExperienceCv />
      </CollapsibleSection>
    </>
  );
}
