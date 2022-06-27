import {useDispatch, useSelector} from "react-redux";
import {SearchContainer, SearchForm} from "../StyledComponents/styledHeaderModalSearch";
import {currentPageToShow, inputSearchDataLoad, inputText, showSearch, showSearchResults} from "../../redux/actions";
import {SearchPlaceholderText} from "../../configs/stringsDataConfig";
import {Container} from "../StyledComponents/General";
import HeaderScrollToSearchResults from "./HeaderScrolltoSearchResults";

const HeaderSearch = () => {
    const dispatch = useDispatch();
    const {executeScroll} = HeaderScrollToSearchResults();
    const isShowSearch = useSelector(state => state.SearchShowReducer);
    const textInput = useSelector(state => state.InputTextSearchReducer);

    const handleChangeInputText = (search) => {
        dispatch(inputText(search))
    }

    const handleClickToCloseSearch = () => {
        dispatch(showSearch(false))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (textInput !== "") {
            dispatch(inputSearchDataLoad(textInput))
            dispatch(showSearchResults(true))
            dispatch(currentPageToShow(1))
            dispatch(showSearch(false))
            executeScroll()
        }
    }

    return (
        isShowSearch === true &&
        <SearchContainer>
            <Container>
                <SearchForm onSubmit={handleSubmit}>
                    <svg onClick={handleClickToCloseSearch}>
                        <use href="#closeSearchForm"/>
                    </svg>
                    <input
                        placeholder={SearchPlaceholderText}
                        value={textInput}
                        onChange={(e) => {
                            handleChangeInputText(e.target.value)
                        }}
                    />
                </SearchForm>
            </Container>
        </SearchContainer>
    )
}

export default HeaderSearch;