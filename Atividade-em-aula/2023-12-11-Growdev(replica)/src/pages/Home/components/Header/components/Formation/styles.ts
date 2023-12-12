import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;

  & > img {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(50%, 0);

    z-index: 0;
    width: 50%;
  }
`

export const FormationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0;

  img {
    width: 280px;
  }

  p {
    color: white;
    font-size: 25px;
    margin-bottom: 50px;
  }
`
