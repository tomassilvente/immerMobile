export interface Message {
  _id: string
  senderId: string
  receiverId: string
  content: string
  message: string
}

export interface Chat {
  userId: string
  username: string
  messages: Message[]
}

export interface ChatWindowProps {
  currentChat: Chat | null
  messageInput: string
  setMessageInput: React.Dispatch<React.SetStateAction<string>>
  handleSendButtonClick: () => void
}

export interface User {
  _id: string
  fullName: string
  email: string
  image: string
  is_online: string
  token: string
  docs: any
}

export interface UserListProps {
  users: { docs: User[] } | null
  handleUserListClick: (id: string) => void
}
