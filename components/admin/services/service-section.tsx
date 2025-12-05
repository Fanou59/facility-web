import CollapsibleSection from "@/components/admin/collapsible-section";
import AddFormService from "@/components/admin/services/add-form-service";

export default function ServiceSection() {
  return (
    <>
      <CollapsibleSection title="Ajouter un service">
        <AddFormService />
      </CollapsibleSection>
    </>
  );
}
