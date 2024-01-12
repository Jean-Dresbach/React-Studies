import styled from "styled-components"

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 30px;
  margin: auto;

  .containerTitleAndSearch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    h1 {
      color: #429dd6;
    }

    label {
      display: flex;
      flex-direction: column;

      input {
        width: 250px;

        border: 1px solid #ccc;
        padding: 8px 15px;
        border-radius: 5px;
      }
    }
  }

  hr {
    margin-top: 40px;
  }
`

export const ContainerContacts = styled.section`
  display: flex;
  flex-direction: column;

  & > :nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
