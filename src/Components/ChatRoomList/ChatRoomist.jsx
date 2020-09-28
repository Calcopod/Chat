import React, { useState , useEffect } from 'react'
import ChatRoomComp from '../ChatRoomComp/ChatRoomComp'
import { db } from '../../firebase'

import styles from './ChatRoomist.module.css'

export default function ChatRoomist({uid, setRoom}) {
  const [chatRooms , setChatRooms] = useState([])

  useEffect(() => {
    const chatRoomField = db.collection('users').doc(uid)
    const chatRoomRef = db.collection('chat-rooms')
    const fetchData = async () => {
      db.collection('users').doc(uid).onSnapshot( async () => {
        var data = await (await chatRoomField.get()).data().chatrooms
        let final = [];
        data.map( async (id, i) => {
          const dataObj = await (await chatRoomRef.doc(id).get()).data()
          final.push(dataObj)
          if ( i === data.length - 1 ) setChatRooms(final)
        })
      })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
