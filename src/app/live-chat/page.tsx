// This component is very desorganized, do not worry. I will fix it later (Manrique)

"use client";
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

interface User {
  _id: string;
  fullName: string;
  email: string;
  image: string;
  is_online: string;
  token: string;
}

interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  content: string;
}

interface Chat {
  userId: string;
  username: string;
  messages: Message[];
}

interface Props {
  user: User | null;
}

const UserPage: React.FC<Props> = () => {
  const [receiverId, setReceiverId] = useState<string | null>(null);
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [users, setUsers] = useState<User[] | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

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
              email: "immerentertainment@zohomail.com",
              password: "PasswordForTesting123!",
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Login error: ${response.statusText}`);
        }

        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error("Login error:", error.message);
      }
    };

    if (!user) {
      loginUser();
    }

    if (user) {
      const socketInstance = io(
        "http://localhost:8000/user-namespace",
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

        if (isMounted.current) {
          setSocket(null);
          setCurrentChat(null);
        }
      });

      socketInstance.on("loadChats", (data) => {
        setCurrentChat({
          userId: receiverId || "",
          username: users?.find((u) => u._id === receiverId)?.fullName || "",
          messages: data.chats,
        });
      });


      socketInstance.on("loadNewChat", (data) => {
        setCurrentChat((prevChat) => ({
          ...prevChat!,
          messages: [...prevChat!.messages, data],
        }));
      });

      setSocket(socketInstance);

      return () => {
        socketInstance.disconnect();
      };
    }
  }, [user, receiverId, users]);

  const fetchUserList = async () => {
    try {
      const response = await fetch(
        "https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/",
        {
          headers: {
            Authorization: `Bearer ${user?.token || ""}`,
          },
        }
      );

      if (!response.ok) {
        alert(`Error trying to fetch user list: ${response.statusText}`);
      }

      const userListData: User[] = await response.json();
      setUsers(userListData);
    } catch (error) {
      console.error("Error trying to fetch user list:", error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserList();
    }
  }, [user]);

  useEffect(() => {
    console.log("Users state:", users);
  }, [users]);

  const handleUserListClick = (id: string) => {
    const selectedUser = users?.docs.find((u) => u._id === id);

    if (selectedUser) {
      setReceiverId(id);
      setCurrentChat({
        userId: id,
        username: selectedUser.fullName,
        messages: [], // Inicializar el array de mensajes
      });

      if (socket) {
        socket.emit("existsChat", {
          sender_id: user?._id,
          receiver_id: id,
        });
      }
    }
  };


  const handleSendButtonClick = () => {
    if (socket && receiverId && messageInput.trim() !== "") {
      socket.emit("newChat", {
        sender_id: user?._id,
        receiver_id: receiverId,
        message: messageInput,
      });


      const newChatMessage = {
        sender_id: user?._id,
        receiver_id: receiverId,
        message: messageInput,
      };

      setCurrentChat((prevChat) => ({
        ...prevChat!,
        messages: [...prevChat!.messages, newChatMessage],
      }));


      setMessageInput("");
    }
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ marginLeft: "260px" }}>
          <h1>Users connected {user.user.fullName}</h1>
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
            {users && users.docs && users.docs.length > 0 ? (
              users.docs.map((u) => (
                <li
                  key={u._id}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <img
                    src={`/${u.image}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "10px",
                    }}
                  />
                  <a
                    href="#"
                    className="userList"
                    data-id={u._id}
                    onClick={() => handleUserListClick(u._id)}
                  >
                    {u.fullName}
                    <span style={{ color: "gray", fontSize: "12px" }}>
                      {" "}
                      ({u.email}){" "}
                    </span>
                  </a>

                  <span style={{ color: "green" }}>
                    {u.is_online === "1" ? "En línea" : "Desconectado"}
                  </span>
                </li>
              ))
            ) : (
              <p>No hay usuarios disponibles</p>
            )}
          </ul>

          {currentChat && (
            <div id="chat">
              <h2 id="chat-username" style={{ margin: 0 }}>
                {currentChat?.username}
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
                {currentChat?.messages.map((message, index) => (
                  <div key={index}>
                    {message.message}
                  </div>
                ))}
              </div>
              <textarea
                id="message-input"
                style={{ width: "100%", height: "15%" }}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              ></textarea>
              <button
                id="send-button"
                style={{ width: "100%", height: "10%" }}
                onClick={handleSendButtonClick}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserPage;
