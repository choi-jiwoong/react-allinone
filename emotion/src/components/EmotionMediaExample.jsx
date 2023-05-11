/** @jsxImportSource @emotion/react */
import { ClassNames, Global, css } from '@emotion/react'

let SomeComponent = props => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
)

export default function EmotionMediaExample() {
  return (
    <div>
      <Global
        styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
      />
      <div className="some-class">This is hotpink now!</div>
      <p
        css={css`
          font-size: 30px;
          @media (min-width: 420px) {
            font-size: 50px;
          }
        `}
      >
        Some text!
      </p>
      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent
            wrapperClassName={css({ color: 'green' })}
            className={css`
          color: hotpink;
        `}
          >
            from children!!
          </SomeComponent>
        )}
      </ClassNames>
    </div>
  )
}