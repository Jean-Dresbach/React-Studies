import styled from "styled-components"

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 20%;

  h2 {
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`
