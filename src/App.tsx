import { ThemeProvider } from 'styled-components'
import { Router } from './Routes'
import { defaultTheme } from './styles/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
    
  )
}
