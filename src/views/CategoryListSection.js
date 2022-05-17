import {
    Container,
    Flex,
    Section,
    SectionTitle,
    SectionTitleBold,
    SectionTitleWrapper
} from "../components/Styled-Components/General";
import {
    sectionCategoryTitleTextPartOne,
    sectionCategoryTitleTextPartSecond,
} from "../configs/stringsData";
import CardOfButtonCategory from "../components/CardOfButtonCategory";
import {categoryListData} from "../components/CategoryListData";

const ShopCategory = () => {
    return (
        <>
            <Section>
                <Container>
                    <SectionTitleWrapper>
                        <SectionTitle marginRight='14px'>{sectionCategoryTitleTextPartOne}</SectionTitle>
                        <SectionTitleBold>{sectionCategoryTitleTextPartSecond}</SectionTitleBold>
                    </SectionTitleWrapper>
                    <Flex>
                        {
                            categoryListData.map(btnCard => (
                                <CardOfButtonCategory key={btnCard.id} card={btnCard}/>
                            ))
                        }
                    </Flex>
                </Container>
            </Section>
        </>
    )
}
export default ShopCategory;