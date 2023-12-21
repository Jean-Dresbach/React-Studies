import styled from "styled-components"

export const Top = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  background: rgba(51, 51, 51, 0.7);
  overflow: hidden;
  border-bottom: 1px solid hsla(0, 0%, 43%, 0.2);

  .dock {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 30px;
    padding: -5px 5px 0 5px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

    .sensor,
    .camera {
      width: 12px;
      height: 12px;
      background: #000;
      border-radius: 50%;
      margin: 0 3px 14px 3px;
    }

    .speaker {
      width: 60px;
      height: 8px;
      background: #000;
      border-radius: 7px;
      margin: 0 5px 17px 5px;
    }
  }

  .dock-left,
  .dock-right {
    display: flex;
    align-items: center;
    text-align: center;
    flex: 1;
    color: #fff;
  }

  .dock-left {
    padding: 5px 10px 0 5px;
    p {
      width: 100%;
    }
  }

  .dock-right {
    justify-content: space-around;
    padding: 5px 10px 0 5px;
  }
`
