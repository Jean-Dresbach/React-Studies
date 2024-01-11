import { Book } from "../Main/types"
import { CounterContainer, Wrapper } from "./styles"

interface HeaderProps {
  books: Book[]
}

export function Header({ books }: HeaderProps) {
  return (
    <>
      <Wrapper>
        <h1>
          A Biblioteca <br />
          Encantada
        </h1>
        <CounterContainer>
          <p>{books.length}</p>
          <p>livros</p>
        </CounterContainer>
      </Wrapper>
    </>
  )
}
