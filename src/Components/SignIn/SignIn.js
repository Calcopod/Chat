import React from 'react'
import { signIn } from '../../firebase'

import styles from './SignIn.module.css'

export default function SignIn() {
  return (
    <div className={styles.wallpaper}>
      <button className={styles.btn} onClick={signIn}>Sign in</button>
    </div>
  )
}
