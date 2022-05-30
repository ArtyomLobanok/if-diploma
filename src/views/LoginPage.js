import {Link} from "react-router-dom";
import {
    LinkToRegistrationText, LoginAccText, SingUpBtnText,
} from "../configs/stringsData";
import {
    CloseIcon, Form, FormWrapper, RegisterFormBody,
    RegisterFormTitle,
    RegisterFormTitleWrapper, StyledInputRegisterForm, StyledLinkToLogin, StyledSingUpBtn,
} from "../components/Styled-Components/styledRegistrationPage";

const LoginPage = () => {
    return (
        <FormWrapper>
            <Form method="post">
                <RegisterFormTitleWrapper>
                    <RegisterFormTitle>{LoginAccText}</RegisterFormTitle>
                    <Link to="/">
                        <CloseIcon>
                            <use href="#closeForm"></use>
                        </CloseIcon>
                    </Link>
                </RegisterFormTitleWrapper>
                <RegisterFormBody>
                    <StyledInputRegisterForm autocomplete="off" type="email" placeholder="Email" required/>
                    <StyledInputRegisterForm autocomplete="off" type="password" placeholder="Password" required/>
                    <StyledSingUpBtn>{SingUpBtnText}</StyledSingUpBtn>
                    <StyledLinkToLogin>{LinkToRegistrationText}</StyledLinkToLogin>
                </RegisterFormBody>
            </Form>
        </FormWrapper>
    )
}

export default LoginPage;