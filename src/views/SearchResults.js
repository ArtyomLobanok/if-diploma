import {
    Container, Flex,
    Section,
    SectionTitleBold,
    SectionTitleWrapper,
} from "../components/StyledComponents/General";
import CardOfCategory from "../components/MainPage/CardOfCategory";
import {useSelector} from "react-redux";
import {
    SearchResultsWrapper,
    ShopCategoryNotFound,
    StyledBtnShowMoreItemCategory
} from "../components/StyledComponents/styledCategorySection";
import {BtnShowMoreItemCategoryText, NotFoundText, SearchTitleText} from "../configs/stringsDataConfig";
import FilteredData from "../components/MainPage/FilteredData";


const SearchSection = () => {
    const isShow = useSelector(state => state.showSearchResultsReducer);
    const searchResults = useSelector(state => state.searchDataReducer);
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
                            <SearchResultsWrapper>
                                {
                                    paginatedList.map(categoryCard => (
                                        <CardOfCategory key={categoryCard.id}
                                                        card={categoryCard}/>
                                    ))
                                }
                            </SearchResultsWrapper>
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