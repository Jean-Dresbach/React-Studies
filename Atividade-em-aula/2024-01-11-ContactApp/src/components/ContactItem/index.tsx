import { Contact } from "../../types"
import { Wrapper } from "./styles"

import deleteImg from "../../assets/trash-can.png"
import { useContacts } from "../../contexts/ContactsContext"

interface ContactItemProps {
  contact: Contact
}

export function ContactItem({ contact }: ContactItemProps) {
  const { deleteContact } = useContacts()

  function handleDelete(id: number) {
    if (confirm("Deseja realmente excluir?")) {
      deleteContact(id)
    }
  }

  return (
    <Wrapper key={contact.id}>
      <span>{contact.name}</span>
      <div className="bar"></div>
      <span>{contact.email}</span>
      <div className="bar"></div>
      <span>{contact.phoneNumber}</span>
      <button onClick={() => handleDelete(contact.id)}>
        <img src={deleteImg} />
      </button>
    </Wrapper>
  )
}
