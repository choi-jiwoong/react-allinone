import React from 'react'
import create from 'zustand'

const useStore = create(set => ({
  fontSize: 14,
  increaseFontSize: () => set(state => ({ fontSize: state.fontSize + 1 })),
  decreaseFontSize: () => set(state => ({ fontSize: state.fontSize - 1 })),
  trigger: false,
  toggleTrigger: () => set(state => ({ trigger: !state.trigger })),
}))

function FontLabel() {
  const { fontSize, increaseFontSize, fontSizeLablel, trigger, toggleTrigger } =
    useStore(
      (state) =>
      ({
        fontSize: state.fontSize,
        increaseFontSize: state.increaseFontSize,
        fontSizeLablel: state.fontSize + 'px',
        trigger: state.trigger,
        toggleTrigger: state.toggleTrigger,
      }),
      (oldState, newState) => oldState.trigger === newState.trigger
    );

  return (
    <>
      <div>Font size: {fontSizeLablel}</div>
      <p style={{ fontSize }} > This text will increase in size too </p >
      <button onClick={increaseFontSize}>Increase font size</button>
      <button onClick={toggleTrigger}>Toggle trigger : {trigger.toString()} </button>
    </>);

}

export default function Text() {

  const fontSize = useStore(state => state.fontSize)
  const increaseFontSize = useStore(state => state.increaseFontSize)
  const decreaseFontSize = useStore(state => state.decreaseFontSize)

  return (
    <>
      <p style={{ fontSize }} > This text will increase in size too </p >
      <button onClick={increaseFontSize}>Increase font size</button>
      <button onClick={decreaseFontSize}>Decrease font size</button>
      <FontLabel />
    </>
  )
}
