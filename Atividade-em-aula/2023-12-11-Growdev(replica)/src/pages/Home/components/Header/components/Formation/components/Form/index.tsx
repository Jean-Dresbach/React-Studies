import { Input } from "./components/Input"
import { Form, FormHeader } from "./styles"

export function FormFormation() {
  return (
    <div>
      <FormHeader>
        <h6>PREENCHA O FORMULÁRIO</h6>
      </FormHeader>
      <Form>
        <Input
          placeholder="Digite seu nome completo"
          type="text"
          label="Nome"
        />
        <Input placeholder="Digite seu e-mail" type="email" label="E-mail" />
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          label="Confirme seu e-mail"
        />
      </Form>
    </div>
  )
}
