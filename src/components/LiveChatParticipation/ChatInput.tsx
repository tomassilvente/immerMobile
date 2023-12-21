// ChatInput.tsx
// Represents the input area for typing messages in the chat interface
import React, { useState } from 'react'
import Picker from 'emoji-picker-react' // Emoji picker library
import { type EmojiClickData } from 'emoji-picker-react'

interface ChatInputProps {
  onSendMessage: (message: string) => void // Callback function for sending messages
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('') // State for tracking the message being typed
  const [showEmojiPicker, setShowEmojiPicker] = useState(false) // State for displaying/hiding the emoji picker

  // Handler for handling "Enter" key press to send messages
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && message.trim() !== '') {
      onSendMessage(message)
      setMessage('')
    }
  }

  // Handler for adding an emoji when clicked from the picker
  function handleEmojiClick (emoji: EmojiClickData, event: MouseEvent): void {
    const emojiToAdd = emoji.emoji
    setMessage((prevMessage) => prevMessage + emojiToAdd)

    // Close the emoji picker after selecting an emoji
    setShowEmojiPicker(false)
  }

  return (
    <div className="flex p-2 w-full">
      {/* Input field for typing messages */}
      <input
        type="text"
        className="w-full p-2 rounded-l-lg "
        placeholder="Type a message..."
        value={message}
        onChange={(e) => { setMessage(e.target.value) }}
        onKeyDown={handleKeyDown}
      />
      {/* Button to toggle the emoji picker */}
      <button
        className={'emoji-button pr-2'}
        style={{ fontSize: '16px' }}
        onClick={() => { setShowEmojiPicker(!showEmojiPicker) }}
      >
        🙂
      </button>
      {/* Button to send the message */}
      <button
        className="bg-orange-500 text-white pr-2 pl-2 rounded-full"
        onClick={() => { onSendMessage(message) }}
      >
        {/* SVG icon for sending messages */}
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
      {/* Display the emoji picker when showEmojiPicker is true */}
      {showEmojiPicker && (
        <div className="absolute bottom-12 left-0">
          <Picker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  )
}

export default ChatInput
