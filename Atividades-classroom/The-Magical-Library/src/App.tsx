import { useState } from "react"

import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"
import light from "./themes/light"
// import dark from "./themes/dark"

import { Header } from "./components/Header"
import { Main } from "./components/Main"

import { Book } from "./components/Main/types"

export function App() {
  const [books, setBooks] = useState<Book[]>([])

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Main books={books} setBooks={setBooks} />
    </ThemeProvider>
  )
}
