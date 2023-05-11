/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

const hotpink = css({
  color: 'hotpink'
})

const hotpinkHoverOrFocus = css({
  '&:hover,&:focus': hotpink
})

const hotpinkWithBlackBackground = css(
  {
    backgroundColor: 'black',
    color: 'green'
  },
  hotpink
)


export default function EmotionCompositionExample() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: lightgreen;
          }
        `}
      >
        This is hotpink.
      </div>
      <div>
        <style>
          {`
            .danger {
              color: red;
            }
            .base {
              background-color: lightgray;
              color: turquoise;
            }
        `}
        </style>
        <p className="base danger">What color will this be?</p>
      </div>
      <div>
        <div css={base}>This will be turquoise</div>
        <div css={[danger, base]}>
          This will be also be turquoise since the base styles overwrite the danger
          styles.
        </div>
        <div css={[base, danger]}>This will be red</div>
      </div>
      <div>
        <p css={hotpink}>This is hotpink</p>
        <button css={hotpinkHoverOrFocus}>This is hotpink on hover or focus</button>
        <p css={hotpinkWithBlackBackground}>
          This has a black background and is hotpink. Try moving where hotpink is in
          the css call and see if the color changes.
        </p>
      </div>
    </>
  )
}
