import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import FormRegister from './FormRegister';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password, firstName, lastName) => {
        const auth = getAuth();
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