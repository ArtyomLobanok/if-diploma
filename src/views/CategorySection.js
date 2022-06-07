import {useState} from "react";
import {
    Container, Flex,
    Section,
    SectionTitleBold,
    SectionTitleWrapper,
} from "../components/Styled-Components/General";
import CardOfCategory from "../components/MainPage/CardOfCategory";
import {useDispatch, useSelector} from "react-redux";
import {StyledBtnShowMoreItemCategory} from "../components/Styled-Components/styledCategorySection";
import {BtnShowMoreItemCategoryText} from "../configs/stringsDataConfig";
import {productLoad} from "../redux/actions";

const CategorySection = () => {
    const dispatch = useDispatch();
    const handleSetId = (e) => {
        window.scrollTo(0, 0)
        dispatch(productLoad(e.target.id))
    }
    const filteredClothesList = useSelector(state => state.catalogLoadReducer);



    const firstItemIndex = 0;
    const lastItemIndex = filteredClothesList.length - 1;
    const [currentPageToShow, setCurrentPageToShow] = useState(1);
    const [itemsToShow] = useState(4);
    const paginatedList = filteredClothesList.slice(firstItemIndex, currentPageToShow * itemsToShow);
    const handleAddItemsToShow = () => {
        setCurrentPageToShow(currentPageToShow + 1)
    }

    const filteredDataTitle = () => {
        return (filteredClothesList[0].type)
    }
    console.log(filteredClothesList.length)
    console.log(paginatedList.length)

    return (
        filteredClothesList.length !== 0 &&
        <Section>
            <Container>
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
                            <CardOfCategory handleSetId={handleSetId} key={categoryCard.id} card={categoryCard}/>
                        ))

                    }
                </Flex>
                { paginatedList.length <= lastItemIndex  &&
                <StyledBtnShowMoreItemCategory onClick={handleAddItemsToShow}>
                    {BtnShowMoreItemCategoryText}
                </StyledBtnShowMoreItemCategory>
                }
            </Container>
        </Section>
    )
}
export default CategorySection;