"use client";
import CollapsibleSection from "./collapsible-section";
import UserList from "./user-list";

export default function UserSection() {
  return (
    <>
      <CollapsibleSection title="Liste des utilisateurs enregistrés">
        <UserList />
      </CollapsibleSection>
    </>
  );
}
