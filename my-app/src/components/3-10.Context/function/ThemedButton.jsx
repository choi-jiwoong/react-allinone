import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemedButton(props) {

  const theme = useContext(ThemeContext);

  return (
    <div>
      <button
        {...props}
        onClick={props.changeTheme}
        style={{
          backgroundColor: theme.background,
          color: theme.foreground
        }}
      >ThemedButton
      </button>
    </div>
  )
}
