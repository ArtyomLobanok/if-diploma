import {
    Container,
    Flex,
    Section,
    SectionTitle,
    SectionTitleBold,
    SectionTitleWrapper
} from "../components/Styled-Components/General";
import {
    categoryBtnTextBeauty,
    categoryBtnTextDenim,
    categoryBtnTextDresses,
    categoryBtnTextSwimwear,
    categoryBtnTextTees, categoryBtnTextTops,
    sectionCategoryTitleTextPartOne, sectionCategoryTitleTextPartSecond
} from "../configs/stringsData";
import {BtnCategory, StyledSvgCategory} from "../components/Styled-Components/styledCategorySection";

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
                        <BtnCategory>
                            <StyledSvgCategory>
                                <use href="#dressIcon"></use>
                            </StyledSvgCategory>
                            {categoryBtnTextDresses}
                        </BtnCategory>
                        <BtnCategory>
                            <StyledSvgCategory>
                                <use href="#teesIcon"></use>
                            </StyledSvgCategory>
                            {categoryBtnTextTees}
                        </BtnCategory>
                        <BtnCategory>
                            <StyledSvgCategory>
                                <use href="#swimwearIcon"></use>
                            </StyledSvgCategory>
                            {categoryBtnTextSwimwear}
                        </BtnCategory>
                        <BtnCategory>
                            <StyledSvgCategory>
                                <use href="#denimIcon"></use>
                            </StyledSvgCategory>
                            {categoryBtnTextDenim}
                        </BtnCategory>
                        <BtnCategory>
                            <StyledSvgCategory>
                                <use href="#topsIcon"></use>
                            </StyledSvgCategory>
                            {categoryBtnTextTops}
                        </BtnCategory>
                        <BtnCategory>
                            <StyledSvgCategory>
                                <use href="#beautyIcon"></use>
                            </StyledSvgCategory>
                            {categoryBtnTextBeauty}
                        </BtnCategory>
                    </Flex>
                </Container>
            </Section>
        </>
    )
}
export default ShopCategory;