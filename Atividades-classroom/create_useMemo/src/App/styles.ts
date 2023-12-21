import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px;
  gap: 30px;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  color: white;

  img {
    width: 300px;
  }
`

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-grow: 8;
  justify-content: center;
  align-items: center;
`
