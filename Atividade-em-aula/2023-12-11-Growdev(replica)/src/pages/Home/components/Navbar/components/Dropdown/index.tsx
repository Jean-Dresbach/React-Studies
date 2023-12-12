import { NavLink } from "react-router-dom"
import { Course, DropdownContent, Wrapper } from "./styles"

interface DropdownProps {
  text: string
  textColor: string
  backgrounColor: string
  items: string[]
  image: string
}

export function Dropdown({
  text,
  textColor,
  backgrounColor,
  items,
  image,
}: DropdownProps) {
  return (
    <Wrapper backgroundColor={backgrounColor} textColor={textColor}>
      <NavLink to="#">
        {" "}
        {text}
        <img src={image} />
      </NavLink>
      <DropdownContent>
        {items.map(item => (
          <Course>{item}</Course>
        ))}
      </DropdownContent>
    </Wrapper>
  )
}
