import styled from "styled-components"

import estanteImg from "../../assets/estante.jpg"

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mainBackground};

  .formContainer {
    display: flex;
    justify-content: center;
    padding: 30px;
  }
`

export const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 50px;

  background-image: url(${estanteImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  input {
    background-color: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.text};
    padding: 8px 15px;
    width: 300px;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
      gap: 10px;
    }

    input {
      width: 250px;
    }

    input::placeholder {
      font-size: 11px;
    }
  }
`

export const ContainerBooks = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px;
  gap: 30px;
  color: white;

  .errorText {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
  }

  @media screen and (max-width: 600px) {
    & {
      padding: 30px;
    }
  }
`
