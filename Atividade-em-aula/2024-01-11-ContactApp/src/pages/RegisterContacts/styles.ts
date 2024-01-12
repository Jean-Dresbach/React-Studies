import styled from "styled-components"

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 30px;
  margin: auto;

  .containerTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

    h1 {
      color: #429dd6;
    }
  }
`
export const ContainerForm = styled.section`
  display: flex;
  justify-content: center;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  input {
    width: 100%;
    border: 1px solid #ccc;
    padding: 8px 15px;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  button {
    background-color: #429dd6;
    color: white;
    font-weight: bolder;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
  }

  button:hover {
    background-color: #194f71;
  }
`
