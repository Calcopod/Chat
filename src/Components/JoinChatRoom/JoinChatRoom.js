import React, {useState} from 'react'
import { db } from '../../firebase'

export default function JoinChatRoom({user}) {
  const [inp, setInp] = useState("")

  const checkChatroom = async () => {
    const chatRooms = db.collection('chat-rooms')

    const query = await chatRooms.where('id', '==', inp).get()
    const data = [];
    query.forEach(doc => {
      data.push( doc.data() )
    })
    
    if(typeof data[0] !== 'undefined') return true
    return false
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
      <input placeholder="Enter a chatroom" value={inp} onChange={(e) => setInp(e.target.value)} />
      <button onClick={handleJoin}>Join</button>
    </div>
  )
}
