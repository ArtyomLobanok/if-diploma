import { useSelector } from "react-redux";

const useAuth = () => {
    const {email, token, id, firstName, lastName} = useSelector(state=> state.user);
    return {
        isAuth: !!email,
        email,
        token,
        id,
        firstName,
        lastName,
    };
}

export default useAuth;