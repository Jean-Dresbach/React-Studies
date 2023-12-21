import { useState, useMemo } from "react"
import { contactsList } from "../../database/users"
import { ContainerContactList, PhoneOwnerContainer, Wrapper } from "./style"

export function UseMemo() {
  const [users, setUsers] = useState()

  return (
    <>
      <Wrapper>
        <PhoneOwnerContainer>Jean</PhoneOwnerContainer>
        <ContainerContactList>
          {contactsList.map((contact) => (
            <p>{contact.name}</p>
          ))}
        </ContainerContactList>
      </Wrapper>
    </>
  )
}
