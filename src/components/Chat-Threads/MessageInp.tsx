'use client'
import { useSelectedUser } from '../../server-actions/live-chat/userStore'
import { SendMsIcon, SmileFaceIcon } from '../../server-actions/live-chat/icons'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { io } from 'socket.io-client'

const Picker = dynamic(
  async () => {
    return await import('emoji-picker-react')
  },
  { ssr: false }
)

function MessageInp (): JSX.Element {
  const [inpValue, setInpValue] = useState<string>('')
  const [showEmojies, setShowEmojies] = useState<boolean>(false)
  const selectedUser = useSelectedUser((state) => state.selectedUser)
  // ! I am not sure about this, it should be reviewed
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, setCookie] = useCookies(['user'])
  const socket = io('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/')

  function handleSubmit (e: { preventDefault: () => void }): void {
    e.preventDefault()
    socket.emit('private message', selectedUser.email, inpValue, cookie.user)
    setInpValue('')
  }

  function onEmojiClick (emojiObject: { emoji: string }): void {
    setInpValue(pre => pre + emojiObject.emoji)
  }

  return (
    <form className="mt-auto relative" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Message"
          className="input w-full pl-14 input-bordered"
          onChange={(e) => { setInpValue(e.target.value) }}
          value={inpValue}
        />
      </div>
      <button
        type="button"
        onClick={() => { setShowEmojies(!showEmojies) }}
        className="absolute top-1/2 left-5 -translate-y-1/2">
        <SmileFaceIcon />
      </button>
      {showEmojies && (
        <div className="absolute bottom-full">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <button
        type="submit"
        className="absolute top-1/2 right-5 -translate-y-1/2">
        <SendMsIcon />
      </button>
    </form>
  )
}

export default MessageInp
