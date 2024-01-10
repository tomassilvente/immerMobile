import React, { useState } from 'react'
import Modal from './Modal'
import { type ChatMessage } from '../../../types/livechatparticipation.interfaces'

interface ChatMessageModalProps {
  message: ChatMessage
  onClose: () => void
  onReport: (id: number) => void
  onBlock: (id: number) => void
  onReact: (index: number, reaction: keyof ChatMessage['reactions']) => void
  index: number | null
  id: number
  isBlocked: boolean
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

  const handleEmojiClick = (reaction: keyof ChatMessage['reactions']): void => {
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
      {selectedEmoji !== null && selectedEmoji !== undefined && (
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
