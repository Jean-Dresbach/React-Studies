import styled from "styled-components"

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  width: 100%;
  max-width: 600px;

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
