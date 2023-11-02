import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex p-2 w-full">
      <input
        type="text"
        className="w-full p-2 rounded-l-lg"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={`emoji-button pr-2`} style={{ fontSize: "16px" }}>
        🙂
      </button>
      <button
        className="bg-orange-500 text-white pr-2 pl-2 rounded-full"
        onClick={sendMessage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M2 21L23 12 2 3 2 10 17 12 2 14z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
