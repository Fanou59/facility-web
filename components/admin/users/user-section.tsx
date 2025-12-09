"use client";
import UserList from "@/components/admin/users/user-list";
import CollapsibleSection from "@/components/ui/collapsible-section";

export default function UserSection() {
  return (
    <>
      <CollapsibleSection title="Liste des utilisateurs enregistrés">
        <UserList />
      </CollapsibleSection>
    </>
  );
}
