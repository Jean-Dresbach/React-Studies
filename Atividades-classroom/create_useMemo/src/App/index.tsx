import GlobalStyle from "../styles/global"
import { Header, Main, Wrapper } from "./styles"
import { UseMemo } from "../components/useMemoExample"

export function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <h1>useMemo( )</h1>
      </Header>
      <Main>
        <UseMemo />
      </Main>
    </Wrapper>
  )
}
