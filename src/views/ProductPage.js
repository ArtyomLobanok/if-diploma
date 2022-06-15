import React from "react";
import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import Footer from "./Footer";
import {ItemHeaderWrapper} from "../components/Styled-Components/styledItemPage";
import ProductPageBody from "../components/ProductPage/ProductPageBody";
import Svg from "../assets/svg";
import {useSelector} from "react-redux";


const ProductPage = () => {
    const itemData = useSelector(state => state.unloadDataReducer);
    return (
        <>
            <Svg/>
            <ItemHeaderWrapper>
                <HeaderNavigation/>
            </ItemHeaderWrapper>
            {
                itemData.map(card => (
                    <ProductPageBody key={card.id} card={card}/>
                ))
            }
            <Footer/>
        </>
    )
}

export default ProductPage;