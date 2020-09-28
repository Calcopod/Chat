import React, { useState , useEffect } from 'react'
import ChatRoomComp from '../ChatRoomComp/ChatRoomComp'
import { db } from '../../firebase'

import styles from './ChatRoomist.module.css'

export default function ChatRoomist({uid, setRoom}) {
  const [chatRooms , setChatRooms] = useState([])
  const chatRoomField = db.collection('users').doc(uid)
  const chatRoomRef = db.collection('chat-rooms')

  useEffect(() => {
    const getUserChatRooms = async () => {
      var data = await (await chatRoomField.get()).data().chatrooms
      data.map( async id => {
        const dataObj = await (await chatRoomRef.doc(id).get()).data()
        setChatRooms(old => [...old , dataObj])
      })
    }

    getUserChatRooms()
  }, [])

  return (
    <div className={styles.main}>
      {
        chatRooms.map( (room,i) => (
          <ChatRoomComp
          link={room.id}
          name={room.name}
          setRoom={setRoom}
          key={i}
          />
        ))
      }
    </div>
  )
}
