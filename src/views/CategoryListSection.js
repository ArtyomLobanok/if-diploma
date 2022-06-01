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
} from "../configs/stringsDataConfig";
import CardOfButtonCategory from "../components/CardOfButtonCategory";
import {categoryListData} from "../components/CategoryListData";
import {catalogLoad} from "../redux/actions";
import {useDispatch} from "react-redux";


const ShopCategory = () => {
    const dispatch = useDispatch();
    const handleChange = ({e, title}) => {
        e.preventDefault()
        dispatch(catalogLoad(title));
    }
    // const filteredClothesList = useSelector(state => state.catalogLoadReducer)
    return (
        <>
            <Section>
                <Container>
                    {/*<ShopCategoryNotFound>{NotFoundText}</ShopCategoryNotFound>*/}
                            <SectionTitleWrapper>
                                <SectionTitle marginRight='14px'>{sectionCategoryTitleTextPartOne}</SectionTitle>
                                <SectionTitleBold>{sectionCategoryTitleTextPartSecond}</SectionTitleBold>
                            </SectionTitleWrapper>
                            <Flex>
                                {
                                    categoryListData.map(btnCard => (
                                        <CardOfButtonCategory handleChange={handleChange} key={btnCard.id}
                                                              card={btnCard}/>
                                    ))
                                }
                            </Flex>
                </Container>
            </Section>
        </>
    )
}
export default ShopCategory;