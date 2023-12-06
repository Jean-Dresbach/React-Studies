import { Router } from "./routes/Router"
import GlobalStyle from "./styles/global"
import { ThemeProvider } from "styled-components"
import light from "./themes/light"
// import dark from "./themes/dark"

export function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
