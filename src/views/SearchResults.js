import {
    Container, Flex,
    Section,
    SectionTitleBold,
    SectionTitleWrapper,
} from "../components/Styled-Components/General";
import CardOfCategory from "../components/MainPage/CardOfCategory";
import {useDispatch, useSelector} from "react-redux";
import {
    ShopCategoryNotFound,
    StyledBtnShowMoreItemCategory
} from "../components/Styled-Components/styledCategorySection";
import {BtnShowMoreItemCategoryText, NotFoundText, SearchTitleText} from "../configs/stringsDataConfig";
import FilteredData from "../components/MainPage/FilteredData";
import {unloadData} from "../redux/actions";

const SearchSection = () => {
    const isShow = useSelector(state => state.showSearchResultsReducer);
    const searchResults = useSelector(state => state.searchDataReducer);
    const dispatch = useDispatch();
    const handleGetId = (e) =>{
        dispatch(unloadData(e.target.id))
    }
    const {
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
    } = FilteredData(searchResults)

    return (
        (isShow.show === true) &&
        <Section>
            <Container>
                {
                    searchResults.length === 0 ? (
                        <>
                            <SectionTitleWrapper>
                                <SectionTitleBold>
                                    {SearchTitleText}
                                </SectionTitleBold>
                            </SectionTitleWrapper>
                            <ShopCategoryNotFound>{NotFoundText}</ShopCategoryNotFound>
                        </>
                    ) : (
                        <>
                            <SectionTitleWrapper>
                                <SectionTitleBold>
                                    {SearchTitleText}
                                </SectionTitleBold>
                            </SectionTitleWrapper>
                            <Flex width='100%' wrap='wrap'>
                                {
                                    paginatedList.map(categoryCard => (
                                        <CardOfCategory handleGetId={handleGetId} key={categoryCard.id}
                                                        card={categoryCard}/>
                                    ))
                                }
                            </Flex>
                            {
                                paginatedList.length <= lastItemIndex &&
                                <StyledBtnShowMoreItemCategory onClick={handleAddItemsToShow}>
                                    {BtnShowMoreItemCategoryText}
                                </StyledBtnShowMoreItemCategory>

                            }
                        </>
                    )
                }
            </Container>
        </Section>
    )
}
export default SearchSection;