import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;

  .bar {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    width: 1px;
    height: 20px;
  }

  button {
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: #ff5757;
    cursor: pointer;

    img {
      width: 15px;
    }
  }

  button:hover {
    transform: scale(1.1);
  }
`
