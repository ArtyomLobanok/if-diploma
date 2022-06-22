import Header from "./Header";
import ShopCategory from "./CategoryListSection";
import CategorySection from "./CategorySection";
import Sale from "./Sale";
import ShopInstagram from "./ShopInstagram";
import Footer from "./Footer";
import SearchSection from "./SearchResults";
import HeaderIntroForMobile from "./HeaderInnerMobile";

const MainPage = () => {
    return (
        <>
            <Header/>
            <HeaderIntroForMobile/>
            <SearchSection/>
            <ShopCategory/>
            <CategorySection/>
            <Sale/>
            <ShopInstagram/>
            <Footer/>
        </>
    );
}

export default MainPage;