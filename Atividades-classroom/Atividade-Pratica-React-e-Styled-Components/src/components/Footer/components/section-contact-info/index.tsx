import { ContainerSocialIcons, Wrapper } from "./styles"
import FacebooIcon from "../../../../assets/icons/facebook-icon.svg"
import XIcon from "../../../../assets/icons/instagram-icon.svg"
import InstagramIcon from "../../../../assets/icons/x-icon.svg"

export function SectionContactInfo() {
  return (
    <Wrapper>
      <ContainerSocialIcons>
        <img src={FacebooIcon} />
        <img src={XIcon} />
        <img src={InstagramIcon} />
      </ContainerSocialIcons>
    </Wrapper>
  )
}
