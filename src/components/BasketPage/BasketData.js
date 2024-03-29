import {useDispatch, useSelector} from "react-redux";
import {basket} from "../../redux/actions";
import scrollToTop from "../ScrollToTop";

const BasketData = () => {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.itemsInBasket);
    const responseData = useSelector(state => state.idLoadReducer);
    const idArray = basketItems.map(item => item.id);
    const handleProceedToCheckout = (e) => {
        e.preventDefault()
        dispatch(basket(idArray))
        scrollToTop()
    }
    return {
        responseData,
        handleProceedToCheckout,
        basketItems,
    };
};
export default BasketData;