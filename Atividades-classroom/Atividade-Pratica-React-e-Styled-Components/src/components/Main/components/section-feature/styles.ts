import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 80px 10px;
`
