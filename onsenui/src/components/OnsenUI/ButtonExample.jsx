import React from 'react'
import { Button } from 'react-onsenui'

export default function ButtonExample() {

  const handleClick = () => {
    alert('You tapped me!');
  };

  return (
    <>
      <Button onClick={handleClick} modifier="large--cta">
        Tap Me
      </Button>
      <br />
      <Button onClick={handleClick} disabled={true}>
        Disabled
      </Button>

      <Button onClick={handleClick} ripple={true}>
        Ripple
      </Button>

      <Button onClick={handleClick} modifier="light">
        Light
      </Button>

      <Button onClick={handleClick} modifier="quiet">
        Quiet
      </Button>

      <Button onClick={handleClick} modifier="cta">
        Cta
      </Button>

      <Button onClick={handleClick} modifier="large">
        Large
      </Button>

      <Button onClick={handleClick} modifier="large--quiet">
        Large--quiet
      </Button>

      <Button onClick={handleClick} modifier="large--cta">
        Large--cta
      </Button>

      <Button onClick={handleClick} modifier="material">
        Material
      </Button>

      <Button onClick={handleClick} modifier="material--flat">
        Material--flat
      </Button>
    </>
  )
}
