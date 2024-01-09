import styled from "styled-components"

import estanteImg from "../../assets/estante.jpg"

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.mainBackground};

  hr {
    width: 95%;
  }
`

export const ContainerBanner = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 50px;

  background-image: url(${estanteImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`

export const ContainerBooks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
  gap: 15px;
  padding-right: 70px;
  color: white;
`
