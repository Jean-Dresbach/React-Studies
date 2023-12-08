import { FeatureItem } from "./components/Features"
import { Wrapper } from "./styles"

import desktopIcon from "../../../../assets/icons/monitor-svgrepo-com.svg"
import checkIcon from "../../../../assets/icons/check-svgrepo-com.svg"
import layersIcon from "../../../../assets/icons/layers-svgrepo-com.svg"

export function SectionFeature() {
  return (
    <Wrapper>
      <FeatureItem
        title="Somente para desktop"
        subtitle="Vamos aprender como utilizar um framework."
        icon={desktopIcon}
      />
      <FeatureItem
        title="Criado com componentes"
        subtitle="Utilizamos o Styled Components."
        icon={layersIcon}
      />
      <FeatureItem
        title="Facíl aproveitamento"
        subtitle="Estamos no caminho."
        icon={checkIcon}
      />
    </Wrapper>
  )
}
