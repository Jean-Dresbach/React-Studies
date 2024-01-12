import { useState } from "react"
import { useContacts } from "../../contexts/ContactsContext"
import { Contact } from "../../types"
import { Header } from "../components/Header"
import { ContactForm, ContainerForm, Wrapper } from "./styles"

const emptyContact: Contact = {
  id: 0,
  email: "",
  name: "",
  phoneNumber: "",
}

export function RegisterContacts() {
  const [contact, setContact] = useState<Contact>(emptyContact)

  const { addContact } = useContacts()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setContact((prevState) => ({ ...prevState, [name]: value }))
  }

  function saveContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    addContact({
      ...contact,
      id: Date.now(),
    })

    setContact(emptyContact)
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className="containerTitle">
          <h1>Cadastrar Contato</h1>
        </div>
        <ContainerForm>
          <ContactForm onSubmit={saveContact}>
            <label>
              Nome:
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Telefone:
              <input
                type="text"
                name="phoneNumber"
                value={contact.phoneNumber}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Cadastrar contato</button>
          </ContactForm>
        </ContainerForm>
      </Wrapper>
    </>
  )
}
