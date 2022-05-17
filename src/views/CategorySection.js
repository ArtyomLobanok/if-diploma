import {
    Container, Flex,
    Section,
    SectionTitleBold,
    SectionTitleWrapper,
} from "../components/Styled-Components/General";
import CardOfCategory from "../components/CardOfCategory";
import useCatalogFetch from "../hooks/getDataCatalog";


const CategorySection = () => {
    const {catalogArray} = useCatalogFetch();
    return (
        <Section>
            <Container>
                <SectionTitleWrapper>
                    <SectionTitleBold>
                        Dresses
                    </SectionTitleBold>
                </SectionTitleWrapper>
                <Flex width='100%' wrap='wrap'>
                {
                    catalogArray.map(categoryCard => (
                    <CardOfCategory key={categoryCard.id} card={categoryCard}/>
                ))
                }
                </Flex>
            </Container>
        </Section>
    )
}
export default CategorySection;