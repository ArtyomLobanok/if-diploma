import {
    Container, Flex,
    Section,
    SectionTitleBold,
    SectionTitleWrapper,
} from "../components/Styled-Components/General";
import CardOfCategory from "../components/MainPage/CardOfCategory";
import {useDispatch} from "react-redux";
import {
    ShopCategoryNotFound,
    StyledBtnShowMoreItemCategory
} from "../components/Styled-Components/styledCategorySection";
import {BtnShowMoreItemCategoryText, NotFoundText, SearchTitleText} from "../configs/stringsDataConfig";
import {productLoad} from "../redux/actions";
import SearchResultsData from "../components/MainPage/SearchFilteredData";

const SearchSection = () => {
    const dispatch = useDispatch();

    const handleSetId = (e) => {
        window.scrollTo(0, 0)
        dispatch(productLoad(e.target.id))
    }

    const {
        SearchResults,
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
        isShow,
    } = SearchResultsData()

    return (
        (isShow.show === true) &&
        <Section>
            <Container>
                {
                    SearchResults.length === 0 ? (
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
                                        <CardOfCategory handleSetId={handleSetId} key={categoryCard.id}
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