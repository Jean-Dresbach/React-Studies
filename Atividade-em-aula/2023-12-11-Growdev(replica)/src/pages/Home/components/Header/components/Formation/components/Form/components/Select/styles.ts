import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  select {
    border-radius: 5px;
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    margin-bottom: 8px;
  }

  label {
    color: #212a42;
  }

  select:hover {
    border: 1px solid black;
  }
`
