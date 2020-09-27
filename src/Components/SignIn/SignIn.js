import React from 'react'
import { signIn } from '../../firebase'

export default function SignIn() {
  return (
    <div>
      <button onClick={signIn}>Sign in</button>
    </div>
  )
}
