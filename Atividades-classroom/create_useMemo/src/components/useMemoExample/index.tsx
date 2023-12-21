import { useState, useMemo } from "react"

import { ContactList, Phone, Screen } from "./style"
import { PhoneTop } from "./components/PhoneTop"
import { PhoneBottom } from "./components/PhoneBottom"
import { Contact } from "./components/Contact"

export function UseMemo() {
  const [phoneOwner, setPhoneOwner] = useState("")
  const [quantity, setQuantity] = useState(0)

  function handleGenerateList() {
    const resultList = []

    for (let i = 0; i < quantity; i++) {
      const item = {
        id: i + 1,
        name: `Contato${i + 1}`,
        phoneNumber: Math.floor(100000000 + Math.random() * 900000000),
      }
      resultList.push(item)
    }

    return resultList.map((result) => (
      <Contact key={result.id} name={result.name} number={result.phoneNumber} />
    ))
  }

  // const generatedList = useMemo(() => {
  //   const resultList = []
  //   for (let i = 0; i < quantity; i++) {
  //     const item = {
  //       id: i + 1,
  //       name: `Contato${i + 1}`,
  //       phoneNumber: Math.floor(100000000 + Math.random() * 900000000),
  //     }
  //     resultList.push(item)
  //   }
  //   return resultList.map((result) => (
  //     <Contact key={result.id} name={result.name} number={result.phoneNumber} />
  //   ))
  // }, [quantity])

  return (
    <Phone>
      <Screen>
        <PhoneTop />
        <p>Lista de contato de {phoneOwner}</p>
        <ContactList>
          {/* {generatedList} */}
          {handleGenerateList()}
        </ContactList>
        <input
          type="text"
          value={phoneOwner}
          onChange={(e) => setPhoneOwner(e.target.value)}
          placeholder="Digite seu nome"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <PhoneBottom />
      </Screen>
    </Phone>
  )
}
