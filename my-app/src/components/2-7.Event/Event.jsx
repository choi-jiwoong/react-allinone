import React from 'react'

export default function Event() {

  const handleButtonClick = () => {
    console.log('click');
  }

  const handleMouseLeave = () => {
    console.log('mouse leave');
  }

  const handleClickCapture = () => {
    console.log('click capture');
  }

  const handleClickCapture2 = () => {
    console.log('click capture2');
  }

  const handleClickBubble = () => {
    console.log('click bubble');
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Click</button>
      </div>
    </div>
  )
}
