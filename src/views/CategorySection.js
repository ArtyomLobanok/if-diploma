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
import {BtnShowMoreItemCategoryText, NotFoundText} from "../configs/stringsDataConfig";
import FilteredData from "../components/MainPage/FilteredData";


const CategorySection = () => {
    const filteredClothesList = useSelector(state => state.catalogLoadReducer);
    const isShow = useSelector(state => state.showSectionCategoryReducer);
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
                            <Flex justify='center' width='100%' wrap='wrap'>
                                {
                                    paginatedList.map(categoryCard => (
                                        <CardOfCategory
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