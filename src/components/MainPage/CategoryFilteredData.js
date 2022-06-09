import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {currentPageToShow} from "../../redux/actions";


const CategoryFilteredData = () => {
    const dispatch = useDispatch();
    const filteredClothesList = useSelector(state => state.catalogLoadReducer);
    const page = useSelector(state => state.currentPageToShowReducer);
    console.log(page)
    const firstItemIndex = 0;
    const lastItemIndex = filteredClothesList.length - 1;
    const [itemsToShow] = useState(4);
    const paginatedList = filteredClothesList.slice(firstItemIndex, page * itemsToShow);
    const handleAddItemsToShow = () => {
        dispatch(currentPageToShow(page+1))
    }

    const filteredDataTitle = () => {
        return (filteredClothesList[0].type)
    }
    return {
        filteredDataTitle,
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
        filteredClothesList,
    }

}

export default CategoryFilteredData;