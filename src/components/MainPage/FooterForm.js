import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
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
} from "../Styled-Components/styledFooterForm";
import {sendEmail} from "../../redux/actions";
import {BasketSendSuccess} from "../Styled-Components/styleBasketPage";


const FooterForm = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    console.log(inputValue)
    console.log(typeof inputValue)
    const responseData = useSelector(state => state.emailSendReducer);
    console.log(responseData)
    console.log(typeof responseData)
    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSendEmail = (e) => {
        e.preventDefault();
        dispatch(sendEmail(inputValue));
    }

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