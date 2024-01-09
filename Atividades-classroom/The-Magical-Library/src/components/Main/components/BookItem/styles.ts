import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 15px 20px;
  gap: 10px;
  border-radius: 5px;

  .bookHeader {
    display: flex;
    align-items: center;
  }

  .point {
    display: block !important;
    width: 4px !important;
    height: 4px;
    border-radius: 50%;
    background-color: white;
  }

  /* & > :nth-child(1) {
    display: flex;
    align-items: center;
    gap: 30px;

    div {
      flex-direction: row;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-grow: 1;

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
  } */

  .bookBody {
    position: relative;
    display: flex;
    text-align: justify;
    flex-direction: column;
    min-height: 100px;
    padding-right: 25px;
    gap: 10px;

    button {
      position: absolute;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;

      img {
        width: 40px;
        transform: rotate(90deg);
      }
    }

    .edit {
      right: -46px;
      top: -7px;
    }

    .delete {
      right: -45px;
      top: 46px;
    }
  }
`
