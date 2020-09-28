import React, {useState} from 'react'
import { db } from '../../firebase'
import styles from './JoinChatRoom.module.css'

export default function JoinChatRoom({user}) {
  const [inp, setInp] = useState("")

  const checkChatroom = async () => {
    const chatRoom = db.collection('chat-rooms').doc(inp)
    return (await chatRoom.get()).exists
  }

  const handleJoin = async () => {

    if( await checkChatroom() ) {
      const userRef = db.collection('users').doc(user.uid)
      const chatrooms = (await userRef.get()).data().chatrooms
      chatrooms.push(inp)

      userRef.set({
        chatrooms: chatrooms
      }, {merge: true})
    }

    setInp('')
  }

  return (
    <div>
      <input className={styles.inp} placeholder="Enter a chatroom" value={inp} onChange={(e) => setInp(e.target.value)} />
      <button className={styles.btn} onClick={handleJoin}>Join</button>
    </div>
  )
}
