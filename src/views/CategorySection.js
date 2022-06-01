import {useState} from "react";
import {
    Container, Flex,
    Section,
    SectionTitleBold,
    SectionTitleWrapper,
} from "../components/Styled-Components/General";
import CardOfCategory from "../components/CardOfCategory";
import {useSelector} from "react-redux";
import {StyledBtnShowMoreItemCategory} from "../components/Styled-Components/styledCategorySection";
import {BtnShowMoreItemCategoryText} from "../configs/stringsDataConfig";

const CategorySection = () => {
    const [listMultiplier, setListMultiplier] = useState(1);
    const filteredClothesList = useSelector(state => state.catalogLoadReducer)
    console.log(filteredClothesList)
    const paginatedList = filteredClothesList.slice(0, listMultiplier * 4)
    const handleChange = () => {
        setListMultiplier(listMultiplier + 1)
    }
    return (
        filteredClothesList.length !== 0 &&
        <Section>
            <Container>
                <SectionTitleWrapper>
                    <SectionTitleBold>
                        Dresses
                    </SectionTitleBold>
                </SectionTitleWrapper>
                <Flex width='100%' wrap='wrap'>
                    {
                        paginatedList.map(categoryCard => (
                            <CardOfCategory key={categoryCard.id} card={categoryCard}/>
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