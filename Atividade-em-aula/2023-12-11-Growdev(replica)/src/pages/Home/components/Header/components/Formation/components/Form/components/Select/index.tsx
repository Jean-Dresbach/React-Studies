import { Option } from "./components/Option"
import { Wrapper } from "./styles"

interface SelectProps {
  label: string
  options: string[]
}

export function Select({ label, options }: SelectProps) {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label}>
        {options.map(option => (
          <Option text={option} />
        ))}
      </select>
    </Wrapper>
  )
}
