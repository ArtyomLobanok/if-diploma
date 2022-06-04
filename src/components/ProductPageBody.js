import {Container, Flex, LikeIcon} from "./Styled-Components/General";
import {
    ButtonColor, ItemButton, ItemButtonLike,
    ItemColor, ItemFooterContent, ItemFooterWrapper, ItemIconClose, ItemIconOpen,
    ItemImgWrapper,
    ItemInfoWrapper,
    ItemPrice, ItemSize, ItemSizeTitle,
    ItemTitle
} from "./Styled-Components/styledItemPage";
import {ItemPageTextColor, ItemPageTextOrder, ItemPageTextSize, saleBtnCardTextAdd} from "../configs/stringsDataConfig";
import React from "react";
import ProductPageData from "./ProductPageData";

const ProductPageBody = ({item}) => {
    const {images, name, price, color, availableSizes} = item
    const {
        isActiveFirstCollapse, isActiveSecondCollapse, isActiveThirdCollapse,
        handleClickFirstCollapse, handleClickSecondCollapse, handleClickThirdCollapse
    } = ProductPageData();
    return (
        <Container>
            <Flex>
                <ItemImgWrapper>
                    <img src={images[0]} alt='Pic'/>
                    <img src={images[1]} alt='Pic'/>
                </ItemImgWrapper>
                <ItemInfoWrapper>
                    <ItemTitle>{name}</ItemTitle>
                    <ItemPrice>
                        <span>{`${price.currency} $${price.value}`}</span>
                        <p>{ItemPageTextOrder}</p>
                    </ItemPrice>
                    <ItemColor>
                        <p>{ItemPageTextColor}</p>
                        <ButtonColor color={color.hex} onClick={e => e.preventDefault()}/>
                    </ItemColor>
                    <ItemSize>
                        <p>{ItemPageTextSize}</p>
                        <ItemSizeTitle>
                            {availableSizes.map(item => (
                                <button/>
                            ))}
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
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
    )
}

    export default ProductPageBody;