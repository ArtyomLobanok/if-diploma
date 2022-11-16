import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {currentPageToShow} from "../../redux/actions";

const FilteredData = (params) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.currentPageToShowReducer);
    const firstItemIndex = 0;
    const lastItemIndex = params.length - 1;
    const [itemsToShow] = useState(4);
    const paginatedList = params.slice(firstItemIndex, page * itemsToShow);
    const handleAddItemsToShow = () => {
        dispatch(currentPageToShow(page+1))
    }

    return {
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
    }
}

export default FilteredData;