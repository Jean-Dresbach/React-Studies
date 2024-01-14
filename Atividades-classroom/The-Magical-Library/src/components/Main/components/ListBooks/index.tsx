import { Book } from "../../types"
import { BookItem } from "../BookItem"

interface ListBooksProps {
  books: Book[]
  onUpdate: (book: Book) => void
  bookProperty: string
}

export function ListBooks({ books, onUpdate, bookProperty }: ListBooksProps) {
  function handleFilterBooks(book: Book) {
    const excludedProperties = ["id", "registerDate"]

    let searchString = ""

    Object.keys(book).forEach(item => {
      const key = item as keyof Book

      if (!excludedProperties.some(i => key === i)) {
        searchString += book[key]
      }
    })
    return searchString.includes(bookProperty)
  }

  function showBooks() {
    if (bookProperty) {
      const filteredBooks = books.filter(book => handleFilterBooks(book))

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

  return showBooks()
}
