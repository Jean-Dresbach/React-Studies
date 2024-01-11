import { useBooks } from "../../contexts/BooksContext"
import { CounterContainer, Wrapper } from "./styles"

export function Header() {
  const { books } = useBooks()

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
