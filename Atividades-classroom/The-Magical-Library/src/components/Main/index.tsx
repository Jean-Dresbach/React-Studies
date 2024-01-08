import { BookItem } from "./components/BookItem"
import { BookForm } from "./components/Form"
import { ContainerBanner, ContainerBooks, Wrapper } from "./styles"

export function Main() {
  return (
    <Wrapper>
      <BookForm />

      <ContainerBanner>
        <h2>Estante</h2>
      </ContainerBanner>

      <ContainerBooks>
        <BookItem
          author="Jean"
          title="Titulo"
          publicationYear="2024"
          description="alksjdhlask kajdsh lakdlkj ailkscalskndas laskdjlkasjd alksjdhlask kajdsh lakdlkj ailkscalskndas laskdjlkasjd  alksjdhlask kajdsh lakdlkj ailkscalskndas laskdjlkasjd alksjdhlask kajdsh lakdlkj ailkscalskndas laskdjlkasjd alksjdhlask kajdsh lakdlkj ailkscalskndas laskdjlkasjd "
          genre="Aventura"
          key={1}
        />
      </ContainerBooks>
    </Wrapper>
  )
}
