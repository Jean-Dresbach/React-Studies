import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  border-radius: 8px;
  background-color: #dd5f6b;
  padding: 30px;
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #191824;
  border-radius: 8px;
  padding: 15px;
  color: white;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 15px;
`

export const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 15px;
  background-color: #191824;
  color: white;
`

export const Select = styled.select`
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 8px;
`
