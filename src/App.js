import React from 'react'
import SignIn from './Components/SignIn/SignIn'
import { auth } from './firebase'
import { useAuthState }  from 'react-firebase-hooks/auth'
import MainScreen from './Containers/MainScreen/MainScreen'

export default function App() {
  const [user] = useAuthState(auth)

  return (
    <div>
      {
        user ? <MainScreen user={user} chatRoomId="EK7GYA8nDKA1006FuqyC" /> : <SignIn />
      }

    </div>
  )
}