export interface userProps {
  _id: string | undefined
  imageId: string | undefined
  name: string | undefined
  email: string | undefined
  messages: any[]
}

export interface ChatListProps {
  reverse: () => any
  filter: (arg0: (arg: any) => any) => any
  map: (arg0: (user: any) => React.JSX.Element) => React.ReactNode
  _id: string | undefined
  imageId: string | undefined
  name: string | undefined
  email: string | undefined
}

export interface selectedUserState {
  selectedUser: undefined | any
  setSelectedUser: (user: any) => void
}
export interface userState {
  myUser: undefined | any
  setUser: (user: any) => void
}

export interface AvatarProps {
  avatarId: string
  setAvatarId: (id: string) => void
}

// ! It is possible that we need to modify the parameters of here
interface Message {
  message: string
}

interface Chat {
  username: string
  messages: Message[]
}

interface ChatWindowProps {
  currentChat?: Chat
  messageInput: string
  setMessageInput: (input: string) => void
  handleSendButtonClick: () => void
}

export type { ChatWindowProps }

interface User {
  _id: string
  image: string
  fullName: string
  email: string
  is_online: string
}

interface Users {
  docs: User[]
}

interface UserListProps {
  users?: Users
  handleUserListClick: (id: string) => void
}

export type { UserListProps }
