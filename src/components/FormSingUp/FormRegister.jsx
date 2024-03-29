import {
    AgreementWrapper,
    Form, FormSection,
    RegisterFormBody,
    RegisterFormTitle,
    RegisterFormTitleWrapper, StyledInputRegisterForm, StyledLinkToLogin, StyledSingUpBtn, SubscriptionWrapper
} from "../StyledComponents/styledRegistrationPage";
import {
    AgreementText,
    AgreementTextPartFirst,
    AgreementTextPartSecond,
    CreateAccText,
    LinkToLoginText,
    SingUpBtnText,
    SubTextAgreePartFirst,
    SubTextAgreePartSecond,
    SubTextPolicy,
    SubTextTerms
} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";
import FormData from "./FormData";
import CloseIcon from "../../assets/img/closeIcon.svg";
import Media from "react-media";

const FormRegister = ({handleClick}) => {
    const {
        handleChangeFirstName, handleChangeLastName, handleSubmit, handleChangeEmail, handleChangePassword,
        email, pass, firstName, lastName
    } = FormData();
    const handleRegister = () => {
        handleClick(email, pass, firstName, lastName)
    };
    return (
        <FormSection>
            <Form onSubmit={handleSubmit}>
                <RegisterFormTitleWrapper>
                    <RegisterFormTitle>{CreateAccText}</RegisterFormTitle>
                    <Link to="/">
                        <img src={CloseIcon} alt="Close"/>
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
                            <Media query={{maxWidth: 376}}>
                                {matches =>
                                    matches ? (
                                        <>
                                            {AgreementText}

                                        </>
                                    ) : (
                                        <>
                                            {AgreementTextPartFirst}<br/>{AgreementTextPartSecond}
                                        </>
                                    )
                                }
                            </Media>


                        </label>
                    </AgreementWrapper>
                    <SubscriptionWrapper>
                        {SubTextAgreePartFirst}
                        <a href="/#">{SubTextTerms}</a>
                        {SubTextAgreePartSecond}
                        <a href="/#">{SubTextPolicy}</a>
                    </SubscriptionWrapper>
                    <StyledSingUpBtn onClick={handleRegister}>{SingUpBtnText}</StyledSingUpBtn>
                    <StyledLinkToLogin to="/login">{LinkToLoginText}</StyledLinkToLogin>
                </RegisterFormBody>
            </Form>
        </FormSection>
    )
}

export default FormRegister;