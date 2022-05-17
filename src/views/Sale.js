import {
    sectionSaleTitleTextPartOne,
    sectionSaleTitleTextPartSecond
} from "../configs/stringsData";
import {
    Container,
    Section,
    SectionTitle,
    SectionTitleWrapper,
    SectionTitleBold
} from "../components/Styled-Components/General";
import SaleSlider from "../components/SaleSlider";

const Sale = () => {
    return (
        <Section>
            <Container>
                <SectionTitleWrapper>
                    <SectionTitle>{sectionSaleTitleTextPartOne}</SectionTitle>
                    <SectionTitleBold>{sectionSaleTitleTextPartSecond}</SectionTitleBold>
                </SectionTitleWrapper>
                <SaleSlider/>
            </Container>
        </Section>
    )
}
export default Sale;