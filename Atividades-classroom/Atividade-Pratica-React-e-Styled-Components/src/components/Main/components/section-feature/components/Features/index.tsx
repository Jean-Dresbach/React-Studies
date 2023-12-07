import { Wrapper, Title, Subtitle } from "./styles"

interface FeatureItemProps {
  title: string
  subtitle: string
  icon: string
}

export function FeatureItem({ title, subtitle, icon }: FeatureItemProps) {
  return (
    <Wrapper>
      <img src={icon} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
