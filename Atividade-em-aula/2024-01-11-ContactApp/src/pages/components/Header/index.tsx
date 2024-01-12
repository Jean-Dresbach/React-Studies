import { NavLink } from "react-router-dom"

import { Wrapper } from "./styles"

export function Header() {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Cadastrar contatos</NavLink>
    </Wrapper>
  )
}
