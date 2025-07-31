import React from "react";
import Contact from "./Contact";
import { dummyContacts } from "../../lib/dummy-data";

const SidebarContacts = ({ selectedContactId, setSelectedContactId }) => {
  return (
    <div className="w-full h-[calc(100vh-160px)] overflow-y-auto flex flex-col bg-amber-800">
      {dummyContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          image={contact.image}
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ))}
    </div>
  );
};

export default SidebarContacts;
