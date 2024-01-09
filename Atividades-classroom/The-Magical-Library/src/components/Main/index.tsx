import { useState } from "react"
import { Book } from "./types"

import { BookItem } from "./components/BookItem"
import { BookForm } from "./components/Form"
import { ContainerBanner, ContainerBooks, Wrapper } from "./styles"
import { ListBooks } from "./components/ListBooks"

const emptyBook: Book = {
  id: 0,
  title: "",
  author: "",
  description: "",
  genre: "",
  publishYear: "",
  registerDate: ""
}

interface MainProps {
  books: Book[]
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

export function Main({ books, setBooks }: MainProps) {
  const [book, setBook] = useState<Book>(emptyBook)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setBook(prevState => ({ ...prevState, [name]: value }))
  }

  function saveBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (book.id !== 0) {
    } else {
      setBooks(prevState => [
        ...prevState,
        {
          ...book,
          registerDate: new Date().toISOString().split("T")[0],
          id: Date.now()
        }
      ])
    }
  }

  return (
    <Wrapper>
      <BookForm book={book} onChange={handleChange} onSubmit={saveBook} />

      <ContainerBanner>
        <h2>Estante</h2>
      </ContainerBanner>

      <ContainerBooks>
        <ListBooks books={books} />
      </ContainerBooks>
    </Wrapper>
  )
}
