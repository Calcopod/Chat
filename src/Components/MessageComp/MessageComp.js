import React from 'react'
import styles from './MessageComp.module.css'

export default function MessageComp({user , name , content, photoURL, uid}) {
  return (
    <div className={`${styles.message} ${user.uid === uid ? styles.sent : styles.recieved}`}>
      <img className={styles.image} src={photoURL} alt="img" />
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.msg}>{content}</p>
      </div>
    </div>
  )
}
