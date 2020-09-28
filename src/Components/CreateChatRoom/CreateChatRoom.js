import React, { useState } from 'react'
import firebase from 'firebase'
import { uuid } from '@jsweb/randkey'
import { db } from '../../firebase'

export default function CreateChatRoom() {
  const [name , setName] = useState('')

  const copyToClipboard = text => {
    var input = document.body.appendChild(document.createElement("input"));
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
  }

  const handleCreateChatRoom = async () => {
    const chatRooms = db.collection('chat-rooms')
    const random = uuid()
    await chatRooms.doc(random).set({
      createdAt: firebase.firestore.Timestamp.now(),
      id: random,
      name: name,
    })

    setName('')
    copyToClipboard(random)
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleCreateChatRoom}>Create Room</button>
    </div>
  )
}
