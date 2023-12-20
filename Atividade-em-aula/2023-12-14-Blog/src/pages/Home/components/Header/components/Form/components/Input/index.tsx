import { Wrapper } from "./styles"

interface InputProps {
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required: boolean
}

export function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false
}: InputProps) {
  return (
    <Wrapper
      key={name}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  )
}
