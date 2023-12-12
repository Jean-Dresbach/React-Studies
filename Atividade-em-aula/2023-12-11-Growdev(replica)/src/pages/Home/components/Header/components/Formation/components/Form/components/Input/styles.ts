import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  input {
    border-radius: 5px;
    padding: 8px;
    border: 1px solid #e0e0e0;
    margin-bottom: 8px;
  }

  label {
    color: #212a42;
  }

  input:hover {
    border: 1px solid black;
  }
`
