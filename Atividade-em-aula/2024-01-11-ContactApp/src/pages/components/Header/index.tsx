import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Cadastrar contatos</NavLink>
    </>
  )
}
