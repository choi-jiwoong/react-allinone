import React from 'react'

function UserGreeting(props) {
  return (
    <div>
      <h1>Welcome back {props.name && `${props.name},`}</h1>
      <h1>{props.count ? `It's ${props.count} time` : null}</h1>
    </div>
  )
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting name="kimy" count={0} /> : <GuestGreeting />
}


export default function Condtion() {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}
