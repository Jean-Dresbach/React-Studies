import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  aspect-ratio: 9/16;
  border-radius: 8px;
  border: 8px solid #1c77c3;
  background-color: #39a9db;
  box-shadow: 0 0 25px 10px rgba(0, 210, 247, 0.3);
  text-align: center;
`

export const PhoneOwnerContainer = styled.p`
  color: white;
  padding: 8px;
  background-color: #1c77c3;
`

export const ContainerContactList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`
