import { Book } from "../../types"

import { Wrapper } from "./styles"
import editImg from "../../../../assets/edit.png"
import deleteImg from "../../../../assets/trash-can.png"
import { useState } from "react"

interface BookItemProps {
  book: Book
}

export function BookItem({ book }: BookItemProps) {
  const [flip, setFlip] = useState(false)

  const flipBook = () => {
    setFlip(!flip)
  }

  return (
    <Wrapper
      onClick={flipBook}
      className={flip ? "flip" : ""}
      index={Math.floor(Math.random() * 10)}
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

        <button className="edit">
          <img src={editImg} />
        </button>
        <button className="delete">
          <img src={deleteImg} />
        </button>
      </div>
    </Wrapper>
  )
}
