import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, fatchIncrement } from './counterSlice'
//import styles from './Counter.module.css'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()



  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Fatch Increment value"
          onClick={() => dispatch(fatchIncrement(count))}>Fatch Increment</button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>


        <button onClick={() => dispatch(incrementByAmount(5))}>+5
        </button>
      </div>
    </div>
  )
}