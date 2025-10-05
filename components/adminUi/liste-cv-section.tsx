import CollapsibleSection from "./collapsible-section";
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
