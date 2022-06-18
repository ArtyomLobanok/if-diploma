import Svg from "../assets/svg";
import {ItemHeaderWrapper} from "../components/Styled-Components/styledItemPage";
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
            here will be favorites cards
            <FavoritesStoreBody/>
            <Footer/>
        </>
    )
}
export default FavoritesPage;