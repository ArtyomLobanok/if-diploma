import React, {useState} from "react";
import HeaderNavigation from "../components/HeaderNavigation";
import Footer from "./Footer";
import {Container, Flex, LikeIcon} from "../components/Styled-Components/General";
import {ItemPageTextColor, ItemPageTextOrder, saleBtnCardTextAdd} from "../configs/stringsDataConfig";
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

const ItemPage = () => {
    const [isActiveFirst, setIsActiveFirst] = useState(false);
    const [isActiveSecond, setIsActiveSecond] = useState(false);
    const [isActiveThird, setIsActiveThird] = useState(false);
    const handleClickFirst = () => {
        console.log('here one')
        if (isActiveSecond === true) {
            setIsActiveSecond(false)
        } else if (isActiveThird === true) {
            setIsActiveThird(false)
        }
        setIsActiveFirst(!isActiveFirst)
    }
    const handleClickSecond = () => {
        console.log('here two')
        if (isActiveFirst === true) {
            setIsActiveFirst(false)
        } else if (isActiveThird === true) {
            setIsActiveThird(false)
        }
        setIsActiveSecond(!isActiveSecond)
    }
    const handleClickThird = () => {
        console.log('here three')
        if (isActiveFirst === true) {
            setIsActiveFirst(false)
        } else if (isActiveSecond === true) {
            setIsActiveSecond(false)
        }
        setIsActiveThird(!isActiveThird)
    }

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
                            <p>SIZE</p>
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
                                    isActiveFirst ?
                                        <ItemIconClose onClick={handleClickFirst}>
                                            <use href="#collapse"></use>
                                        </ItemIconClose>
                                        :
                                        <ItemIconOpen onClick={handleClickFirst}>
                                            <use href="#cross"></use>
                                        </ItemIconOpen>
                                }
                                <ItemFooterContent>
                                    <span>PRODUCT DESCRIPTION</span>
                                    {isActiveFirst &&
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
                                    isActiveSecond ?
                                        <ItemIconClose onClick={handleClickSecond}>
                                            <use href="#collapse"></use>
                                        </ItemIconClose>
                                        :
                                        <ItemIconOpen onClick={handleClickSecond}>
                                            <use href="#cross"></use>
                                        </ItemIconOpen>
                                }
                                <ItemFooterContent>
                                    <span>SHIPPING & RETURNS</span>
                                    {isActiveSecond &&
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
                                    isActiveThird ?
                                        <ItemIconClose onClick={handleClickThird}>
                                            <use href="#collapse"></use>
                                        </ItemIconClose>
                                        :
                                        <ItemIconOpen onClick={handleClickThird}>
                                            <use href="#cross"></use>
                                        </ItemIconOpen>
                                }
                                <ItemFooterContent>
                                    <span>FABRIC COMPOSITION</span>
                                    {isActiveThird &&
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

export default ItemPage;