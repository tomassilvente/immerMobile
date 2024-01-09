import { type userProps } from '../../types/live-chat.interfaces'

export async function handleSubmit (e: any, router: any, avatarId: string, socket: any): Promise<void> {
  e.preventDefault()
  console.log(e.target[1].value)
  try {
    await fetch('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/users/auth', {
      method: 'POST',
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        imageId: `https://robohash.org/${avatarId}.png`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    socket.emit('joined', 'new user')
    router.push('/chat')
  } catch (err) {
    console.log(err)
  }
}

export async function fetchUser (cookie: { user?: any }, setUser: { (user: any): void, (arg0: any): void }): Promise<void> {
  const accessToken = cookie.user
  const response = await fetch('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/users/user', {
    method: 'GET',
    headers: {
      Authorization: `${accessToken}`
    }
  })
  const user = await response.json()
  console.log('Fetched user:', user)
  setUser(user)
  console.log('User set:', user)
}

export async function fetchUsers (mySelf: userProps, setUsers: any): Promise<void> {
  const data = await fetch('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/users/users')
  const myUsers = await data.json()
  setUsers(myUsers.filter((user: any) => user.email !== mySelf?.email))
}

export async function fetchMessages (sender: any, reciever: any, setMessages: any): Promise<void> {
  if ((Boolean(sender)) && (Boolean(reciever))) {
    try {
      const res = await fetch(`https://server-chat-immer-dev-tksm.3.us-1.fl0.io/users/messages?sender=${sender?.email}&reciever=${reciever?.email}`)
      const data = await res?.json()
      setMessages(data)
    } catch (err) {
      console.log(err)
      setMessages(null)
    }
  }
}
