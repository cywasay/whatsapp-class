import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarSearchbar from "./SidebarSearchbar";
import SidebarContacts from "./SidebarContacts";

const Sidebar = ({ selectedContactId, setSelectedContactId }) => {
  return (
    <div className="flex flex-col w-full h-full bg-blue-300">
      <SidebarHeader />
      <SidebarSearchbar />
      <SidebarContacts
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
      />
    </div>
  );
};

export default Sidebar;
