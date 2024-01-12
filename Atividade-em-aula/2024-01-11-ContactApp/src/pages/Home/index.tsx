import { useState } from "react"
import { useContacts } from "../../contexts/ContactsContext"
import { Header } from "../components/Header"
import { ContainerContacts, Wrapper } from "./styles"
import { ContactItem } from "../../components/ContactItem"

export function Home() {
  const { contacts } = useContacts()

  const [search, setSearch] = useState("")

  function searchContacts(query: string | undefined) {
    if (query) {
      const filteredContacts = contacts.filter(
        (contact) =>
          contact.name.toLowerCase() === query.toLowerCase() ||
          contact.email.toLowerCase() === query.toLowerCase() ||
          contact.phoneNumber === query
      )

      if (filteredContacts.length === 0) {
        return <p className="errorText">Nenhum contato encontrado!</p>
      } else {
        return filteredContacts.map((contact) => (
          <ContactItem contact={contact} />
        ))
      }
    } else {
      return contacts.map((contact) => <ContactItem contact={contact} />)
    }
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className="containerTitleAndSearch">
          <h1>Meus Contatos</h1>

          <label>
            Pesquisar Contato
            <input
              type="text"
              placeholder="Digite nome ou email ou numero..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <hr />

        <ContainerContacts>{searchContacts(search)}</ContainerContacts>
      </Wrapper>
    </>
  )
}
