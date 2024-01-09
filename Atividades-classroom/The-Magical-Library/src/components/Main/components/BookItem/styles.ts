import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.colors.bookBackground[Math.floor(Math.random() * 10)]};
  padding: 15px 20px;
  gap: 10px;
  border-radius: 5px;

  .bookHeader {
    display: flex;
    align-items: center;
    gap: 30px;

    .containerInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      flex-grow: 1;

      .point {
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: white;
      }
    }
  }

  .bookBody {
    position: relative;
    display: flex;
    text-align: justify;
    flex-direction: column;
    min-height: 90px;
    padding-right: 25px;
    gap: 10px;

    div {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }

    button {
      position: absolute;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;

      img {
        width: 30px;
        transform: rotate(90deg);
      }
    }

    button:hover {
      transform: scale(1.2);
    }

    .edit {
      right: -39px;
      top: -2px;
    }

    .delete {
      right: -39px;
      top: 43px;
    }
  }
`
