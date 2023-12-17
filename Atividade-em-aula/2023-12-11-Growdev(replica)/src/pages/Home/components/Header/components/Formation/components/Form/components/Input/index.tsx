import { Wrapper } from "./styles"

interface InputProps {
  name: string
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required: boolean
}

export function Input({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
  required = false,
}: InputProps) {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
    </Wrapper>
  )
}
