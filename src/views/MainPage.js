import Header from "./Header";
import ShopCategory from "./CategoryListSection";
import CategorySection from "./CategorySection";
import Sale from "./Sale";
import ShopInstagram from "./ShopInstagram";
import Footer from "./Footer";
import ItemPage from "./ItemPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

const MainPage = () => {
    return (
        <>
            <Header/>
            <ShopCategory/>
            <CategorySection/>
            <Sale/>
            <ShopInstagram/>
            <Footer/>
            <ItemPage/>
            <RegisterPage/>
            <LoginPage/>
        </>
    );
}

export default MainPage;