import React from "react";
import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import Footer from "./Footer";
import {ItemHeaderWrapper} from "../components/Styled-Components/styledItemPage";
import {useSelector} from "react-redux";
import ProductPageBody from "../components/ProductPage/ProductPageBody";
import Svg from "../assets/svg";


const ProductPage = () => {
    const filteredItemData = useSelector(state => state.productLoadReducer)
    console.log(filteredItemData)
    return (
        <>
            <Svg/>
            <ItemHeaderWrapper>
                <HeaderNavigation/>
            </ItemHeaderWrapper>
            {
                filteredItemData.map(item => (
                    <ProductPageBody key={item.id} item={item}/>
                ))
            }
            <Footer/>
        </>
    )
}

export default ProductPage;