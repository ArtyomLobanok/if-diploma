import Header from "./Header";
import ShopCategory from "./CategoryListSection";
import CategorySection from "./CategorySection";
import Sale from "./Sale";
import ShopInstagram from "./ShopInstagram";
import Footer from "./Footer";
import SearchSection from "./SearchResults";
import HeaderIntroForMobile from "./HeaderInnerMobile";
import {createRef} from "react";

const MainPage = () => {
    const searchResultRef = createRef();
    return (
        <>
            <Header searchResultRef={searchResultRef}/>
            <HeaderIntroForMobile/>
            <div ref={searchResultRef}>
            <SearchSection/>
            </div>
            <ShopCategory/>
            <CategorySection/>
            <Sale/>
            <ShopInstagram/>
            <Footer/>
        </>
    );
}

export default MainPage;