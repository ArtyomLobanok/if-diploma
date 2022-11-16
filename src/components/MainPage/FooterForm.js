import {
    singUpBtnText,
    singUpFormFooterSubTitleText,
    singUpFormFooterTitleText,
    singUpPlaceholderText
} from "../../configs/stringsDataConfig";
import {
    FooterFormBody,
    FooterFormHeader,
    FooterFormWrapper
} from "../StyledComponents/styledFooterForm";
import FooterFormData from "./FooterFormData";

const FooterForm = () => {
    const {responseData, handleChangeInput, handleSendEmail} = FooterFormData()
    return (
        <FooterFormWrapper>
            <FooterFormHeader>
                <h4>{singUpFormFooterTitleText}</h4>
                <p>{singUpFormFooterSubTitleText}</p>
            </FooterFormHeader>
            {
                responseData.length !== 0 ?
                    <h1>{responseData.message}...</h1>
                    :
                    <FooterFormBody type='submit'>
                        <input onChange={handleChangeInput} placeholder={singUpPlaceholderText}/>
                        <button onClick={handleSendEmail}>
                            {singUpBtnText}
                        </button>
                    </FooterFormBody>
            }
        </FooterFormWrapper>
    )
}

export default FooterForm;