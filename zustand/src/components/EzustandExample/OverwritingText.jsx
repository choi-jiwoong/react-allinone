import React from 'react'
import create from 'zustand'

const useStore = create(set => ({
  fontSize: 14,
  increaseFontSize: () => set(state => ({ fontSize: state.fontSize + 1 })),
  decreaseFontSize: () => set(state => ({ fontSize: state.fontSize - 1 })),
  trigger: false,
  toggleTrigger: () => set(state => ({ trigger: !state.trigger }), true),
}))

export default function OverwritingText() {

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
    );

  return (
    <>
      <div>Font size: {fontSizeLablel}</div>
      <p style={{ fontSize }} > This text will increase in size too </p >
      <button onClick={increaseFontSize}>Increase font size</button>
      <button onClick={toggleTrigger}>Toggle trigger : {trigger.toString()} </button>
    </>);

}
