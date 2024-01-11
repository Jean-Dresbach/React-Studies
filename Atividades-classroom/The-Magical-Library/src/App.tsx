import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"
import light from "./themes/light"
// import dark from "./themes/dark"

import { Header } from "./components/Header"
import { Main } from "./components/Main"

import { BooksProvider } from "./contexts/BooksContext"

export function App() {
  return (
    <ThemeProvider theme={light}>
      <BooksProvider>
        <GlobalStyle />
        <Header />
        <Main />
      </BooksProvider>
    </ThemeProvider>
  )
}
