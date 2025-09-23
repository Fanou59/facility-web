import AddFormService from "./add-form-service";
import CollapsibleSection from "./collapsible-section";

export default function ServiceSection() {
  return (
    <>
      <CollapsibleSection title="Ajouter un service">
        <AddFormService />
      </CollapsibleSection>
    </>
  );
}
