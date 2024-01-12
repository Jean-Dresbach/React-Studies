import { ReactNode, createContext, useContext, useState } from "react"

import { Contact } from "../types"

interface IContactContext {
  contacts: Contact[]
  addContact: (contact: Contact) => void
  deleteContact: (id: number) => void
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

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  )
}

export const useContacts = () => useContext(ContactContext)
