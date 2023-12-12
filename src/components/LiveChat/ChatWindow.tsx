import React from 'react'

interface Message {
  _id: string
  senderId: string
  receiverId: string
  content: string
  message: string
}

interface Chat {
  userId: string
  username: string
  messages: Message[]
}

interface ChatWindowProps {
  currentChat: Chat | null
  messageInput: string
  setMessageInput: React.Dispatch<React.SetStateAction<string>>
  handleSendButtonClick: () => void
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  currentChat,
  messageInput,
  setMessageInput,
  handleSendButtonClick
}) => {
  return (
    <div id="chat">
      <h2 id="chat-username" style={{ margin: 0 }}>
        {currentChat?.username}
      </h2>
      <div
        id="messages"
        style={{
          height: '55%',
          overflowY: 'auto',
          border: '1px solid #ddd',
          padding: '10px',
          margin: '10px 0'
        }}
      >
        {currentChat?.messages.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
      </div>
      <textarea
        id="message-input"
        style={{ width: '100%', height: '15%' }}
        value={messageInput}
        onChange={(e) => {
          setMessageInput(e.target.value)
        }}
      ></textarea>
      <button
        id="send-button"
        style={{ width: '100%', height: '10%' }}
        onClick={handleSendButtonClick}
      >
        Send
      </button>
    </div>
  )
}

export default ChatWindow