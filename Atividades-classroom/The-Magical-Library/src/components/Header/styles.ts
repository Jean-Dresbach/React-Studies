import styled from "styled-components"

import headerImg from "../../assets/library-background.jpg"

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 50px;

  background-image: url(${headerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -180px;
  background-attachment: fixed;

  @media screen and (max-width: 600px) {
    & {
      padding-left: 30px;
    }
  }
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 100px 100px;

  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(35, 35, 35, 0.8) 65%,
    rgba(78, 78, 78, 0.5) 86%,
    rgba(223, 223, 223, 0) 100%
  );

  font-family: "Tangerine", cursive, sans-serif;
  color: ${({ theme }) => theme.colors.title};
  font-size: 70px;

  :nth-child(1) {
    margin-top: -90px;
    font-size: 200px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    & {
      font-size: 35px;
      padding: 100px 30px;
      padding-right: 50px;
    }

    :nth-child(1) {
      margin-top: -50px;
      font-size: 100px;
    }
  }
`
