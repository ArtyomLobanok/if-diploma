import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {currentPageToShow} from "../../redux/actions";


const SearchResultsData = () => {
    const isShow = useSelector(state => state.showSearchResultsReducer);
    const dispatch = useDispatch();
    const SearchResults = useSelector(state => state.searchDataReducer);
    console.log(SearchResults)
    const page = useSelector(state => state.currentPageToShowReducer);
    const firstItemIndex = 0;
    const lastItemIndex = SearchResults.length - 1;
    const [itemsToShow] = useState(4);
    const paginatedList = SearchResults.slice(firstItemIndex, page * itemsToShow);
    const handleAddItemsToShow = () => {
        dispatch(currentPageToShow(page+1))
    }

    return {
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
        SearchResults,
        isShow,
    }

}

export default SearchResultsData;