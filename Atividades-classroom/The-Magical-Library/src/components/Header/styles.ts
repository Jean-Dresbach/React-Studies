import styled from "styled-components"

import headerImg from "../../assets/library-background.jpg"

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 500px;
  padding-left: 50px;

  background-image: url(${headerImg});
  background-size: cover;
  background-position: 0 -180px;
  background-attachment: fixed;
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0 100px;

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
`
