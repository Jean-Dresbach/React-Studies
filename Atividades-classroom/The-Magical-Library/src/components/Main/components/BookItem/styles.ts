import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: brown;
  padding: 15px 20px;
  gap: 10px;
  border-radius: 5px;

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: white;
      }
    }

    h3 {
      text-transform: uppercase;
    }
  }

  & > :nth-child(2) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      position: absolute;
      border: none;
      outline: none;
      background-color: transparent;

      img {
        width: 40px;
        transform: rotate(90deg);
      }
    }
  }

  & > div > button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px;
    border-radius: 8px;

    div {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: white;
    }
  }

  & > div > button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`
