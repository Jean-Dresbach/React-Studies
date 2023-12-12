import { NavLink } from "react-router-dom"
import growdevLogo from "../../../../assets/growdev.svg"
import { Container, ContainerMenu, Wrapper } from "./styles"

export function Navbar() {
  return (
    <Wrapper>
      <Container>
        <img src={growdevLogo} />
        <ContainerMenu>
          <NavLink to="#"> HOME</NavLink>
          <NavLink to="#"> SOBRE NÓS</NavLink>
          <NavLink to="#"> PROGRAMAS DE FORMAÇÃO</NavLink>
          <NavLink to="#"> PARA EMPRESAS</NavLink>
          <NavLink to="#"> CONTATO</NavLink>
        </ContainerMenu>
      </Container>
    </Wrapper>
  )
}
