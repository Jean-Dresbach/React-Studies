import { ReactNode, createContext, useContext, useState } from "react"

import { Contact } from "../types"

interface IContactContext {
  contacts: Contact[]
  addContact: (contact: Contact) => void
  deleteContact: (id: number) => void
  searchContacts: (query: string) => Contact[] | ReactNode
}

const ContactContext = createContext<IContactContext>({} as IContactContext)

interface ContactProviderProps {
  children: ReactNode
}

export function ContactsProvider({ children }: ContactProviderProps) {
  const [contacts, setContacts] = useState<Contact[]>([])

  function addContact(contact: Contact) {
    setContacts((preState) => [...preState, contact])
  }

  function deleteContact(id: number) {
    const filteredContacts = contacts.filter((c) => c.id != id)
    setContacts(filteredContacts)
  }

  function searchContacts(query: string) {
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
          <div key={contact.id}>
            <span>
              {contact.name} | {contact.email} | {contact.phoneNumber}
            </span>
          </div>
        ))
      }
    } else {
      return contacts.map((contact) => (
        <div key={contact.id}>
          <span>
            {contact.name} | {contact.email} | {contact.phoneNumber}
          </span>
        </div>
      ))
    }
  }

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, deleteContact, searchContacts }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export const useContacts = () => useContext(ContactContext)
