import styled from "styled-components"
import footerBackground from "../../../../assets/images/ocean-background.jpg"

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  max-width: 1250px;
  margin: 0 auto;
  z-index: 2;

  ::before {
    content: "";
    position: absolute;
    background-image: url(${footerBackground});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    filter: brightness(50%) hue-rotate(18deg);
    inset: 0;
    z-index: -1;
  }

  h2 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
  }
`
