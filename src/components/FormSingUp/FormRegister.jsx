import {
    AgreementWrapper,
    CloseIcon, Form,
    RegisterFormBody,
    RegisterFormTitle,
    RegisterFormTitleWrapper, StyledInputRegisterForm, StyledLinkToLogin, StyledSingUpBtn, SubscriptionWrapper
} from "../Styled-Components/styledRegistrationPage";
import {
    AgreementTextPartFirst,
    AgreementTextPartSecond,
    CreateAccText, LinkToLoginText, SingUpBtnText,
    SubTextAgreePartFirst, SubTextAgreePartSecond, SubTextPolicy, SubTextTerms
} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";
import FormData from "./FormData";

const FormRegister = ({handleClick}) => {
    const { handleChangeFirstName, handleChangeLastName,handleSubmit, handleChangeEmail, handleChangePassword,
        email, pass, firstName,lastName} = FormData();
    const handleLogin = () => {
        handleClick(email, pass)
    };
    console.log(firstName)
    return (
        <Form onSubmit={handleSubmit}>
            <RegisterFormTitleWrapper>
                <RegisterFormTitle>{CreateAccText}</RegisterFormTitle>
                <Link to="/">
                    <CloseIcon>
                        <use href="#closeForm"></use>
                    </CloseIcon>
                </Link>
            </RegisterFormTitleWrapper>
            <RegisterFormBody>
                <StyledInputRegisterForm
                    autocomplete="off"
                    name="FirstName"
                    type="text"
                    value={firstName}
                    onChange={handleChangeFirstName}
                    placeholder="First Name"
                    required/>
                <StyledInputRegisterForm
                    autocomplete="off"
                    name="LastName"
                    type="text"
                    value={lastName}
                    onChange={handleChangeLastName}
                    placeholder="Last Name"
                    required/>
                <StyledInputRegisterForm
                    autocomplete="off"
                    name="Email"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Email"
                    required/>
                <StyledInputRegisterForm
                    autocomplete="off"
                    name="Password"
                    type="password"
                    value={pass}
                    onChange={handleChangePassword}
                    placeholder="Password"
                    required/>
                <AgreementWrapper>
                    <label>
                        <input type="checkbox" name="Newsletter"/>
                        <span></span>
                        {AgreementTextPartFirst}<br/>{AgreementTextPartSecond}</label>
                </AgreementWrapper>
                <SubscriptionWrapper>
                    {SubTextAgreePartFirst}
                    <a href="#">{SubTextTerms}</a>
                    {SubTextAgreePartSecond}
                    <a href="#">{SubTextPolicy}</a>
                </SubscriptionWrapper>
                <StyledSingUpBtn onClick={handleLogin}>{SingUpBtnText}</StyledSingUpBtn>
                <StyledLinkToLogin to="/login">{LinkToLoginText}</StyledLinkToLogin>
            </RegisterFormBody>
        </Form>
    )
}

export default FormRegister;