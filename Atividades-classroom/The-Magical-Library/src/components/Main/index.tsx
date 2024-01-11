import { useState } from "react"
import { Book } from "./types"

import { BookForm } from "./components/Form"
import { ContainerBanner, ContainerBooks, Wrapper } from "./styles"
import { ListBooks } from "./components/ListBooks"
import { useBooks } from "../../contexts/BooksContext"

const emptyBook: Book = {
  id: 0,
  title: "",
  author: "",
  description: "",
  genre: "",
  publishYear: "",
  registerDate: ""
}

export function Main() {
  const { books, addBook, setBooks } = useBooks()
  const [book, setBook] = useState<Book>(emptyBook)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setBook(prevState => ({ ...prevState, [name]: value }))
  }

  function saveBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (book.id !== 0) {
      const newBooks = [...books]
      const bookIdx = books.findIndex(b => b.id === book.id)
      newBooks[bookIdx] = book
      setBooks(newBooks)
    } else {
      addBook({
        ...book,
        registerDate: new Date().toISOString().split("T")[0],
        id: Date.now()
      })
    }

    setBook(emptyBook)
  }

  return (
    <Wrapper>
      <BookForm book={book} onChange={handleChange} onSubmit={saveBook} />

      <ContainerBanner>
        <h2>Estante</h2>
      </ContainerBanner>

      <ContainerBooks>
        <ListBooks books={books} onUpdate={setBook} />
      </ContainerBooks>
    </Wrapper>
  )
}
