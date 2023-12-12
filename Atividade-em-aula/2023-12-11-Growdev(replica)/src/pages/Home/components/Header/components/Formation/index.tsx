import { FormationContainer, Wrapper } from "./styles"
import growdeverImg from "../../../../../../assets/growdever.webp"
import formationImg from "../../../../../../assets/formacao.webp"
import { FormFormation } from "./components/Form"

export function Formation() {
  return (
    <Wrapper>
      <img src={growdeverImg} />
      <FormationContainer>
        <img src={formationImg} />

        <p>
          Aprenda a analisar
          <br />e interpretar dados
          <br />e seja um(a) profissional
          <br />
          essencial nas empresas!
        </p>
      </FormationContainer>
      <FormFormation />
    </Wrapper>
  )
}
