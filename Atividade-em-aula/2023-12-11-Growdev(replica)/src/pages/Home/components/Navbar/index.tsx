import { NavLink } from "react-router-dom"

import { ContentContainer, ContainerLinks, Wrapper } from "./styles"
import growdevLogo from "../../../../assets/growdev.svg"
import arrowDownWhite from "../../../../assets/arrow-down-white.svg"
import arrowDownBlack from "../../../../assets/arrow-down-black.svg"

export function Navbar() {
  return (
    <Wrapper>
      <ContentContainer>
        <img src={growdevLogo} />
        <ContainerLinks>
          <NavLink to="#"> HOME</NavLink>
          <NavLink to="#"> SOBRE NÓS</NavLink>
          <NavLink to="#">
            {" "}
            PROGRAMAS DE FORMAÇÃO
            <img src={arrowDownWhite} />
          </NavLink>
          <NavLink to="#">
            {" "}
            PARA EMPRESAS
            <img src={arrowDownBlack} />
          </NavLink>
          <NavLink to="#"> CONTATO</NavLink>
        </ContainerLinks>
      </ContentContainer>
    </Wrapper>
  )
}
