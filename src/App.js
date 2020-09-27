import React from 'react'
import { signIn } from './firebase'

export default function App() {
  const handleSignIn = async () => {
    signIn();
  }

  return (
    <div>
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  )
}
