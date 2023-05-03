import React from 'react'
import Dialog from './Dialog'

export default function WelcomeDialog() {

  const title = <h1>Welcome</h1>
  const discription = <p>Thank you for visiting our spacecraft!</p>
  const button = <button style={
    { backgroundColor: 'blue' }}>close</button>

  return (
    <Dialog title={title} discription={discription} button={button}></Dialog>
  )
}
