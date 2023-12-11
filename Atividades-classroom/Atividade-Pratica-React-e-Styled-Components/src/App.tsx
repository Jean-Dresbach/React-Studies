import { Router } from "./routes/Router"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/global"
import ligth from "./themes/ligth"
import dark from "./themes/dark"

export function App() {
  return (
    <ThemeProvider theme={ligth}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}
