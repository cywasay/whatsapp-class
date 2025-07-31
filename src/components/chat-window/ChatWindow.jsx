import React from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";

const ChatWindow = ({ selectedContactId }) => {
  return (
    <div className="flex flex-col w-full h-full bg-blue-500">
      <ChatWindowHeader selectedContactId={selectedContactId} />
      <ChatArea />
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
