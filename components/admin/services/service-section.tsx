import AddFormService from "@/components/admin/services/add-form-service";
import CollapsibleSection from "@/components/ui/collapsible-section";

export default function ServiceSection() {
  return (
    <>
      <CollapsibleSection title="Ajouter un service">
        <AddFormService />
      </CollapsibleSection>
    </>
  );
}
