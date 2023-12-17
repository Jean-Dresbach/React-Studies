import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  z-index: 2;
`

export const Form = styled.form`
  background-color: white;
  border-radius: 0 0 16px 16px;
  padding: 30px;

  a {
    color: #1d4ed8;
  }

  button {
    margin: 10px 0;
  }
`

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #212a42;
  padding: 35px 0;
  border-radius: 16px 16px 0 0;

  h6 {
    color: white;
    font-size: 20px;
  }
`
