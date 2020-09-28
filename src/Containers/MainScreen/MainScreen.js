import React, {useState, useEffect} from 'react'
import ChatRoomist from '../../Components/ChatRoomList/ChatRoomist'
import MessageComp from '../../Components/MessageComp/MessageComp'
import { signOut , db} from '../../firebase'
import styles from './MainScreen.module.css'

export default function MainScreen({user}) {
  const [msgs , setMsgs] = useState([])
  const [chatRoomId , setCRID] = useState('s')

  const chatRoom = db.collection('chat-rooms').doc(chatRoomId)
  const messagesRef = chatRoom.collection('messages').orderBy('sentAt')

  useEffect( () => {
    const fetchData = async () => {;
      await messagesRef.onSnapshot( querySnapshot => {
        querySnapshot.forEach( doc => {
          setMsgs(old => [...old , doc.data()])
        });
      })
    }
    fetchData()
  }, [])

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <img src="#" alt="logo" className={styles.logo}/>

        <button onClick={signOut} className={styles.btn}>Sign Out</button>
      </nav>
      
      <div className={styles.grid}>
        <div className={styles.chatRooms}>
          <ChatRoomist uid={user.uid} setRoom={setCRID}/>
        </div>

        <div className={styles.chatPannel}>
a
        </div>
      </div>

    </div>
  )
}
