import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/global"
import light from "./themes/light"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
// import dark from "./themes/dark"

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  )
}
