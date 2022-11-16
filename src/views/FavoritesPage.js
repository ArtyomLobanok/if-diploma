import Svg from "../assets/svg";
import {ItemHeaderWrapper} from "../components/StyledComponents/styledItemPage";
import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import React from "react";
import Footer from "./Footer";
import FavoritesStoreBody from "../components/FavoritesPage/FavoritesStoreBody";

const FavoritesPage = () => {

    return (
        <>
            <Svg/>
            <ItemHeaderWrapper>
                <HeaderNavigation/>
            </ItemHeaderWrapper>
            <FavoritesStoreBody/>
            <Footer/>
        </>
    )
}
export default FavoritesPage;