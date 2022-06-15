import {
    Container, Flex,
    Section,
    SectionTitleBold,
    SectionTitleWrapper,
} from "../components/Styled-Components/General";
import CardOfCategory from "../components/MainPage/CardOfCategory";
import {useSelector} from "react-redux";
import {
    ShopCategoryNotFound,
    StyledBtnShowMoreItemCategory
} from "../components/Styled-Components/styledCategorySection";
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
                            <Flex width='100%' wrap='wrap'>
                                {
                                    paginatedList.map(categoryCard => (
                                        <CardOfCategory key={categoryCard.id}
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