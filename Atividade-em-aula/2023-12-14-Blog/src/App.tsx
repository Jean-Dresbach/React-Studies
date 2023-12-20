import { ThemeProvider } from "styled-components"

import { Router } from "./routes/Router"
import GlobalStyle from "./styles/global"
import light from "./themes/light"
// import dark from "./themes/dark"

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}
