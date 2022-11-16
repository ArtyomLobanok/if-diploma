import {unloadData} from "../redux/actions";
import scrollToTop from "../components/ScrollToTop";
import {useDispatch} from "react-redux";

const useGetId = (id) => {
    const dispatch = useDispatch();
    const handleGetId = (e) => {
        dispatch(unloadData(id))
        scrollToTop()
    }
    return {
        handleGetId
    }
}

export default useGetId;