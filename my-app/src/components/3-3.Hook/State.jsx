import React, { useState } from 'react'

export default function State() {

  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  return (
    <div>
      Count {count} <br />
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={() => setCount(prev => prev - 1)}>-1</button>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
    </div >
  )
}
