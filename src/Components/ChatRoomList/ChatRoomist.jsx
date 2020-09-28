import React, { useState , useEffect } from 'react'
import { db } from '../../firebase'

export default function ChatRoomist({uid}) {
  const [chatRooms , setChatRooms] = useState([])
  const chatRoom = db.collection('users').doc(uid)

  useEffect(() => {
    const getUserChatRooms = async () => {
      var data = await (await chatRoom.get()).data().chatrooms
      setChatRooms(data);
    }
    getUserChatRooms()
  }, [])

  return (
    <div>
      {
        console.log(chatRooms.join(', '))
      }
    </div>
  )
}
