import { Book } from "../../types"

import { Wrapper } from "./styles"

import deleteImg from "../../../../assets/deleteBookMark.png"
import edtImg from "../../../../assets/editBookMark.png"

interface BookItemProps {
  book: Book
}

export function BookItem({ book }: BookItemProps) {
  return (
    <Wrapper>
      <div className="bookHeader">
        <div className="containerInfo">
          <h3>{book.title}</h3>
          <div className="point"></div>
          <span>{book.author}</span>
        </div>

        <span>{book.publishYear.split("-")[0]}</span>
      </div>

      <div className="bookBody">
        <span>{book.genre}</span>
        <div>
          <p>{book.description}</p>
        </div>
        <button className="edit">
          <img src={edtImg} />
        </button>
        <button className="delete">
          <img src={deleteImg} />
        </button>
      </div>
    </Wrapper>
  )
}
