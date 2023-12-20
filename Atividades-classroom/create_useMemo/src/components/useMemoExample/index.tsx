import { useState, useMemo } from "react"

import { Button, Form, FormHeader, Input, Select } from "./style"

const emptyForm = {
  name: "",
  number1: 0,
  number2: 0,
  operation: "",
  result: 0,
}

function heavyFunction(value: number) {
  console.log("Calculando:")

  for (let index = 0; index < 3000000000; index++) {
    value++
  }

  return value
}

export function UseMemo() {
  const [formData, setFormData] = useState(emptyForm)

  const result = useMemo(
    () => heavyFunction(formData.number1),
    [formData.number1]
  )
  console.log(result)

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      <Form>
        <FormHeader>
          <p>{`${formData.name} o resultado de sua conta é:`}</p>
        </FormHeader>

        <Input
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleOnChange}
        />

        <Input
          type="number"
          value={formData.number1}
          placeholder="Digite um número"
          name="number1"
          onChange={handleOnChange}
        />

        <Input
          type="number"
          value={formData.number2}
          placeholder="Digite outro número"
          name="number2"
          onChange={handleOnChange}
        />

        <Select
          name="operation"
          value={formData.operation}
          id="operation"
          onChange={handleOnChange}
        >
          <option value="" disabled={true}>
            Escolha uma operação
          </option>
          <option value="addition">Adção</option>
          <option value="subtraction">Subtração</option>
          <option value="addition">Divisão</option>
          <option value="addition">Multiplicação</option>
        </Select>

        <Button>Calcular</Button>
      </Form>
    </>
  )
}

// interface ShowValueProps {
//   value: string
// }

// function ShowValue({ value }: ShowValueProps) {
//   console.log(`ShowValue render, ${value}`)

//   const computedValue = useMemo(() => {
//     return value.toUpperCase()
//   }, [value])

//   return <div className="value">{computedValue}</div>
// }

// export function ReRender() {
//   const [counter, setCounter] = useState<number>(0)
//   const [value, setValue] = useState<string>("ON")

//   console.log(`ReRender re-render, ${counter}`)

//   const changeCounter = () => {
//     setCounter(counter + 1)
//   }

//   const changeValue = () => {
//     setValue(value === "ON" ? "OFF" : "ON")
//   }

//   return (
//     <div className="container">
//       <h1>React Memo Na Prática </h1>
//       <div className="items">
//         <ShowValue value={value} />
//       </div>
//       <div className="actions">
//         <button onClick={changeCounter} className="btn btn-teal">
//           Re-render
//         </button>

//         <button onClick={changeValue} className="btn btn-sky">
//           Change Value
//         </button>
//       </div>
//     </div>
//   )
// }
