import { Book } from "../../types"
import { BookItem } from "../BookItem"

interface ListBooksProps {
  books: Book[]
  onUpdate: (book: Book) => void
}

export function ListBooks({ books, onUpdate }: ListBooksProps) {
  return (
    <>
      {books.map(book => (
        <BookItem key={book.id} book={book} onUpdate={onUpdate} />
      ))}
    </>
  )
}
