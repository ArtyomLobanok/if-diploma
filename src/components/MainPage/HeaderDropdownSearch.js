import {useDispatch, useSelector} from "react-redux";
import {SearchContainer, SearchForm} from "../Styled-Components/styledHeaderModalSearch";
import {currentPageToShow, inputSearchDataLoad, inputText, showSearch, showSearchResults} from "../../redux/actions";
import {SearchPlaceholderText} from "../../configs/stringsDataConfig";
import {Container} from "../Styled-Components/General";
import scrollToTop from "../ScrollToTop";

const HeaderDropdownSearch = () => {
    const dispatch = useDispatch();
    const isShowSearch = useSelector(state => state.SearchShowReducer);
    const textInput = useSelector(state => state.InputTextSearchReducer);
    const handleChangeInputText = (search) => {
        dispatch(inputText(search))
    }

    const handleClickToCloseSearch = () => {
        dispatch(showSearch(false))
    };

    const handleSubmit = (e) => {
        scrollToTop()
        dispatch(inputSearchDataLoad(textInput))
        dispatch(showSearchResults(true))
        dispatch(currentPageToShow(1))
        dispatch(showSearch(false))
        e.preventDefault()

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

export default HeaderDropdownSearch;