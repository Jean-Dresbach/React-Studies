import GlobalStyle from "../styles/global"

import { Header, Main, Wrapper } from "./styles"
import { UseMemo } from "../components/useMemoExample"
import titleImg from "../assets/tituloImg.jpeg"

export function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <img src={titleImg} alt="" />
      </Header>
      <Main>
        <UseMemo />
      </Main>
    </Wrapper>
  )
}
