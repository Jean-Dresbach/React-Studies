import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 16px;
  margin-top: 20px;
  width: 500px;
  height: 200px;
  background-color: #4c4c4c;
`

export const ModalContent = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 20vh;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 16px;
  flex-direction: column;
  background-color: #939393;
`
