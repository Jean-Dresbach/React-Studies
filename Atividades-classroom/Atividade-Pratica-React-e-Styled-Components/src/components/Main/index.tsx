import { SectionArticle } from "./components/section-article"
import { SectionFeature } from "./components/section-feature"
import { Wrapper } from "./styles"

export function Main() {
  return (
    <Wrapper>
      <SectionFeature />
      <SectionArticle />
    </Wrapper>
  )
}
