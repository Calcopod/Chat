import React from 'react'
import { signOut } from '../../firebase'

export default function MainScreen() {
  return (
    <div>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}
