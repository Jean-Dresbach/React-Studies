import styled from "styled-components"

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 15px 0;
`
export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  :nth-child(3) {
    background-color: #ff8533;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #212a42;
  }
`
