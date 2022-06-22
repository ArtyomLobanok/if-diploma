import {
    Form, RegisterFormBody,
    RegisterFormTitle,
    RegisterFormTitleWrapper, StyledInputRegisterForm, StyledLinkToLogin, StyledSingUpBtn,
} from "../StyledComponents/styledRegistrationPage";
import {
    LinkToRegistrationText, LoginAccText, SingUpBtnText,
} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";
import FormData from "./FormData"
import CloseIcon from "../../assets/img/closeIcon.svg";

const FormLogin = ({handleClick}) => {
    const {handleSubmit, handleChangeEmail, handleChangePassword, email, pass} = FormData();
    const handleLogin = () => {
        handleClick(email, pass)
    };
    return (
        <Form onSubmit={handleSubmit}>
            <RegisterFormTitleWrapper>
                <RegisterFormTitle>{LoginAccText}</RegisterFormTitle>
                <Link to="/">
                    <img src={CloseIcon} alt="Close"/>
                </Link>
            </RegisterFormTitleWrapper>
            <RegisterFormBody>
                <StyledInputRegisterForm
                    autocomplete="off"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Email"
                    required/>
                <StyledInputRegisterForm
                    autocomplete="off"
                    type="password"
                    value={pass}
                    onChange={handleChangePassword}
                    placeholder="Password"
                    required/>
                <StyledSingUpBtn onClick={handleLogin}>{SingUpBtnText}</StyledSingUpBtn>
                <StyledLinkToLogin to="/register">{LinkToRegistrationText}</StyledLinkToLogin>
            </RegisterFormBody>
        </Form>
    )
}

export default FormLogin;