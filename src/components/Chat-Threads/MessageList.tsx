/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
// ! I disabled a lot of rules to test it, it should be corrected later (E.M.)

'use client'

import { fetchMessages } from '../../server-actions/live-chat/fetchers'
import { useMessages, useSelectedUser, useUser } from '../../server-actions/live-chat/userStore'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import MessageItem from './MessageItem'
import { io } from 'socket.io-client'

function MessageList (): JSX.Element {
  const sender = useUser((state: any) => state.myUser)
  const reciver = useSelectedUser((state: any) => state.selectedUser)
  const { messages, setMessages } = useMessages((state: any) => ({
    messages: state.messages,
    setMessages: state.setMessages
  }), shallow)

  const [parent] = useAutoAnimate()

  const socket = io('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/')

  socket.on('refresh', () => {
    fetchMessages(sender, reciver, setMessages)
  })

  useEffect(() => {
    fetchMessages(sender, reciver, setMessages)
  }, [reciver])

  return (
      <div ref={parent} className='w-full mb-10 flex flex-col max-h-[75vh] overflow-auto no-scrollbar'>
          {
              messages
                ? messages.map((item: any, i: number) => (
                  // Message Item
            <MessageItem key={i} user={sender.email === item.sender} message={item.message}/>
                )) : ''
          }
    </div>
  )
}

export default MessageList
