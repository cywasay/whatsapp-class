import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import ChatWindow from "./components/chat-window/ChatWindow";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(0);

  return (
    <div className="grid grid-cols-[350px_1fr] w-full h-screen bg-red-200">
      <Sidebar
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
      />
      <ChatWindow selectedContactId={selectedContactId} />
    </div>
  );
}

export default App;
