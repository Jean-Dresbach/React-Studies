import { Wrapper } from "./styles"

interface ContactProps {
  name: string
  number: number
}

export function Contact({ name, number }: ContactProps) {
  return (
    <Wrapper>
      <p>{name}</p>
      <p>{number}</p>
    </Wrapper>
  )
}
