import React from 'react'
import { type ChatData, type Dataset } from '../../types/support.interfaces'

const Chat = ({ chat }: ChatData): JSX.Element => {
  return (
        <div className="mb-7 mx-auto">
            <div className={`p-4 w-fit max-w-[75%] ${chat.byUser ? 'ml-auto rounded-l-lg rounded-tr-lg bg-primary text-white' : 'bg-white text-black rounded-r-lg rounded-tl-lg'}`}>
                {chat.msg}
            </div>
            <p className={`text-xs p-1 w-fit ${chat.byUser ? 'ml-auto' : ' '}`}>
                {chat.time}
            </p>
        </div>
  )
}

const Chats = ({ dataset }: Dataset): JSX.Element => {
  return (
        <div className="px-2.5 py-7">
            {dataset.map((item, index) => (
                <Chat key={index} chat={item} />
            ))}
        </div>
  )
}

export default Chats
