import React, {useState, useEffect} from 'react'
import MessageComp from '../../Components/MessageComp/MessageComp'
import { signOut , db} from '../../firebase'

export default function MainScreen({chatRoomId, user}) {
  const [msgs , setMsgs] = useState([])

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
    <div>
      <button onClick={signOut}>Sign out</button>
      <button onClick={() => console.log(msgs)}>Clik</button>

      {
        msgs.map( (msg , i) => (
          <MessageComp
          content={msg.content}
          name={msg.name}
          photoURL={msg.photoURL}
          uid={msg.uid}
          user={user}
          key={i}
          />
        ) )
      }
      
    </div>
  )
}
