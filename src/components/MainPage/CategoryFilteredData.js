import {useSelector} from "react-redux";
import {useState} from "react";


const CategoryFilteredData = () => {
    const filteredClothesList = useSelector(state => state.catalogLoadReducer);
    const firstItemIndex = 0;
    const lastItemIndex = filteredClothesList.length - 1;
    const [currentPageToShow, setCurrentPageToShow] = useState(1);
    const [itemsToShow] = useState(4);
    const paginatedList = filteredClothesList.slice(firstItemIndex, currentPageToShow * itemsToShow);
    const handleAddItemsToShow = () => {
        setCurrentPageToShow(currentPageToShow + 1)
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