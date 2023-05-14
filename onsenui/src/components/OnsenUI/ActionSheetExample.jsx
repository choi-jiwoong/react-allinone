import React, { useState } from 'react'
import { Button, ActionSheet, ActionSheetButton } from 'react-onsenui'


export default function ActionSheetExample() {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Tap Me
      </Button>
      <ActionSheet isOpen={open}>
        <ActionSheetButton onClick={() => console.log('clicked A')}>
          Label A
        </ActionSheetButton>
        <ActionSheetButton onClick={() => console.log('clicked B')}>
          Label B
        </ActionSheetButton>
        <ActionSheetButton onClick={() => console.log('clicked C')}>
          Label C
        </ActionSheetButton>
        <ActionSheetButton modifier="destructive">
          Cancel
        </ActionSheetButton>
        <ActionSheetButton>
          Save
        </ActionSheetButton>
      </ActionSheet>
    </div>
  )
}
