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
      <div>
        <div>
          <h3>{title}</h3>
          <div></div>
          <span>{author}</span>
        </div>

        <span>{publicationYear}</span>
        <button>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      <div>
        <span>{genre}</span>
        <p>{description}</p>
        <div>
          <button>
            <img src={edtImg} />
          </button>
          <button>
            <img src={deleteImg} />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
