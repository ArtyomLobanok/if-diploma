import {Link} from "react-router-dom";
import {
    AgreementTextPartFirst,
    AgreementTextPartSecond, CreateAccText, LinkToLoginText, SingUpBtnText,
    SubTextAgreePartFirst,
    SubTextAgreePartSecond,
    SubTextPolicy,
    SubTextTerms
} from "../configs/stringsData";
import {
    AgreementWrapper,
    CloseIcon, Form, FormWrapper, RegisterFormBody,
    RegisterFormTitle,
    RegisterFormTitleWrapper, StyledInputRegisterForm, StyledLinkToLogin, StyledSingUpBtn, SubscriptionWrapper
} from "../components/Styled-Components/styledRegistrationPage";

const RegisterPage = () => {
    return (
        <FormWrapper>
            <Form method="post">
                <RegisterFormTitleWrapper>
                    <RegisterFormTitle>{CreateAccText}</RegisterFormTitle>
                    <Link to="/">
                        <CloseIcon>
                            <use href="#closeForm"></use>
                        </CloseIcon>
                    </Link>
                </RegisterFormTitleWrapper>
                <RegisterFormBody>
                    <StyledInputRegisterForm autocomplete="off" type="text" placeholder="First Name" required/>
                    <StyledInputRegisterForm autocomplete="off"  type="text" placeholder="Last Name" required/>
                    <StyledInputRegisterForm autocomplete="off"  type="email" placeholder="Email" required/>
                    <StyledInputRegisterForm autocomplete="off"  type="password" placeholder="Password" required/>
                    <AgreementWrapper>
                        <label>
                            <input type="checkbox" required/>
                            <span></span>
                            {AgreementTextPartFirst}<br/>{AgreementTextPartSecond}</label>
                    </AgreementWrapper>
                    <SubscriptionWrapper>
                        {SubTextAgreePartFirst}
                        <a href="#">{SubTextTerms}</a>
                        {SubTextAgreePartSecond}
                        <a href="#">{SubTextPolicy}</a>
                    </SubscriptionWrapper>
                    <StyledSingUpBtn>{SingUpBtnText}</StyledSingUpBtn>
                    <StyledLinkToLogin>{LinkToLoginText}</StyledLinkToLogin>
                </RegisterFormBody>
            </Form>
        </FormWrapper>
    )
}

export default RegisterPage;