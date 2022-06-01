import styled from "styled-components";
import CheckboxCheck from "../../assets/img/Check-buttons/checkbox-check-not_focus.svg";
import CheckboxDefault from "../../assets/img/Check-buttons/checkbox-default.svg";
import {Link} from "react-router-dom";

export const RegisterFormTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 54px 54px 0;
`

export const RegisterFormTitle = styled.h2`
  color: ${props => props.color || "#000F08"};
  font-size: 20px;
  font-weight: 400;
`

export const CloseIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#1D1D1B"};
  width: ${props => props.width || '22px'};
  height: ${props => props.height || '22px'};
`

export const RegisterFormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 66px 50px
`

export const FormWrapper = styled.section`
  padding: 82px;
  background-color: #BDBDBD;
  max-width: 1920px;
  width: 100%;
  height: 100vh;
`

export const Form = styled.form`
  margin: 0 auto;
  background-color: #FFFFFF;
  width: 664px;
`

export const StyledInputRegisterForm = styled.input`
  padding-bottom: 14px;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 300;
  color: #8C8C8C;
  outline: none;
  border: none;
  border-bottom: 1px solid #D8D8D8;
  cursor: pointer;
`

export const AgreementWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
  color: #000F08;

  input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:checked + span {
      transition: all 0.2s linear;
      background-image: url(${CheckboxCheck});
    }
  }

  label {
    padding-left: 32px;
    font-size: 15px;
    font-weight: 300;
  }

  span {
    position: absolute;
    width: 22px;
    height: 22px;
    margin-left: -32px;
    margin-top: 4px;
    background-image: url(${CheckboxDefault});
  }
`

export const StyledSingUpBtn = styled.button`
  padding: 21px 118px;
  margin: 0 auto 42px;
  max-width: 320px;
  border: none;
  outline: none;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    outline: 1px solid #000000;
    background-color: #FFFFFF;
    color: #000000;
    transition: 0.3s linear;
  }
`

export const StyledLinkToLogin = styled(Link)`
  text-decoration: underline;
  font-weight: 300;
  font-size: 16px;
  cursor: pointer;
`

export const SubscriptionWrapper = styled.div`
  display: flex;
  margin-bottom: 46px;
  color: #8C8C8C;

  a {
    padding: 0 5px;
    color: #000F08;
    textDecoration: underline;
    cursor: pointer;
  }
`