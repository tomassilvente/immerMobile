/* eslint-disable @typescript-eslint/no-floating-promises */
// ! It is not a good practise to disable the eslint rules, but this file is in test mode (E.M.)

'use client'
import { fetchUsers } from '../../server-actions/live-chat/fetchers'
import { useAllUsers } from '../../server-actions/live-chat/userStore'
import { type userProps } from '../../types/live-chat.interfaces'
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import ChatItem from './ChatItem'
import { io } from 'socket.io-client'

function ChatList ({ mySelf }: { mySelf: userProps }): JSX.Element {
  const { users, setUsers } = useAllUsers(
    (state: any) => ({ users: state.users, setUsers: state.setUsers }),
    shallow
  )
  const socket = io('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/')
  useEffect(() => {
    socket.on('new-user', () => {
      fetchUsers(mySelf, setUsers)
    })
  }, [])

  useEffect(() => {
    fetchUsers(mySelf, setUsers)
  }, [])
  return (
    <ul className='my-5 flex flex-col'>
      {/* ChatItem */}
      {
        users != null && users.length > 0 && users !== undefined
          ? (
              users?.reverse()?.map((user: any) => <ChatItem key={user._id} user={user}/>)

            )
          : (
            <span className='loading loading-ring w-16'></span>
            )
      }
    </ul>
  )
}

export default ChatList
