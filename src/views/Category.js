import {Container, Section, SectionTitle} from "../components/Styled-Components/General";
import {sectionCategoryTitleText} from "../configs/stringsData";

const ShopCategory = () => {
    return (
        <>
            <Section>
                <Container>
                    <SectionTitle>
                        {sectionCategoryTitleText}
                    </SectionTitle>
                </Container>
            </Section>
        </>
    )
}
export default ShopCategory;