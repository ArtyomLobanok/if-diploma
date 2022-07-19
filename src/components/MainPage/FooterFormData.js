import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {sendEmail} from "../../redux/actions";

const FooterFormData = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const responseData = useSelector(state => state.emailSendReducer);
    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleSendEmail = (e) => {
        e.preventDefault();
        dispatch(sendEmail(inputValue));
    }

    return {
        responseData,
        handleChangeInput,
        handleSendEmail,
    };
};

export default FooterFormData;