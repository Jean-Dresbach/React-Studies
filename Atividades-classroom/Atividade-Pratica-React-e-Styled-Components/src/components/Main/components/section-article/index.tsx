import { Artcle } from "./components/Article"
import { Wrapper } from "./styles"

import phoneImg from "../../../../assets/images/phone-image.jpeg"
import codeImg from "../../../../assets/images/code-image.webp"
import babyPlayingImg from "../../../../assets/images/baby-playing.jpeg"

export function SectionArticle() {
  return (
    <Wrapper>
      <Artcle />
      <img src={phoneImg} />
      <img src={codeImg} />
      <Artcle />
      <Artcle />
      <img src={babyPlayingImg} />
    </Wrapper>
  )
}
