import { CounterContainer, Wrapper } from "./styles"

export function Header() {
  return (
    <>
      <Wrapper>
        <h1>
          A Biblioteca <br />
          Encantada
        </h1>
        <CounterContainer>
          <p>0</p>
          <p>livros</p>
        </CounterContainer>
      </Wrapper>
    </>
  )
}
