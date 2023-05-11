import React, { useState } from 'react'
import styled, { keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';


const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.borderColor};
`;
// Define what props.theme will look like
const defaultTheme = {
  color: "green",
  borderColor: "lime"
};

const redTheme = {
  color: "red",
  borderColor: "tomato"
};

const GlobalStyle = createGlobalStyle`
  button {
    color: blue;
  } 

  button:hover {
    color: red;
  }
`;


export default function StyledComponentsExample2() {

  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
      <Input placeholder="A bigger text input" size="2em" />
      <br />
      {/* Notice we can still use the size attr from Input */}
      <PasswordInput placeholder="A bigger password input" size="2em" />

      <Rotate>&lt; 💅🏾 &gt;</Rotate>

      <br /><br />

      <GlobalStyle>
        <Button>Normal</Button>
      </GlobalStyle>

      <Button onClick={() => setTheme(redTheme)} >Red</Button>
      <Button onClick={() => setTheme(defaultTheme)} >Green</Button>


      <ThemeProvider theme={theme}>
        <Button>Normal</Button>
        <Button>Themed</Button>
      </ThemeProvider>

    </>
  )
}
