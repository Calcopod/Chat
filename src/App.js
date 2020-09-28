import React from 'react'
import SignIn from './Components/SignIn/SignIn'
import { auth } from './firebase'
import { useAuthState }  from 'react-firebase-hooks/auth'
import MainScreen from './Containers/MainScreen/MainScreen'
import CreateChatRoom from './Components/CreateChatRoom/CreateChatRoom'
import JoinChatRoom from './Components/JoinChatRoom/JoinChatRoom'
import PostMessage from './Components/PostMessage/PostMessage'
import ChatRoomist from './Components/ChatRoomList/ChatRoomist'

export default function App() {
  const [user] = useAuthState(auth)

  return (
    <div>
      {
        user ? <MainScreen user={user} chatRoomId="EK7GYA8nDKA1006FuqyC" /> : <SignIn />
      }
      <button onClick={() => console.log(user)}>Say user</button>

      <CreateChatRoom />
      <JoinChatRoom user={user} />
      <PostMessage user={user} chatRoomId="EK7GYA8nDKA1006FuqyC"/>

      {
        user ? <ChatRoomist uid={user.uid}/> : ''
      }
    </div>
  )
}