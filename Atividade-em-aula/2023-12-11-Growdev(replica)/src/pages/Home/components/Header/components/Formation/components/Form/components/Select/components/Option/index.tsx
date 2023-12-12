interface OptionProps {
  text: string
}

export function Option({ text }: OptionProps) {
  return <option>{text}</option>
}
