import styled from "styled-components"

import estanteImg from "../../assets/estante.jpg"

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.mainBackground};
  height: 150vh;

  hr {
    width: 95%;
  }
`

export const BookForm = styled.form`
  background-image: url();
  display: flex;
  flex-direction: column;

  margin: 50px 0;

  width: 600px;

  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 8px;

    border: 1px solid #ddd;
    outline-color: ${({ theme }) => theme.colors.secondary};
  }

  button {
    position: relative;
    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    padding: 10px 0;
    border-radius: 8px;
    outline: none;
    border: none;

    cursor: pointer;

    svg {
      position: absolute;
      right: 2px;
      top: -2px;
      transform: rotate(342deg);
    }

    :nth-child(2) {
      right: 31px;
      top: 5px;
      transform: rotate(122deg);
    }
  }
`

export const ContainerBanner = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 200px;
  padding: 50px;

  background-image: url(${estanteImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`
