interface Contact {
  id: number
  name: string
  phoneNumber: number
}

const generateContacts = (): Contact[] => {
  const contacts: Contact[] = []

  for (let i = 0; i < 30000; i++) {
    const contact: Contact = {
      id: i + 1,
      name: `User${i + 1}`,
      phoneNumber: Math.floor(Math.random() * 10000),
    }
    contacts.push(contact)
  }

  return contacts
}

export const contactsList = generateContacts()
