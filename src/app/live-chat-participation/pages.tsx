"use client";

import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";

export default function Home() {
  const [isLiked, setIsLiked] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Function to update messages in the state
  const updateMessages = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center p-2 flex-grow w-full">
      <div className="flex-grow flex flex-col-reverse w-full">
        <div className="message-container w-50%">
          {messages.map((message, index) => (
            <p
              key={index}
              className="bg-gray-200 p-2 m-2 rounded-md chat-message-box"
            >
              {message}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full">
        <ChatWindow onMessage={updateMessages} />
        <button
          className={`like-button bg-white pl-2 pr-2 rounded-full ml-2 ${
            isLiked ? "text-orange-500" : "text-black"
          }`}
          onClick={toggleLike}
          style={{ fontSize: "24px" }}
        >
          &#10084;
        </button>
      </div>
    </main>
  );
}
