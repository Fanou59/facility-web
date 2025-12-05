import CollapsibleSection from "@/components/admin/collapsible-section";
import ServicesList from "./services-list";

export default function ListeServiceSection() {
  return (
    <>
      <CollapsibleSection title="Liste des services">
        <ServicesList />
      </CollapsibleSection>
    </>
  );
}
