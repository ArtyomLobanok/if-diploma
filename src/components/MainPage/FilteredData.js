import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {currentPageToShow, productLoad} from "../../redux/actions";

const FilteredData = (params) => {
    const dispatch = useDispatch();
    const filteredClothesList = useSelector(state => state.catalogLoadReducer);
    const page = useSelector(state => state.currentPageToShowReducer);
    const firstItemIndex = 0;
    const lastItemIndex = filteredClothesList.length - 1;
    const [itemsToShow] = useState(4);
    const paginatedList = filteredClothesList.slice(firstItemIndex, page * itemsToShow);
    const handleAddItemsToShow = () => {
        dispatch(currentPageToShow(page+1))
    }
    const handleSetId = (e) => {
        window.scrollTo(0, 0)
        dispatch(productLoad(e.target.id))
    }
    return {
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
        handleSetId,
    }
}

export default FilteredData;