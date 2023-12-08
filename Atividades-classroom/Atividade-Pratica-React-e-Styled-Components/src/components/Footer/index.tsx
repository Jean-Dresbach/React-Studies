import { SectionContactBanner } from "./components/section-contact-banner"
import { SectionContactInfo } from "./components/section-contact-info"
import { Wrapper } from "./styles"

export function Footer() {
  return (
    <Wrapper>
      <SectionContactBanner />
      <SectionContactInfo />
    </Wrapper>
  )
}
