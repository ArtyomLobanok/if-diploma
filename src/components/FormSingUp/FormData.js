import {useState} from "react";

const FormData = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleChangePassword = (e) => {
        setPass(e.target.value)
    };

    return {
        handleChangeFirstName,
        handleChangeLastName,
        handleSubmit,
        handleChangeEmail,
        handleChangePassword,
        email,
        pass,
        firstName,
        lastName,
    }
}

export default FormData;