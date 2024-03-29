import {
    sectionSaleTitleTextPartOne,
    sectionSaleTitleTextPartSecond
} from "../configs/stringsDataConfig";
import {
    Container,
    Section,
    SectionTitle,
    SectionTitleWrapper,
    SectionTitleBold
} from "../components/StyledComponents/General";
import SaleSlider from "../components/MainPage/SaleSlider";

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