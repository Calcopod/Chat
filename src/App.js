import React from 'react'
import firebase from 'firebase'
import { useAuthState }  from 'react-firebase-hooks/auth'
import { signIn , signOut , auth } from './firebase'

export default function App() {
  const [user] = useAuthState(auth)

  return (
    <div>
      <button onClick={signIn}>Sign in</button>
      <button onClick={signOut}>Sign out</button>
      {
        user ? <h1>logged in</h1> : <h1>not logged in</h1>
      }
      <button onClick={() => console.log(user)}>Say user</button>
    </div>
  )
}
