import React, { useState } from "react";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  onMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onMessage }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages([...messages, message]);
    onMessage(message); // Call the onMessage function to update the messages in Home
  };

  return (
    <div className="bg-white border rounded-full shadow-md pr-2 w-full flex">
      <div className="h-4/5 overflow-y-auto">
        {/* {messages.map((message, index) => (
          <ChatMessage key={index} text={message} />
        ))} */}
      </div>
      <div className="flex w-full">
        <ChatInput onSendMessage={addMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
