import React from 'react'
import withLoading from './withLoading'

function Button() {
  return <button style={
    { backgroundColor: 'blue' }}>close</button>

}

export default withLoading(Button);

