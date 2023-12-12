import { Wrapper } from "./styles"

interface InputProps {
  label: string
  type: string
  placeholder: string
}

export function Input({ label, type, placeholder }: InputProps) {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeholder} />
    </Wrapper>
  )
}
