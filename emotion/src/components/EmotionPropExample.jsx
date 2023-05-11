/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
)

const P = props => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'Sans-Serif',
      color: 'black'
    }}
    {...props} // <- props contains the `className` prop
  />
)

const ArticleText = props => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray'
    }}
    {...props} // <- props contains the `className` prop
  />
)


export default function EmotionInstallExample() {
  return (
    <>
      <div
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen'
          }
        }}
      >
        This has a hotpink background.
      </div>
      <SomeComponent>
        <AnotherComponent />
      </SomeComponent>
      <P>Some text.</P>
      <ArticleText>Some text.</ArticleText>
    </>
  )
}
