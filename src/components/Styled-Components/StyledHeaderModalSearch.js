import styled from "styled-components";

export const SearchContainer = styled.div`
  z-index: 1000;
  position: absolute;
  background: rgba(184, 260, 260, 0.8);
  box-shadow: inset 0 0.25rem 4.375rem rgba(56, 56, 56, 0.5);
  width: 100%;
  height: 100vh;
`
export const SearchWrapper = styled.div`
  max-width: 1364px;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 50%;
  transform: translate3d(5%, -50%, 0);

  svg {
    width: 58px;
    height: 58px;
    margin-right: 50px;
  }

  form {
    background-color: initial;

    input {
      width: 100%;
      background-color: initial;
      border: none;
      border-bottom: 1px solid #8C8C8C;
      color: #333333;
      outline: none;
      padding: 20px;
      font-size: 42px;
      font-weight: 400;
      
      &::placeholder{
      font-size: 42px;
      font-weight: 400;
      color: #333333;
      
    }
  }
}

`