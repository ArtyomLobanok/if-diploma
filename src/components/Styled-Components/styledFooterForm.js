import styled from "styled-components";

export const FooterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto 80px;
`
export const FooterFormHeader = styled.div`
  margin: 0 auto 56px;
  display: flex;
  flex-direction: column;
  text-align: center;
  h4 {
    color: ${props => props.color || "#000F08"};
    margin-bottom: 17px;
    font-size: 20px;
    font-weight: 400;
    
  }
  p {
    color: ${props => props.color || "#000000"};
    font-size: 16px;
  }
`

export const FooterFormBody = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 534px;
  padding-bottom: 4px;
  border-bottom: 1px solid #D8D8D8;
  font-size: 20px;
  &:hover {
    border-bottom: 1px solid #000000;
  }
  &:focus {
    border-bottom: 1px solid #000000;
  }
  input {
    width: 100%;
    color: ${props => props.color || "#8C8C8C"};
    background: initial;
    border: none;
    outline: none;
    cursor: pointer;
  }
  button {
    background: initial;
    border: none;
    outline: none;
    color: ${props => props.color || "#000F08"};
    cursor: pointer;
  }
`