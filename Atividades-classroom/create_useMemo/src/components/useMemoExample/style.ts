import styled from "styled-components"

export const Phone = styled.div`
  width: 320px;
  max-width: 320px;
  height: 650px;
  background: #000;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 50px 5px rgba(255, 255, 255, 0.5);
`

export const Screen = styled.div`
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  font-family: Arial, Helvetica, sans-serif;

  .containerButtonAndInput {
    display: flex;

    button {
      width: 100%;
      border: none;
      outline: none;
      padding: 0 10px;
      color: #fff;
      background-color: #1c77c3;
      cursor: pointer;
    }

    input {
      background-color: #71b2e7;
    }

    & & button:hover {
      background-color: #12558d;
    }
  }

  & > p {
    width: 100%;
    background-color: #1c77c3;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  input {
    border: none;
    outline: none;
    background-color: #4ba8f5;
    color: white;
    padding: 11px 15px;
    border-bottom: 1px solid gray;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  & input::placeholder {
    color: white;
  }
`

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 503px;
  max-height: 503px;

  &::-webkit-scrollbar {
    background-color: white;
    width: 10px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4f4f4f;
  }
`
