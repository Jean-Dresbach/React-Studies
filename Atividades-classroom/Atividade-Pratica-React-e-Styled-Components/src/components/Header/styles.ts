import styled from "styled-components"
import headerBackground from "../../assets/images/ocean-background.jpg"

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  max-width: 1250px;
  margin: 0 auto;

  ::before {
    content: "";
    position: absolute;
    background-image: url(${headerBackground});
    background-attachment: fixed;
    background-size: cover;
    filter: brightness(50%) hue-rotate(18deg);
    inset: 0;
    z-index: -1;
    box-shadow: 0 0 34px 0 rgba(112, 112, 112, 0.5);
  }

  h1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: normal;
  }
`
