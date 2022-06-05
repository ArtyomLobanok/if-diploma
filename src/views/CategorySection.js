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
    const [listMultiplier, setListMultiplier] = useState(1);
    const paginatedList = filteredClothesList.slice(0, listMultiplier * 4)

    const filteredDataTitle = () => {
        return (filteredClothesList[0].type)
    }

    const handleChange = () => {
        setListMultiplier(listMultiplier + 1)
    }

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
                <StyledBtnShowMoreItemCategory onClick={handleChange}>
                    {BtnShowMoreItemCategoryText}
                </StyledBtnShowMoreItemCategory>
            </Container>
        </Section>
    )
}
export default CategorySection;