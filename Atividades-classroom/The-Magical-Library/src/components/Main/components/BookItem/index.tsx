import { Wrapper } from "./styles"

import deleteImg from "../../../../assets/deleteBookMark.png"
import edtImg from "../../../../assets/editBookMark.png"

interface Book {
  author: string
  title: string
  publicationYear: string
  genre: string
  description: string
}

export function BookItem({
  author,
  title,
  publicationYear,
  genre,
  description
}: Book) {
  return (
    <Wrapper>
      <div className="bookHeader">
        <div className="containerInfo">
          <h3>{title}</h3>
          <div className="point"></div>
          <span>{author}</span>
        </div>

        <span>{publicationYear}</span>
      </div>

      <div className="bookBody">
        <span>{genre}</span>
        <p>{description}</p>
        <div>
          <button className="edit">
            <img src={edtImg} />
          </button>
          <button className="delete">
            <img src={deleteImg} />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
