import CollapsibleSection from "@/components/admin/collapsible-section";
import ExperiencesList from "./experiences-list";

export default function ListeCVSection() {
  return (
    <>
      <CollapsibleSection title="Liste des expériences">
        <ExperiencesList />
      </CollapsibleSection>
    </>
  );
}
