import React from 'react'

function MessageItem ({ user, message }: { user: boolean | undefined, message: string | undefined }): JSX.Element {
  const isUser = user ?? false

  return (
      <div className={`chat ${isUser ? 'chat-end' : 'chat-start'}`}>
          <div className={`chat-bubble ${isUser ? 'chat-bubble' : 'chat-bubble-primary'}`}>
              {message}
          </div>
    </div>
  )
}

export default MessageItem
