import styled from "styled-components"

export const Wrapper = styled.form`
  width: 100%;
  max-width: 900px;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.cardAndInput};
  border: none;
`
