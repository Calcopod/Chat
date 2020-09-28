import React from 'react'

export default function MessageComp({user , name , content, photoURL, uid}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{content}</h2>
      <img src={photoURL} alt="img" />
    </div>
  )
}
