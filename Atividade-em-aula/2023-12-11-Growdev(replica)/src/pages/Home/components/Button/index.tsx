import { Wrapper } from "./styles"

interface ButtonProps {
  text: string
  TYPE: "button" | "reset" | "submit"
  Width?: string
  onClick: () => void
}

export function Button({ text, TYPE, Width, onClick }: ButtonProps) {
  return (
    <Wrapper>
      <button
        type={TYPE}
        style={Width ? { width: Width } : { width: "100%" }}
        onClick={onClick}
      >
        {text}
      </button>
    </Wrapper>
  )
}
