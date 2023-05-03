import React from 'react'
import { createPortal } from 'react-dom';
import ThankyouDialog from './ThankyouDialog';

const Portal = ({ props }) => {
  return createPortal(props.children, document.getElementById('portal'))
};

export default function Example() {

  const handlerClick = () => {
    console.log('click');
  }

  return (
    <div>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: "absolute", top: 0, right: 0, padding: 10, backgroundColor: "while" }}>
        <button onClick={handlerClick}>Click</button>
      </div>

    </div>
  )
}
