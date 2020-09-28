import React, {useState, useEffect} from 'react'
import ChatRoomist from '../../Components/ChatRoomList/ChatRoomist'
import CreateChatRoom from '../../Components/CreateChatRoom/CreateChatRoom'
import JoinChatRoom from '../../Components/JoinChatRoom/JoinChatRoom'
import MessageComp from '../../Components/MessageComp/MessageComp'
import PostMessage from '../../Components/PostMessage/PostMessage'
import { signOut , db} from '../../firebase'
import styles from './MainScreen.module.css'

export default function MainScreen({user}) {
  const [msgs , setMsgs] = useState([])
  const [chatRoomId , setCRID] = useState(' ')

  const fetchData = async () => {
    let chatRoom = db.collection('chat-rooms').doc(chatRoomId)
    const messagesRef = chatRoom.collection('messages').orderBy('sentAt')
    await messagesRef.onSnapshot( querySnapshot => {
      let data = []
      querySnapshot.forEach( doc => {
        data.push(doc.data())
      });
      setMsgs(data)
    })
  }

  useEffect( () => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatRoomId])

  useEffect( () => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <img src="#" alt="logo" className={styles.logo}/>

        <div className={styles.navleft}>
          <JoinChatRoom user={user}/>
          <button onClick={signOut} className={styles.btn}>Sign Out</button>
        </div>
      </nav>
      
      <div className={styles.grid}>
        <div className={styles.chatRooms}>
          <ChatRoomist uid={user.uid} setRoom={setCRID}/>
          <CreateChatRoom />
        </div>

        <div className={styles.chatPannel}>
          <div className={styles.messages}>
            {
              msgs.map( (msg , i) => (
                <MessageComp
                user={user}
                content={msg.content}
                name={msg.name}
                photoURL={msg.photoURL}
                uid={msg.uid}
                key={i}
                />
              ))
            }
          </div>
          <div className={styles.addMessages}>
            <PostMessage user={user} chatRoomId={chatRoomId}/>
          </div>
        </div>
      </div>
    </div>
  )
}
