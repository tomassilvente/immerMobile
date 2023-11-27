"use client";

import React, { useState, useEffect } from "react";
import io from "socket.io-client";

interface User {
  _id: string;
  username: string;
  email: string;
  image: string;
  is_online: string;
  token: string;
}

interface Props {
  user: User | null;
}

const UserPage: React.FC<Props> = () => {
  const [receiverId, setReceiverId] = useState<string | null>(null);
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [chats, setChats] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const [users, setUsers] = useState<User[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch(
          "https://immer-backend-dev-kenx.2.us-1.fl0.io/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "test1@gmail.com",
              password: "Password123!",
            }),
          }
        );

        

        if (!response.ok) {
          throw new Error(`Login error: ${response.statusText}`);
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Login error:", error.message);
      }
    };

    const fetchUserList = async () => {
      try {
        const response = await fetch(
          "https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/41/1",
          {
            headers: {
              Authorization: `Bearer ${user?.token || ""}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error trying to fetch user list: ${response.statusText}`
          );
        }

        const userListData: User[] = await response.json();
        setUsers(userListData);
      } catch (error) {
        console.error("Error trying to fetch user list:", error.message);
      }
    };

    if (!user) {
      loginUser();
    }

    if (user) {
      console.log(user);
      fetchUserList();
      console.log(users);
      

      const socketInstance = io(
        "https://immer-backend-dev-kenx.2.us-1.fl0.io/user-namespace",
        {
          auth: {
            token: user._id || "",
          },
        }
      );

      socketInstance.on("connect", () => {
        console.log("Connected to server");
      });

      socketInstance.on("disconnect", () => {
        console.log("Disconnected from server");
      });

      socketInstance.on("loadChats", (data) => {
        setChats(data.chats);
      });

      socketInstance.on("loadNewChat", (data) => {
        setChats((prevChats) => [...prevChats, data.message]);
      });

      setSocket(socketInstance);

      return () => {
        socketInstance.disconnect();
      };
    }
  }, [user]);

  useEffect(() => {
    console.log("Users state:", users);
  }, [users]);

  const handleUserListClick = (id: string) => {
    setReceiverId(id);

    if (socket) {
      socket.emit("existsChat", {
        sender_id: user?._id,
        receiver_id: id,
      });
    }
  };

  const handleSendButtonClick = () => {
    if (socket && receiverId && messageInput.trim() !== "") {
      $.ajax({
        url: "https://immer-backend-dev-kenx.2.us-1.fl0.io/save-chat",
        type: "POST",
        data: {
          sender_id: user?._id,
          receiver_id: receiverId,
          message: messageInput,
        },
        success: function (response) {
          if (response.success) {
            console.log(response.data.message);
            setMessageInput("");

            const chat = response.data.message;
            setChats((prevChats) => [...prevChats, chat]);

            socket.emit("newChat", response.data);
          } else {
            alert(response.msg);
          }
        },
      });
    }
  };

  return (
    <>
      {user ? (
        <body style={{ marginLeft: "260px" }}>
          <h1>Users connected {user.username}</h1>

          <div
            style={{
              width: "200px",
              height: "100vh",
              backgroundColor: "#333333",
              position: "fixed",
              left: 0,
              top: 0,
              overflow: "auto",
              padding: "20px",
            }}
          >
            {/* Links */}
            <a
              href="/api/dashboard"
              style={{
                display: "block",
                color: "#fff",
                marginBottom: "10px",
                textDecoration: "none",
                fontSize: "30px",
              }}
            >
              Edit profile
            </a>
            <a
              href="/profile"
              style={{
                display: "block",
                color: "#fff",
                marginBottom: "10px",
                textDecoration: "none",
                fontSize: "30px",
              }}
            >
              Profile
            </a>
            <a
              href="/settings"
              style={{
                display: "block",
                color: "#fff",
                marginBottom: "10px",
                textDecoration: "none",
                fontSize: "30px",
              }}
            >
              Settings
            </a>
            <a
              href="/api/auth/logout/"
              style={{
                display: "block",
                color: "#fff",
                marginBottom: "10px",
                textDecoration: "none",
                fontSize: "30px",
              }}
            >
              Logout
            </a>
          </div>

          <ul>
            {users && users.map((userList) => (
              <li
                key={userList._id}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <img
                  src={`/${userList.image}`}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "10px",
                  }}
                />
                <a
                  href="#"
                  className="userList"
                  data-id={userList._id}
                  onClick={() => handleUserListClick(userList._id)}
                >
                  {userList.username}
                  <span style={{ color: "gray", fontSize: "12px" }}>
                    {" "}
                    ({userList.email}){" "}
                  </span>
                </a>
                <span style={{ color: "green" }}>
                  {userList.is_online === "1" ? "En línea" : "Desconectado"}
                </span>
              </li>
            ))}
          </ul>

          <div id="chat" style={{ display: "none" }}>
            <h2 id="chat-username" style={{ margin: 0 }}>
              {receiverId
                ? users?.find((u) => u._id === receiverId)?.username
                : ""}
            </h2>
            <div
              id="messages"
              style={{
                height: "55%",
                overflowY: "auto",
                border: "1px solid #ddd",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              {/* Display chat messages here */}
            </div>
            <textarea
              id="message-input"
              style={{ width: "100%", height: "15%" }}
            ></textarea>
            <button
              id="send-button"
              style={{ width: "100%", height: "10%" }}
              onClick={handleSendButtonClick}
            >
              Send
            </button>
          </div>
        </body>
      ) : (
        <h1 style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
          Login required
        </h1>
      )}
    </>
  );
};


export default UserPage;

