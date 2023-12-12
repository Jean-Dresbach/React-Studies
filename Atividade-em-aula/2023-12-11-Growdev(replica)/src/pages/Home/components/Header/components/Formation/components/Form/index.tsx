import { Link } from "react-router-dom"
import { Input } from "./components/Input"
import { Form, FormHeader, Wrapper } from "./styles"
import { Select } from "./components/Select"

export function FormFormation() {
  return (
    <Wrapper>
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
        <Input
          placeholder="Digite seu telefone"
          type="text"
          label="Telefone/Whatsapp"
        />
        <Input type="date" label="Data de nascimento" />
        <Input
          placeholder="Digite o nome da sua cidade"
          type="text"
          label="Cidade"
        />
        <Select
          label="Escolaridade"
          options={[
            "Ensino Fundamental Incompleto",
            "Ensino Fundamental Completo",
            "Ensino Médio Incompleto",
            "Ensino Médio Completo",
            "Ensino Superior Incompleto",
            "Ensino Superior Completo",
            "Pós graduação",
            "Mestrado",
            "Doutorado",
          ]}
        />
        <Select
          label="Tem disponibilidade para estudar no turno da noite?"
          options={["Sim", "Não"]}
        />
        <Input
          placeholder="Código promocional"
          type="text"
          label="Digite seu código promocional"
        />
        <p>
          Ao clicar em enviar você concorda com os{" "}
          <Link to="https://www.growdev.com.br/terms-of-use">
            termos de uso
          </Link>{" "}
          e as{" "}
          <Link to="https://www.growdev.com.br/privacy-policy">
            polícas de privacidade
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}
