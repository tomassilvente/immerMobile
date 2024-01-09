'use client'

import { fetchUser } from '../../server-actions/live-chat/fetchers'
import { useUser } from '../../server-actions/live-chat/userStore'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { shallow } from 'zustand/shallow'
import SearchBar from './SearchBar'
import ChatList from './ChatList'

function Sidebar () {
  const [cookie, setCookie] = useCookies(['user'])
  const { myUser, setUser } = useUser((state) => ({ myUser: state.myUser, setUser: state.setUser }), shallow)
  console.log('myUser:', myUser) // Log the myUser state
  console.log('setUser:', setUser) // Log the setUser function
  useEffect(() => {
    if (cookie.user && myUser === null) { // Only call `fetchUser` if `myUser` is `null`
      fetchUser(cookie, setUser)
    }
  }, [cookie.user, myUser]) // Add `myUser` to the dependency array

  console.log('myUser:', myUser) // Log the myUser data

  return (
      <div className='w-full md:!block sidebar z-10 border-r-2 border-slate-400  md:w-1/2 lg:w-1/3 p-3 bg-white h-screen'>
          {/* SEARCHBAR */}
          <SearchBar user={myUser}/>
          {/* CHATLIST */}
          {(Boolean(myUser)) && <ChatList mySelf={myUser} />}
      </div>
  )
}

export default Sidebar
