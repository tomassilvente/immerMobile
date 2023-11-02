"use client";
import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";

export default function Home() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center p-2 flex-grow w-full">
      <div className="flex-grow flex w-full">
        {/* Content that should fill the available space */}
      </div>
      <div className="flex items-center w-full">
        <ChatWindow />
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
