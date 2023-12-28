'use client'

import React, { useState } from 'react'
import ChatWindow from '../../components/LiveChatParticipation/ChatWindow'
import UserInfo from '../../components/LiveChatParticipation/UserInfo'
import BackButton from '../../components/_common/buttons/BackButton'
import ChatMessageModal from '../../components/LiveChatParticipation/modals/ChatMessageModal'
<<<<<<< HEAD
import { type ChatMessage } from '../../components/LiveChatParticipation/types'
=======
import { type ChatMessage } from '../../types/livechatparticipation.interfaces'
>>>>>>> pay-per-view

const Home: React.FC = () => {
  // State for tracking whether the user has liked the content
  const [isLiked, setIsLiked] = useState(false)

  // State for managing blocked messages
  const [blockedMessages, setBlockedMessages] = useState<number[]>([])

  // State for storing chat messages
  const [messages, setMessages] = useState<ChatMessage[]>([
    // Example messages with user information, content, and reactions
    {
      content: 'This show is awesome! 😂',
      user: {
        id: 100,
        name: 'Alice',
        image: 'https://via.placeholder.com/150'
      },
      reportCount: 0,
      isBlocked: false,
      reactions: {
        thumbsUp: 0,
        fire: 1,
        laughingFace: 0
      }
    },
    {
      content: 'Best concert ever! 🔥',
      user: {
        id: 101,
        name: 'Bob',
        image: 'https://via.placeholder.com/150'
      },
      reportCount: 0,
      isBlocked: false,
      reactions: {
        thumbsUp: 1,
        fire: 0,
        laughingFace: 0
      }
    },
    {
      content: '🔥',
      user: {
        id: 102,
        name: 'Jordan',
        image: 'https://via.placeholder.com/150'
      },
      reportCount: 0,
      isBlocked: false,
      reactions: {
        thumbsUp: 1,
        fire: 0,
        laughingFace: 0
      }
    }

    // Add more messages as needed
  ])

  // State for storing user information
  const user = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150'
  }
  // const [user, setUser] = useState({
  //   name: 'John Doe',
  //   image: 'https://via.placeholder.com/150'
  // })

  // State for managing the modal's open/close status
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State for tracking report success and displaying a success message
  const [reportSuccess, setReportSuccess] = useState(false)

  // State for tracking the ID and index of the selected message for the modal
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(
    null
  )
  const [selectedMessageIndex, setSelectedMessageIndex] = useState<
  number | null
  >(null)

  // Function to toggle the like status
  const toggleLike = (): void => {
    setIsLiked(!isLiked)
  }

  // Function to update messages in the chat window
  const updateMessages = (newMessage: ChatMessage): void => {
    setMessages([...messages, newMessage])
  }

  // Function to open the modal for a specific message
  const openModal = (id: number, index: number): void => {
    setSelectedMessageId(id)
    setSelectedMessageIndex(index)
    setIsModalOpen(true)
  }

  // Function to close the modal
  const closeModal = (): void => {
    setSelectedMessageId(null)
    setIsModalOpen(false)
  }

  // Function for handling the report action in the modal
  const handleModalReport = (id: number): void => {
    console.log('Reporting message with id', id)
    setReportSuccess(true)
    closeModal()
    setTimeout(() => { setReportSuccess(false) }, 3000) // Reset after 3 seconds
  }

  // Function for handling the block action in the modal
  const handleModalBlock = (id: number): void => {
    const updatedBlockedMessages = [...blockedMessages, id]
    console.log('Blocked Messages: ', id, updatedBlockedMessages)
    setBlockedMessages(updatedBlockedMessages)
    closeModal()
  }

  // Function for handling reactions in the modal
  const handleModalReact = (
    index: number,
    reaction: keyof ChatMessage['reactions']
  ): void => {
    const updatedMessages = [...messages]
    const reactedMessage = { ...updatedMessages[index] }
    reactedMessage.reactions[reaction]++
    updatedMessages[index] = reactedMessage
    setMessages(updatedMessages)
    closeModal()
  }

  // Filter messages to exclude blocked ones
  const filteredMessages = messages.filter(
    (message) => !blockedMessages.includes(message.user.id)
  )

  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-start p-2 flex-grow w-full">
      {reportSuccess && (
        <div className="fixed top-0 left-0 right-0 flex items-center mt-10 text-green-500 justify-center p-3 rounded-md text-center">
          Message has successfully been reported, thank you!
        </div>
      )}
      <div className="mb-2 flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="mr-2">
            <BackButton />
          </div>
          <div className="flex items-center">
            <UserInfo userName={user.name} userImage={user.image} />
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col-reverse w-full">
        <div className="message-container ">
          {filteredMessages.map((message, index) => (
            <div key={index} className="flex items-start flex-col ">
              <div className="flex rounded-full items-center pr-3 pl-1 bg-gray-200">
                <img
                  src={message.user.image}
                  alt="User"
                  className="user-image rounded-full h-12 w-12 mr-2"
                />
                <div className="bg-gray-200 p-1 pr-2 rounded-full chat-message-box">
                  <span className="text-black font-semibold ">
                    {message.user.name}
                  </span>
                  <p className="text-gray-800 whitespace-normal">
                    <button onClick={() => { openModal(message.user.id, index) }}>
                      {message.content}
                    </button>
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-10 mb-4 text-xs text-white font-semibold">
                {Object.entries(message.reactions).map(([emoji, count]) => (
                  <span key={emoji} className="">
                    {count > 0 && (
                      <span
                        role="img"
                        aria-label={emoji}
                        className="rounded-full p-2 ml-1 bg-gray-500"
                      >
                        {count}
                        {emoji === 'thumbsUp' && '👍'}
                        {emoji === 'fire' && '🔥'}
                        {emoji === 'laughingFace' && '😂'}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full">
        <ChatWindow onMessage={updateMessages} />
        <button
          className={`like-button bg-white pl-2 pr-2 rounded-full ml-2 ${
            isLiked ? 'text-orange-500' : 'text-black'
          }`}
          onClick={toggleLike}
          style={{ fontSize: '24px' }}
        >
          &#10084;
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMessageId !== null && (
        <ChatMessageModal
          message={messages[selectedMessageId]}
          onClose={closeModal}
          onReport={handleModalReport}
          onBlock={handleModalBlock}
          onReact={handleModalReact}
          index={selectedMessageIndex}
          id={selectedMessageId}
          isBlocked={blockedMessages.includes(selectedMessageId)}
        />
      )}
    </main>
  )
}

export default Home
