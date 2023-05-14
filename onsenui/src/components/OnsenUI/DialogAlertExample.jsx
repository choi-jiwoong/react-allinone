import React, { useState } from 'react'
import { AlertDialog, Button, AlertDialogButton } from 'react-onsenui'

export default function DialogAlertExample() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Show Dialog</Button>
      <AlertDialog isOpen={isOpen} onCancel={() => setIsOpen(false)} cancelable>
        <div className="alert-dialog-title">Alert</div>
        <div className="alert-dialog-content">This dialog was created from a template</div>
        <div className="alert-dialog-footer">
          <Button className="alert-dialog-button" onClick={() => {
            setIsOpen(false);
            console.log('cancelled');
          }}>Cancel</Button>
          <Button className="alert-dialog-button" onClick={() => {
            setIsOpen(false)
            console.log('OK');
          }}>OK</Button>
        </div>
      </AlertDialog>
    </div>
  )
}
