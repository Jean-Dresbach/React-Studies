import styled from "styled-components"

export const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 9999;

  display: flex;
  justify-content: center;

  background-color: #fff;
  padding: 6px 0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 18px 0;

  img {
    width: 150px;
  }
`
export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: #212a42;

    img {
      margin-left: 5px;
      width: 10px;
    }
  }
`
