import styled from "styled-components"

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`
