import React from "react";
import { dummyContacts } from "../../lib/dummy-data";

const ChatWindowHeader = ({ selectedContactId }) => {
  const selectedContact = dummyContacts.find((contact) => {
    return contact.id === selectedContactId;
  });
  return (
    <div className="flex w-full bg-red-400 min-h-20 h-20 items-center px-5 gap-2">
      <img src={selectedContact.image} className="rounded-full size-16" />
      {selectedContact?.name}
    </div>
  );
};

export default ChatWindowHeader;
