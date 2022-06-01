import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import FormLogin from './FormLogin';
import {setUser} from '../../redux/slices/userSlice';

const SingIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <FormLogin handleClick={handleLogin}/>
    )
}

export default SingIn;