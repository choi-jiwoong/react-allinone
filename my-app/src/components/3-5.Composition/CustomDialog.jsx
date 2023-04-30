import React from 'react'
import Dialog from './Dialog'

export default function CustomDialog(props) {
  return (
    <div>
      <Dialog>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </Dialog>
    </div>
  )
}
