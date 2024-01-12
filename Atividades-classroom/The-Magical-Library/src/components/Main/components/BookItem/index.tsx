import { useState } from "react"
import { useBooks } from "../../../../contexts/BooksContext"

import { Book } from "../../types"
import { Wrapper } from "./styles"
import editImg from "../../../../assets/edit.png"
import deleteImg from "../../../../assets/trash-can.png"

interface BookItemProps {
  book: Book
  onUpdate: (book: Book) => void
}

export function BookItem({ book, onUpdate }: BookItemProps) {
  const [flip, setFlip] = useState(false)
  const { books, deleteBook } = useBooks()

  const flipBook = () => {
    setFlip(!flip)
  }

  function handleDelete() {
    if (confirm(`Deseja realmente excluir o livro "${book.title}"?`)) {
      deleteBook(book.id)
    }
  }

  function defineBookColor() {
    return books.indexOf(book) % 10
  }

  return (
    <Wrapper
      onClick={flipBook}
      className={flip ? "flip" : ""}
      index={defineBookColor()}
    >
      <div className="bookInner">
        <div className="bookFront">
          <div className="titleContainer">
            <h3>{book.title}</h3>
          </div>
          <div className="infoContainer">
            <div className="authorContainer">
              <span>Por</span>
              <h4>{book.author}</h4>
            </div>
            <span>{book.publishYear.split("-")[0]}</span>
          </div>
        </div>

        <div className="bookBack">
          <div>
            <p>{book.description}</p>
          </div>
          <span>{book.genre}</span>
        </div>

        <div className="bookPages"></div>

        <button onClick={() => onUpdate(book)} className="edit">
          <img src={editImg} />
        </button>
        <button onClick={handleDelete} className="delete">
          <img src={deleteImg} />
        </button>
      </div>
    </Wrapper>
  )
}
