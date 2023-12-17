import { NavLink } from "react-router-dom"

import { ContentContainer, ContainerLinks, Wrapper } from "./styles"
import growdevLogo from "../../../../assets/growdev.svg"
import arrowDownBlack from "../../../../assets/arrow-down-black.svg"
import arrowDownWhite from "../../../../assets/arrow-down-white.svg"
import { Dropdown } from "./components/Dropdown"

export function Navbar() {
  return (
    <Wrapper>
      <ContentContainer>
        <img src={growdevLogo} />
        <ContainerLinks>
          <NavLink to="#"> Home</NavLink>
          <NavLink to="#"> SOBRE NÓS</NavLink>
          <Dropdown
            text="PROGRAMAS DE FORMAÇÃO"
            textColor="#fff"
            image={arrowDownWhite}
            backgrounColor="#ff8533"
            items={[
              "Nossos programas",
              "Desenvolvimento Web Full Stack",
              "Analista de dados",
              "Qualidade de software (QA)",
              "Design de produtos digitais (UX/UI)",
            ]}
          />
          <Dropdown
            text="PARA EMPRESAS"
            textColor="#212A42"
            image={arrowDownBlack}
            backgrounColor="#fff"
            items={["Nossas soluções", "Celulas de talentos"]}
          />
          <NavLink to="#"> CONTATO</NavLink>
        </ContainerLinks>
      </ContentContainer>
    </Wrapper>
  )
}
