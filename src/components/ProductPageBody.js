import {Container, Flex, LikeIcon} from "./Styled-Components/General";
import {
    ButtonColor, ItemButton, ItemButtonLike,
    ItemColor, ItemFooterContent, ItemFooterWrapper, ItemIconClose, ItemIconOpen,
    ItemImgWrapper,
    ItemInfoWrapper,
    ItemPrice, ItemSize, ItemSizeTitle,
    ItemTitle
} from "./Styled-Components/styledItemPage";
import {
    DescriptionText, FabricCompositionText,
    ItemPageTextColor,
    ItemPageTextOrder,
    ItemPageTextSize,
    saleBtnCardTextAdd, ShippingReturnsText
} from "../configs/stringsDataConfig";
import React from "react";
import ProductPageData from "./ProductPageData";

const ProductPageBody = ({item}) => {
    const {images, name, price, color, availableSizes, description} = item

    const sizeArray = availableSizes[0].split(',')
    const descriptionRe = description.toLowerCase().split('.')
    console.log(descriptionRe)

    const capitalizeWords = (descriptionRe) => {
        return descriptionRe.map(element => {
            return ((element.replace(/^ +| +$|( ) +/g, "$1")).charAt(0).toUpperCase() + (element.replace(/^ +| +$|( ) +/g, "$1")).substring(1).toLowerCase());
        });
    }
    console.log(capitalizeWords(descriptionRe))
    const descriptionData = () => {
        return capitalizeWords(descriptionRe).join('. ')
    }
    const descriptionString = descriptionData()
    console.log(descriptionData())
    const ListItemSize = (props) => {
        return <button>{props.value}</button>;
    }

    const SizeList = ({sizeArray}) => {
        return (
            <>
                {
                    sizeArray.map((number) =>
                        <ListItemSize key={number.toString()}
                                      value={number}/>
                    )
                }
            </>
        );
    }

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
                            <SizeList sizeArray={sizeArray}/>
                        </ItemSizeTitle>
                    </ItemSize>
                    <Flex>
                        <ItemButton>
                            {saleBtnCardTextAdd}
                        </ItemButton>
                        <ItemButtonLike>
                            <LikeIcon color="red" width='24px' height='24px'>
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
                                <span>{DescriptionText}</span>
                                {
                                    isActiveFirstCollapse &&
                                    <p>
                                        {descriptionString}
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
                                <span>{ShippingReturnsText}</span>
                                {
                                    isActiveSecondCollapse &&
                                    <p>
                                        {descriptionString}
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
                                <span>{FabricCompositionText}</span>
                                {
                                    isActiveThirdCollapse &&
                                    <p>
                                        {descriptionString}
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