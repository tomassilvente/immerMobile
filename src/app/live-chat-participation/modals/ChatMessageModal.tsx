// ChatMessageModal.tsx
// Represents a modal for displaying options for a specific chat message
import React, { useState } from 'react'
import Modal from './Modal'
import { type ChatMessage } from '../components/types' // Import the ChatMessage type

interface ChatMessageModalProps {
  message: ChatMessage // The message to display options for
  onClose: () => void // Callback function for closing the modal
  onReport: (id: number) => void // Callback function for reporting a message
  onBlock: (id: number) => void // Callback function for blocking a user
  onReact: (index: number, reaction: keyof ChatMessage['reactions']) => void // Callback function for reacting to a message
  index: number | null // Index of the message in the messages array
  id: number // ID of the message
  isBlocked: boolean // Indicates whether the user is blocked
}

const ChatMessageModal: React.FC<ChatMessageModalProps> = ({
  onClose,
  onReport,
  onBlock,
  onReact,
  id,
  index
}) => {
  const [selectedEmoji, setSelectedEmoji] = useState<
  keyof ChatMessage['reactions'] | null
  >(null)

  // Handler for handling emoji clicks and updating the selected emoji
  const handleEmojiClick = (reaction: keyof ChatMessage['reactions']) => {
    if (index !== null) {
      onReact(index, reaction)
      setSelectedEmoji(reaction)
    }
  }

  return (
    // Modal component for displaying message options
    <Modal
      onClose={() => {
        onClose()
        setSelectedEmoji(null)
      }}
    >
      <div className="bg-gray p-1 rounded-md">
        <div className="mt-1">
          {/* Buttons for adding reactions to the message */}
          <button className="p-1" onClick={() => { handleEmojiClick('thumbsUp') }}>
            👍
          </button>
          <button className="p-1" onClick={() => { handleEmojiClick('fire') }}>
            🔥
          </button>
          <button
            className="p-1"
            onClick={() => { handleEmojiClick('laughingFace') }}
          >
            😂
          </button>
          {/* Button for reporting the message */}
          <button className="p-1" onClick={() => { onReport(id) }}>
            Report
          </button>
          {/* Button for blocking the user */}
          <button className="p-1" onClick={() => { onBlock(id) }}>
            Block
          </button>
        </div>
      </div>
      {/* Display the selected emoji in the top-right corner */}
      {selectedEmoji && (
        <div className="absolute top-0 right-0 mt-1 mr-1">
          <span role="img" aria-label="Selected Emoji">
            {selectedEmoji}
          </span>
        </div>
      )}
    </Modal>
  )
}

export default ChatMessageModal
