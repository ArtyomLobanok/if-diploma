import {
    Container,
    Section,
    SectionTitle,
    SectionTitleBold,
    SectionTitleWrapper
} from "../components/Styled-Components/General";
import {
    SearchTitleText,
} from "../configs/stringsDataConfig";
import SaleSlider from "../components/MainPage/SaleSlider";

const SearchResults = () => {
    return (
        <Section>
            <Container>
                <SectionTitleWrapper>
                    <SectionTitleBold>{SearchTitleText}</SectionTitleBold>
                </SectionTitleWrapper>
                <SaleSlider/>
            </Container>
        </Section>
    )
}
export default Sale;