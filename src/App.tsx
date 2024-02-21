import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssuesContextProvider } from './contexts/IssuesContext'
import { Router } from './Router'
import { defaultTheme } from './styles/theme/deafultTheme'
import { GlobalStyle } from './styles/globalStyle'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <IssuesContextProvider>
          <Router />
        </IssuesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
