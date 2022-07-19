import {setItemInFavorites, deleteItemFromFavorites} from "../redux/favorites/favoritesReducer";
import {useDispatch, useSelector} from "react-redux";

const useToggleFavorites = ({ card, id}) => {
    const itemsFavorites = useSelector(state => state.favorites.itemsInFavorites);
    const isItemInFavorites = itemsFavorites.some(item => item.id === id);
    const dispatch = useDispatch();
    const handleAddToFavorites = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(setItemInFavorites(card))
    }

    const handleRemFromFavorites = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isItemInFavorites) {
            dispatch(deleteItemFromFavorites(id))
        } else {
            dispatch(setItemInFavorites(card))
        }
    }
    return {
        handleAddToFavorites,
        handleRemFromFavorites,
        isItemInFavorites,
    }
}

export default useToggleFavorites;