import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'

export default function TextExample() {

  const [hello, setHello] = useState(false);
  const props = useSpring({
    to: { opacity: 1, color: 'red' },
    from: { opacity: 0, color: 'blue' },
    reset: true,
    reverse: hello,
    delay: 200,
    config: config.molasses,
    onRest: () => setHello(!hello),
  });

  return (
    <div>
      <animated.h1 style={props}>Hello</animated.h1>
    </div>
  )
}
