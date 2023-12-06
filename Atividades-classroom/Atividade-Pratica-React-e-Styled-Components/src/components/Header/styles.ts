import styled from "styled-components"
import headerBackground from "../../assets/images/ocean-background.jpg"

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  ::before {
    content: "";
    position: absolute;
    background-image: url(${headerBackground});
    background-attachment: fixed;
    background-size: cover;
    filter: brightness(50%);
    inset: 0;
    z-index: -1;
  }

  p {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`
