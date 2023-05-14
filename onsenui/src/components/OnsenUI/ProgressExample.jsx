import React, { useState } from 'react'
import { Toolbar, ProgressBar, ProgressCircular, Toast, Button } from 'react-onsenui'

export default function ProgressExample() {

  const [open, setOpen] = useState(false);


  return (
    <>

      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast isOpen={open}>hi</Toast>


      <ProgressBar value="10"></ProgressBar>

      <ProgressBar indeterminate></ProgressBar>

      <ProgressCircular indeterminate></ProgressCircular>

      <ProgressCircular value="30" secondaryValue="50"></ProgressCircular>
    </>
  )
}
