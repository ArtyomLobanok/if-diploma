import {deleteItemFromBasket, setItemInBasket} from "../redux/cart/basketReducer";
import {useDispatch, useSelector} from "react-redux";

const useToggleBasket = ({ card, id}) => {
    const itemsBasket = useSelector(state => state.basket.itemsInBasket);
    const isItemInCart = itemsBasket.some(item => item.id === id);
    const dispatch = useDispatch();
    const handleAddCard = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(setItemInBasket(card))
    }

    const handleRemCard = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isItemInCart) {
            dispatch(deleteItemFromBasket(id))
        } else {
            dispatch(setItemInBasket(card))
        }
    }
    return {
        handleRemCard,
        handleAddCard,
        isItemInCart,
    }
}

export default useToggleBasket;