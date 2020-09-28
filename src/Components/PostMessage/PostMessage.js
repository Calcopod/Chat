import React, {useState} from 'react'
import firebase from 'firebase'
import { db } from '../../firebase'
import styles from './PostMessage.module.css'

export default function PostMessage({ chatRoomId, user }) {
  const [msg , setMsg] = useState('')

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
    <>
      <input className={styles.inp} value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button className={styles.btn} onClick={handlePostMessage}>Post message</button>
    </>
  )
}
