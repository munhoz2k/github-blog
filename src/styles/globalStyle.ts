import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    background: ${(props) => props.theme['base-background']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }

  body, input, textarea, button {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
  }

  // Media Queries
  @media (max-width: 768px) {
    html {
      font-size: 75%;
    } 
  }
`
