import { Book } from "../../types"
import { BookItem } from "../BookItem"

interface ListBooksProps {
  books: Book[]
  onUpdate: (book: Book) => void
  bookProperty: string | undefined
}

export function ListBooks({ books, onUpdate, bookProperty }: ListBooksProps) {
  function showBooks() {
    if (bookProperty) {
      const filteredBooks = books.filter(
        book =>
          bookProperty === book.title ||
          bookProperty === book.author ||
          bookProperty === book.genre ||
          bookProperty === book.publishYear.split("-")[0]
      )

      if (filteredBooks.length === 0) {
        return <p className="errorText">Nenhum livro encontrado!</p>
      } else {
        return filteredBooks.map(book => (
          <BookItem key={book.id} book={book} onUpdate={onUpdate} />
        ))
      }
    } else {
      return books.map(book => (
        <BookItem key={book.id} book={book} onUpdate={onUpdate} />
      ))
    }
  }

  return <>{showBooks()}</>
}
