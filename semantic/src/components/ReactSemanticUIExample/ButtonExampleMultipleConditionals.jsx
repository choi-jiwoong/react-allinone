import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleMultipleConditionals = () => (
  <Button.Group>
    <Button>One</Button>
    <Button.Or text="또는" />
    <Button>Two</Button>
    <Button.Or />
    <Button>Three</Button>
  </Button.Group>
)

export default ButtonExampleMultipleConditionals