import styled from "styled-components"

export const Wrapper = styled.div<{
  backgroundColor: string
  textColor: string
}>`
  position: relative;
  & > a {
    color: ${({ textColor }) => textColor};
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 16px;
    border-radius: 8px;
  }

  &:hover {
    div {
      display: block;
    }
  }
`

export const DropdownContent = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  display: none;
  background-color: white;
  width: 315px;
  padding: 5px 0;
  border-radius: 0 0 8px 8px;
`

export const Course = styled.a`
  display: block;
  padding: 8px 15px;
  font-weight: normal !important;
  font-size: 16px !important;

  &:hover {
    background-color: #e0e0e0;
  }
`
