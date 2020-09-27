import React from 'react'
import SignIn from './Components/SignIn/SignIn'
import { auth , db } from './firebase'
import { useAuthState }  from 'react-firebase-hooks/auth'
import MainScreen from './Containers/MainScreen/MainScreen'

export default function App() {
  const [user] = useAuthState(auth)

  const handleAddChatRoom = async () => {
    
  }

  return (
    <div>
      {
        user ? <MainScreen /> : <SignIn />
      }
      <button onClick={() => console.log(user)}>Say user</button>

      <button onClick={handleAddChatRoom}>Create chat room</button>
    </div>
  )
}
