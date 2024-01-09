'use client'
import { useSelectedUser, useUser } from '../../server-actions/live-chat/userStore'
import { PhoneIcon } from '../../server-actions/live-chat/icons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useCookies } from 'react-cookie'
import { io } from 'socket.io-client'

function CallBtn (): JSX.Element {
  const router = useRouter()
  const socket = io('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/')
  const [cookie] = useCookies(['user'])
  const selectedUser = useSelectedUser((state) => state.selectedUser)
  const myUser = useUser((state) => state.myUser)

  function handleClick (): void {
    socket.emit(
      'private message',
      selectedUser.email,
      '📞' + myUser.name + ' is calling ' + selectedUser.name + '📞',
      cookie.user
    )
    router.push('/chat/room')
  }

  return (
      <button onClick={handleClick}>
          <PhoneIcon/>
    </button>
  )
}

export default CallBtn
