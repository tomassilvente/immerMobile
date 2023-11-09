// Home.tsx
"use client";

import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import UserInfo from "./components/UserInfo";
import BackButton from "../../common/buttons/BackButton";
import MoreButton from "../../common/buttons/MoreButton";

export default function Home() {
  const [isLiked, setIsLiked] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [user, setUser] = useState({
    name: "John Doe", // Replace with actual user information
    image: "https://via.placeholder.com/150", // Replace with actual user information
  });

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Function to update messages in the state
  const updateMessages = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  const handleReportAbuse = () => {
    console.log("Abuse reported!");
  };

  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-start p-2 flex-grow w-full">
      <div className="mb-2 flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="mr-2">
            <BackButton />
          </div>
          <div className="flex items-center">
            <UserInfo userName={user.name} userImage={user.image} />
          </div>
        </div>
        <div>
          <MoreButton />
        </div>
      </div>
      <div className="flex-grow flex flex-col-reverse w-full">
        <div className="message-container w-1/2">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start">
              <img
                src={user.image}
                alt="User"
                className="user-image rounded-full h-10 w-10 mt-1 mr-2"
              />
              <div className="bg-gray-200 p-2 m-2 rounded-md chat-message-box">
                <span className="text text-black font-semibold">
                  {user.name}
                </span>
                <p className="text-gray-800">{message}</p>
              </div>
            </div>
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
