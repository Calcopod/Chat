import React, {useState} from 'react'
import firebase from 'firebase'
import { db } from '../../firebase'

export default function PostMessage({ chatRoomId, user }) {
  const [msg , setMsg] = useState()

  const handlePostMessage = async () => {
    const chatRoom = db.collection('chat-rooms').doc(chatRoomId)
    const messagesRef = chatRoom.collection('messages')

    messagesRef.add({
      content: msg,
      sentAt: firebase.firestore.Timestamp.now(),
      name: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid
    })
    
    setMsg('')
  }

  return (
    <div>
      <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows="10" cols="50"></textarea>
      <button onClick={handlePostMessage}>Post message</button>
    </div>
  )
}
