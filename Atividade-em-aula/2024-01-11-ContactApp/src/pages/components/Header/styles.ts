import styled from "styled-components"

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #429dd6;
  padding: 30px;
  gap: 40px;

  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.5);

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bolder;
  }

  .active {
    background-color: #011936;
    padding: 5px 10px;
    border-radius: 8px;
    transform: scale(1.1);
  }

  a:hover {
    transform: scale(1.1);
  }
`
