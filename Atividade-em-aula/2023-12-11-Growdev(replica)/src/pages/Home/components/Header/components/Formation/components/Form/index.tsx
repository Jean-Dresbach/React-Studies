import React, { useState } from "react"
import { Link } from "react-router-dom"

import { Input } from "./components/Input"
import { Form, FormHeader, Wrapper } from "./styles"
import { Select } from "./components/Select"
import { Button } from "../../../../../Button"

export function FormFormation() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    date: "",
    city: "",
    education: "",
    disponibility: "",
    promotionalCode: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setFormState(prev => ({ ...prev, [name]: value }))
  }

  function showState() {
    console.log(formState)
  }

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
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          label="E-mail"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          label="Confirme seu e-mail"
          name="confirmEmail"
          value={formState.confirmEmail}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Digite seu telefone"
          type="text"
          label="Telefone/Whatsapp"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="date"
          label="Data de nascimento"
          name="date"
          value={formState.date}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Digite o nome da sua cidade"
          type="text"
          label="Cidade"
          name="city"
          value={formState.city}
          onChange={handleChange}
          required
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
          name="promotionalCode"
          value={formState.promotionalCode}
          onChange={handleChange}
          required
        />

        <Button text="ENVIAR DESCRIÇÃO" TYPE="button" onClick={showState} />
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
