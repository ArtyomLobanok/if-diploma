import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import FormRegister from './FormRegister';
import FormData from "./FormData";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {firstName,lastName} = FormData();
    console.log(firstName)
    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <FormRegister handleClick={handleRegister}/>
    )
}

export default SignUp;