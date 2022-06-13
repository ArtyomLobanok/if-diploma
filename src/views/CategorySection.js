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
import {BtnShowMoreItemCategoryText, NotFoundText} from "../configs/stringsDataConfig";
import FilteredData from "../components/MainPage/FilteredData";
import {unloadData} from "../redux/actions";
import scrollToTop from "../components/ScrollToTop";

const CategorySection = () => {
    const filteredClothesList = useSelector(state => state.catalogLoadReducer);
    const isShow = useSelector(state => state.showSectionCategoryReducer);
    const dispatch = useDispatch();
    const handleGetId = (e) => {
        dispatch(unloadData(e.target.id))
        scrollToTop()
    }
    const {
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
    } = FilteredData(filteredClothesList)

    return (
        (isShow.show === true) &&
        <Section>
            <Container>
                {
                    filteredClothesList.length === 0 ? (
                        <>
                            <ShopCategoryNotFound>{NotFoundText}</ShopCategoryNotFound>
                        </>
                    ) : (
                        <>
                            <SectionTitleWrapper>
                                <SectionTitleBold>
                                    {
                                        (filteredClothesList[0].type)
                                    }
                                </SectionTitleBold>
                            </SectionTitleWrapper>
                            <Flex width='100%' wrap='wrap'>
                                {
                                    paginatedList.map(categoryCard => (
                                        <CardOfCategory handleGetId={handleGetId}
                                                        key={categoryCard.id}
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
export default CategorySection;