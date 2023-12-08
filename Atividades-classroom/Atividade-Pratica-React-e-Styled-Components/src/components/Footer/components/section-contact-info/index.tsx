import { ContainerInfo, ContainerSocialIcons, Wrapper } from "./styles"
import FacebooIcon from "../../../../assets/icons/facebook-icon.svg"
import XIcon from "../../../../assets/icons/instagram-icon.svg"
import InstagramIcon from "../../../../assets/icons/x-icon.svg"
import { NavLink } from "react-router-dom"

export function SectionContactInfo() {
  return (
    <Wrapper>
      <ContainerInfo>
        <div>
          <NavLink className="nav-after" to="#">
            About
          </NavLink>
          <NavLink className="nav-after" to="#">
            Contact
          </NavLink>
          <NavLink className="nav-after" to="#">
            Terms of Use
          </NavLink>
          <NavLink className="nav-after" to="#">
            Privacy Policy
          </NavLink>
        </div>
        <span>© Your Website 2023. All Rights Reserved.</span>
      </ContainerInfo>
      <ContainerSocialIcons>
        <img src={FacebooIcon} />
        <img src={XIcon} />
        <img src={InstagramIcon} />
      </ContainerSocialIcons>
    </Wrapper>
  )
}
