import React from 'react'
import SignIn from './Components/SignIn/SignIn'
import { auth , db } from './firebase'
import { useAuthState }  from 'react-firebase-hooks/auth'
import MainScreen from './Containers/MainScreen/MainScreen'
import CreateChatRoom from './Components/CreateChatRoom/CreateChatRoom'
import JoinChatRoom from './Components/JoinChatRoom/JoinChatRoom'

export default function App() {
  const [user] = useAuthState(auth)
  
  return (
    <div>
      {
        user ? <MainScreen /> : <SignIn />
      }
      <button onClick={() => console.log(user)}>Say user</button>

      <CreateChatRoom />
      <JoinChatRoom user={user} />
    </div>
  )
}
