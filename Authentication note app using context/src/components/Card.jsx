import React from 'react'
import NoteContext from '../context/NoteContext'

const Card = ({ note }) => {

  return (
    <div>
       <h1>{note.title}</h1>
       <p>{note.details}</p>
    </div>
  )
}

export default Card
