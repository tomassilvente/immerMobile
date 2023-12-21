// ! Of course is not a good practice to have the same inferfaces in so many places, we have to fix it later

// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import io from 'socket.io-client'
// import UserList from './components/UserList'
// import ChatWindow from './components/ChatWindow'

// interface Message {
//   _id: string
//   senderId: string
//   receiverId: string
//   content: string
//   message: string
// }

// interface Chat {
//   userId: string
//   username: string
//   messages: Message[]
// }

// interface User {
//   _id: string
//   fullName: string
//   email: string
//   image: string
//   is_online: string
//   token: string
// }

// interface Props {
//   user: User | null
// }

// const UserPage: React.FC<Props> = () => {
//   const [receiverId, setReceiverId] = useState<string | null>(null)
//   const [socket, setSocket] = useState<any | null>(null)
//   const [currentChat, setCurrentChat] = useState<Chat | null>(null)
//   const [messageInput, setMessageInput] = useState('')
//   const [users, setUsers] = useState<User[] | null>(null)
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState(true)

//   const isMounted = useRef(true)

//   useEffect(() => {
//     isMounted.current = true

//     return () => {
//       isMounted.current = false
//     }
//   }, [])

//   useEffect(() => {
//     const loginUser = async (): Promise<void> => {
//       try {
//         const response = await fetch(
//           'https://immer-backend-dev-kenx.2.us-1.fl0.io/api/auth/login',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//               email: 'immerentertainment@zohomail.com',
//               password: 'PasswordForTesting123!'
//             })
//           }
//         )

//         if (!response.ok) {
//           throw new Error(`Login error: ${response.statusText}`)
//         }

//         const userData = await response.json()
//         setUser(userData)
//         setLoading(false)
//       } catch (error: any) {
//         console.error('Login error:', error.message)
//       }
//     }

//     if (!user) {
//       loginUser()
//     }

//     if (user) {
//       const socketInstance = io('http://localhost:8000/user-namespace', {
//         auth: {
//           token: user._id || ''
//         }
//       })

//       socketInstance.on('connect', () => {
//         console.log('Connected to server')
//       })

//       socketInstance.on('disconnect', () => {
//         console.log('Disconnected from server')

//         if (isMounted.current) {
//           setSocket(null)
//           setCurrentChat(null)
//         }
//       })

//       socketInstance.on('loadChats', (data) => {
//         setCurrentChat({
//           userId: receiverId || '',
//           username:
//             users?.find((u) => u._id === receiverId)?.fullName || '',
//           messages: data.chats
//         })
//       })

//       socketInstance.on('loadNewChat', (data) => {
//         setCurrentChat((prevChat) => ({
//           ...prevChat,
//           messages: [...prevChat.messages, data]
//         }))
//       })

//       setSocket(socketInstance)

//       return () => {
//         socketInstance.disconnect()
//       }
//     }
//   }, [user, receiverId, users])

//   const fetchUserList = async (): Promise<void> => {
//     try {
//       const response = await fetch(
//         'https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/',
//         {
//           headers: {
//             Authorization: `Bearer ${user?.token || ''}`
//           }
//         }
//       )

//       if (!response.ok) {
//         alert(`Error trying to fetch user list: ${response.statusText}`)
//       }

//       const userListData: User[] = await response.json()
//       setUsers(userListData)
//     } catch (error: any) {
//       console.error('Error trying to fetch user list:', error.message)
//     }
//   }

//   useEffect(() => {
//     if (user) {
//       fetchUserList()
//     }
//   }, [user])

//   useEffect(() => {
//     console.log('Users state:', users)
//   }, [users])

//   const handleUserListClick = (id: string) => {
//     const selectedUser = users?.find((u) => u._id === id)

//     if (selectedUser) {
//       setReceiverId(id)
//       setCurrentChat({
//         userId: id,
//         username: selectedUser.fullName,
//         messages: [] // Inicializar el array de mensajes
//       })

//       if (socket) {
//         socket.emit('existsChat', {
//           sender_id: user?._id,
//           receiver_id: id
//         })
//       }
//     }
//   }

//   const handleSendButtonClick = (): void => {
//     if (socket !== null && receiverId !== null && messageInput.trim() !== '') {
//       socket.emit('newChat', {
//         sender_id: user?._id,
//         receiver_id: receiverId,
//         message: messageInput
//       })

//       const newChatMessage = {
//         sender_id: user?._id,
//         receiver_id: receiverId,
//         message: messageInput
//       }

//       setCurrentChat((prevChat) => ({
//         ...prevChat,
//         messages: [...prevChat.messages, newChatMessage]
//       }))

//       setMessageInput('')
//     }
//   }

//   return (
//     <>
//       {loading
//         ? (
//         <h1>Loading...</h1>
//           )
//         : (
//         <div style={{ marginLeft: '260px' }}>
//           <h1>Users connected {user.user.fullName}</h1>
//           <UserList users={users} handleUserListClick={handleUserListClick} />
//           {currentChat !== null && currentChat !== undefined && (
//             <ChatWindow
//               currentChat={currentChat}
//               messageInput={messageInput}
//               setMessageInput={setMessageInput}
//               handleSendButtonClick={handleSendButtonClick}
//             />
//           )}
//         </div>
//           )}
//     </>
//   )
// }

// export default UserPage

import React from 'react'

function page (): JSX.Element {
  return (
    <div>page</div>
  )
}

export default page
