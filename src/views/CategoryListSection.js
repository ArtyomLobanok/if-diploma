import {
    Container,
    Section,
    SectionTitle,
    SectionTitleBold,
    SectionTitleWrapper
} from "../components/StyledComponents/General";
import {
    sectionCategoryTitleTextPartOne,
    sectionCategoryTitleTextPartSecond,
} from "../configs/stringsDataConfig";
import CardOfButtonCategory from "../components/MainPage/CardOfButtonCategory";
import {categoryListData} from "../components/MainPage/CategoryListData";
import {catalogLoad, currentPageToShow, showSectionCategory} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import CategoryFilteredData from "../components/MainPage/FilteredData";
import {BtnCategoryWrapper} from "../components/StyledComponents/styledCategorySection";


const ShopCategory = () => {
    const filteredClothesList = useSelector(state => state.catalogLoadReducer);
    const {handleShowResults} = CategoryFilteredData(filteredClothesList);
    const dispatch = useDispatch();
    const handleChange = ({e, title}) => {
        dispatch(showSectionCategory(true))
        dispatch(currentPageToShow(1))
        e.preventDefault()
        dispatch(catalogLoad(title))
    }

    return (
        <>
            <Section>
                <Container>
                    <SectionTitleWrapper>
                        <SectionTitle marginRight='14px'>{sectionCategoryTitleTextPartOne}</SectionTitle>
                        <SectionTitleBold>{sectionCategoryTitleTextPartSecond}</SectionTitleBold>
                    </SectionTitleWrapper>
                    <BtnCategoryWrapper>
                        {
                            categoryListData.map(btnCard => (
                                <CardOfButtonCategory handleChange={handleChange} handleShowResults={handleShowResults}
                                                      key={btnCard.id}
                                                      card={btnCard}/>
                            ))
                        }
                    </BtnCategoryWrapper>
                </Container>
            </Section>
        </>
    )
}
export default ShopCategory;