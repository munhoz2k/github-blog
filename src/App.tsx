import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'
import { defaultTheme } from './styles/theme/deafultTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
