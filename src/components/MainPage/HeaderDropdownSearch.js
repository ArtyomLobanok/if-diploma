import {useDispatch, useSelector} from "react-redux";
import {SearchContainer, SearchWrapper} from "../Styled-Components/StyledHeaderModalSearch";
import {showSearch} from "../../redux/actions";
import {SearchPlaceholderText} from "../../configs/stringsDataConfig";
import {Container} from "../Styled-Components/General";

const HeaderDropdownSearch = () => {
    const isShowSearch = useSelector(state => state.SearchShowReducer);
    const dispatch = useDispatch();
    const handleClickToCloseSearch = () => {
        dispatch(showSearch(false))
    }
    return (
        isShowSearch === true &&
        <SearchContainer>
            <Container>
                <SearchWrapper>
                    <svg onClick={handleClickToCloseSearch}
                         style={{width: '58px', height: '58px', marginRight: '50px'}}>
                        <use href="#closeSearchForm"></use>
                    </svg>
                    <form>
                        <input placeholder={SearchPlaceholderText}/>
                    </form>
                </SearchWrapper>
            </Container>
        </SearchContainer>

    )
}
export default HeaderDropdownSearch;