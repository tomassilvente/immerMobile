// ChatWindow.tsx
// Represents the main chat window that displays messages and allows sending new messages
import React, { useState } from "react";
import ChatInput from "./ChatInput";
import { ChatMessage } from "./types"; // Import the ChatMessage type

interface ChatWindowProps {
  onMessage: (message: ChatMessage) => void; // Callback function for adding a new message
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onMessage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Function for adding a new message to the chat
  const addMessage = (message: string) => {
    const newMessage: ChatMessage = {
      content: message,
      user: {
        id: 1,
        name: "John Doe", // Replace with actual user information
        image: "https://via.placeholder.com/150", // Replace with actual user information
      },
      reportCount: 0,
      isBlocked: false,
      reactions: {
        thumbsUp: 0,
        fire: 0,
        laughingFace: 0,
      },
    };
    setMessages([...messages, newMessage]);
    onMessage(newMessage);
  };

  return (
    <div className="bg-white border rounded-full shadow-md pr-2 w-full flex">
      {/* Container for displaying messages */}
      <div className="h-4/5 overflow-y-auto"></div>
      <div className="flex w-full">
        {/* Input component for typing new messages */}
        <ChatInput onSendMessage={addMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
