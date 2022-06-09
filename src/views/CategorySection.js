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
import {productLoad} from "../redux/actions";
import CategoryFilteredData from "../components/MainPage/CategoryFilteredData";

const CategorySection = () => {
    const dispatch = useDispatch();
    const isShow = useSelector(state => state.showSectionCategoryReducer);

    const handleSetId = (e) => {
        window.scrollTo(0, 0)
        dispatch(productLoad(e.target.id))
    }
    const {
        filteredDataTitle,
        paginatedList,
        lastItemIndex,
        handleAddItemsToShow,
        filteredClothesList,
    } = CategoryFilteredData()

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
                                        filteredDataTitle()
                                    }
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
export default CategorySection;