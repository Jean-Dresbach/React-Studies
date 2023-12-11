import styled from "styled-components"

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  max-width: 1250px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
`
