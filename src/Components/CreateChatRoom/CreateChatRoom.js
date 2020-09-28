import React, { useState } from 'react'
import firebase from 'firebase'
import { uuid } from '@jsweb/randkey'
import { db } from '../../firebase'

export default function CreateChatRoom() {
  const [name , setName] = useState('')

  const handleCreateChatRoom = async () => {
    const chatRooms = db.collection('chat-rooms')
    const random = uuid()
    const newRoom = await chatRooms.doc(uuid).set({
      createdAt: firebase.firestore.Timestamp.now(),
      id: random,
      name: name,
    })

    chatRooms.doc(newRoom.id).collection('messages').add({
      initialField: ''
    })

    setName('')
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleCreateChatRoom}>Create Room</button>
    </div>
  )
}
