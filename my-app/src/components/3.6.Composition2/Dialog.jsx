import React, { useState } from 'react'

export default function Dialog(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: '1px solid black',
            padding: 24,
            backgroundColor: 'white'
          }}>
          {typeof props.title === "string" ? <h1>{props.title}</h1> : props.title}
          {typeof props.discription === "string" ? <p>{props.discription}</p> : props.discription}
          {typeof props.button === "string" ? <button onClick={() => setIsOpen(false)}>{props.button}</button> :
            <div onClick={() => setIsOpen(false)}>
              {props.button}
            </div>
          }
        </div>
      )}
      {isOpen &&
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 98,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}
        />
      }
    </div>

  )
}
