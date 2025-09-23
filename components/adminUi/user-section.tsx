"use client";
import CollapsibleSection from "./collapsible-section";
import UserList from "./user-list";

export default function UserSection() {
  return (
    <>
      <CollapsibleSection title="Utilisateurs">
        <UserList />
      </CollapsibleSection>
    </>
  );
}
