import Svg from "../assets/svg";
import {ItemHeaderWrapper} from "../components/Styled-Components/styledItemPage";
import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import React from "react";
import Footer from "./Footer";
import BasketStoreBody from "../components/BasketPage/BasketStoreBody";

const BasketPage = () => {
    return (
        <>
            <Svg/>
            <ItemHeaderWrapper>
                <HeaderNavigation/>
            </ItemHeaderWrapper>
            <BasketStoreBody/>
            <Footer/>
        </>
    )
}
export default BasketPage;