import React from "react";
import HeaderNavigation from "../components/HeaderNavigation";
import Footer from "./Footer";
import {Container, Flex, LikeIcon} from "../components/Styled-Components/General";
import {ItemPageTextColor, ItemPageTextOrder, ItemPageTextSize, saleBtnCardTextAdd} from "../configs/stringsDataConfig";
import img1 from "../assets/img/temp/itemPageImg1.png"
import img2 from "../assets/img/temp/itemPageImg2.png"
import {
    ItemButton, ItemButtonLike,
    ItemColor, ItemFooterContent, ItemFooterWrapper,
    ItemHeaderWrapper, ItemIconClose, ItemIconOpen,
    ItemImgWrapper,
    ItemInfoWrapper, ItemPrice, ItemSize, ItemSizeTitle,
    ItemTitle
} from "../components/Styled-Components/styledItemPage";
import ProductPageData from "../components/ProductPageData";
import {useSelector} from "react-redux";


const ProductPage = () => {
    const filteredItem = useSelector(state => state.productLoadReducer)
    console.log(filteredItem)

    const {
        isActiveFirstCollapse, isActiveSecondCollapse, isActiveThirdCollapse,
        handleClickFirstCollapse, handleClickSecondCollapse, handleClickThirdCollapse
    } = ProductPageData();

    return (
        <>
            <ItemHeaderWrapper>
                <HeaderNavigation/>
            </ItemHeaderWrapper>
            <Container>
                <Flex>
                    <ItemImgWrapper>
                        <img src={img1} alt='Pic'/>
                        <img src={img2} alt='Pic'/>
                    </ItemImgWrapper>
                    <ItemInfoWrapper>
                        <ItemTitle>CHALK SAINTS BOYFRIEND</ItemTitle>
                        <ItemPrice>
                            <span>USD $300.00</span>
                            <p>{ItemPageTextOrder}</p>
                        </ItemPrice>
                        <ItemColor>
                            <p>{ItemPageTextColor}</p>
                            <button onClick={e => e.preventDefault()}/>
                        </ItemColor>
                        <ItemSize>
                            <p>{ItemPageTextSize}</p>
                            <ItemSizeTitle>
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                            </ItemSizeTitle>
                        </ItemSize>
                        <Flex>
                            <ItemButton>
                                {saleBtnCardTextAdd}
                            </ItemButton>
                            <ItemButtonLike>
                                <LikeIcon width='24px' height='24px'>
                                    <use href="#likeIcon"></use>
                                </LikeIcon>
                            </ItemButtonLike>
                        </Flex>
                        <ItemFooterWrapper>
                            <Flex jystify='space-between' margin="0 0 22px 0">
                                {
                                    isActiveFirstCollapse ?
                                        <ItemIconClose onClick={handleClickFirstCollapse}>
                                            <use href="#collapse"></use>
                                        </ItemIconClose>
                                        :
                                        <ItemIconOpen onClick={handleClickFirstCollapse}>
                                            <use href="#cross"></use>
                                        </ItemIconOpen>
                                }
                                <ItemFooterContent>
                                    <span>PRODUCT DESCRIPTION</span>
                                    {isActiveFirstCollapse &&
                                        <p>
                                            Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight
                                            fit across
                                            the
                                            hips, bow shape legs, with knee darts and tapered leg. Back pockets
                                            dropped
                                            slightly for
                                            slouch feel.
                                        </p>
                                    }
                                </ItemFooterContent>

                            </Flex>
                        </ItemFooterWrapper>
                        <ItemFooterWrapper>
                            <Flex jystify='space-between' margin="0 0 22px 0">
                                {
                                    isActiveSecondCollapse ?
                                        <ItemIconClose onClick={handleClickSecondCollapse}>
                                            <use href="#collapse"></use>
                                        </ItemIconClose>
                                        :
                                        <ItemIconOpen onClick={handleClickSecondCollapse}>
                                            <use href="#cross"></use>
                                        </ItemIconOpen>
                                }
                                <ItemFooterContent>
                                    <span>SHIPPING & RETURNS</span>
                                    {isActiveSecondCollapse &&
                                        <p>
                                            Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight
                                            fit across
                                            the
                                            hips, bow shape legs, with knee darts and tapered leg. Back pockets
                                            dropped
                                            slightly for
                                            slouch feel.
                                        </p>
                                    }
                                </ItemFooterContent>
                            </Flex>
                        </ItemFooterWrapper>
                        <ItemFooterWrapper>
                            <Flex jystify='space-between' margin="0 0 22px 0">
                                {
                                    isActiveThirdCollapse ?
                                        <ItemIconClose onClick={handleClickThirdCollapse}>
                                            <use href="#collapse"></use>
                                        </ItemIconClose>
                                        :
                                        <ItemIconOpen onClick={handleClickThirdCollapse}>
                                            <use href="#cross"></use>
                                        </ItemIconOpen>
                                }
                                <ItemFooterContent>
                                    <span>FABRIC COMPOSITION</span>
                                    {isActiveThirdCollapse &&
                                        <p>
                                            Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight
                                            fit across
                                            the
                                            hips, bow shape legs, with knee darts and tapered leg. Back pockets
                                            dropped
                                            slightly for
                                            slouch feel.
                                        </p>
                                    }
                                </ItemFooterContent>
                            </Flex>
                        </ItemFooterWrapper>
                    </ItemInfoWrapper>
                </Flex>
            </Container>
            <Footer/>
        </>
    )
}

export default ProductPage;