import { Book } from "../../types"
import { BookItem } from "../BookItem"

interface ListBooksProps {
  books: Book[]
}

export function ListBooks({ books }: ListBooksProps) {
  return (
    <>
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  )
}
