import React from "react";

interface ChatMessageProps {
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text }) => {
  return <div className="bg-gray-200 p-2 m-2 rounded-md">{text}</div>;
};

export default ChatMessage;
