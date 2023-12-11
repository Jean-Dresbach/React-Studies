import styled from "styled-components"

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1250px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
`
