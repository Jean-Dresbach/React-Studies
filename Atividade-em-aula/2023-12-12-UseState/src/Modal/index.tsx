import { ModalContent, Wrapper } from "./styles"
import { useState } from "react"

export function Modal() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Wrapper>
      <ModalContent isOpen={showModal}>
        <button onClick={() => setShowModal(!showModal)}>Close Modal</button>
        <h3>Modal</h3>
        <p>Modal description</p>
      </ModalContent>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
    </Wrapper>
  )
}
