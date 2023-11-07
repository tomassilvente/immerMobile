import React, { useState } from "react";
import Picker from "emoji-picker-react"; // Import the emoji picker
import { EmojiClickData } from "emoji-picker-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  function handleEmojiClick(emoji: EmojiClickData, event: MouseEvent): void {
    const emojiToAdd = emoji.emoji;
    setMessage((prevMessage) => prevMessage + emojiToAdd);

    // close the emoji picker after selecting an emoji
    setShowEmojiPicker(false);
  }

  return (
    <div className="flex p-2 w-full">
      <input
        type="text"
        className="w-full p-2 rounded-l-lg"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className={`emoji-button pr-2`}
        style={{ fontSize: "16px" }}
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        🙂
      </button>
      <button
        className="bg-orange-500 text-white pr-2 pl-2 rounded-full"
        onClick={() => onSendMessage(message)}
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
      {showEmojiPicker && (
        <div className="absolute bottom-12 left-0">
          <Picker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default ChatInput;
