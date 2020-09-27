import React from 'react'
import SignIn from './Components/SignIn/SignIn'
import { auth , db } from './firebase'
import { useAuthState }  from 'react-firebase-hooks/auth'
import MainScreen from './Containers/MainScreen/MainScreen'

import firebase from 'firebase'
import { uuid } from '@jsweb/randkey'
import CreateChatRoom from './Components/CreateChatRoom/CreateChatRoom'

export default function App() {
  const [user] = useAuthState(auth)

  const handleQueryChatRoom = async () => {
    const chatRooms = db.collection('chat-rooms')

    const query = await chatRooms.where('id', '==', '123456789').get()
    const data = [];
    query.forEach(doc => {
      data.push( doc.data() )
    })
    
    console.log(data[0])
  }

  return (
    <div>
      {
        user ? <MainScreen /> : <SignIn />
      }
      <button onClick={() => console.log(user)}>Say user</button>

      <CreateChatRoom />
    </div>
  )
}
