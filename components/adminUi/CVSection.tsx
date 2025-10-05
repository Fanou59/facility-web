import AddExperienceCv from "./add-experience-cv";
import CollapsibleSection from "./collapsible-section";

export default function CVSection() {
  return (
    <>
      <CollapsibleSection title="Ajouter une expérience professionelle">
        <AddExperienceCv />
      </CollapsibleSection>
    </>
  );
}
