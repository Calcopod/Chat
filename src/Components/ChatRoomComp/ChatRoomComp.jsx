import React from 'react'
import styles from './ChatRoomComp.module.css'

export default function ChatRoomComp({name, setRoom , link}) {
  const handleClick = () => setRoom(link)

  return (
    <div onClick={handleClick} className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
    </div>
  )
}
