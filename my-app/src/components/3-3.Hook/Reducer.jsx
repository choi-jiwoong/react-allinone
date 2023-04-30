import React, { useReducer } from 'react'

export default function Reducer() {

  const intialCount = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'reset':
        return intialCount;
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, intialCount);

  return (
    <div>
      Count {state.count} <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>-1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>+1</button>
    </div >
  )
}
