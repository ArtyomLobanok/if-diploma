import {Container, Flex, LikeIcon} from "../Styled-Components/General";
import {
    BtnListSize, BtnListSizeActive, ButtonColor, ItemButton, ItemButtonLike,
    ItemColor, ItemFooterContent, ItemFooterWrapper, ItemIconClose, ItemIconOpen,
    ItemImgWrapper, ItemInfoWrapper, ItemPrice, ItemSize, ItemTitle
} from "../Styled-Components/styledItemPage";
import {
    DescriptionText,
    FabricCompositionText,
    ItemPageTextColor,
    ItemPageTextOrder,
    ItemPageTextSize,
    saleBtnCardTextAdd,
    saleBtnCardTextRemove,
    ShippingReturnsText
} from "../../configs/stringsDataConfig";
import React from "react";
import ProductPageData from "./ProductPageData";
import ProductPageSizeData from "./ProductPageSizeData";
import ProductPageDescriptionData from "./ProductPageDescriptionData";
import useToggleBasket from "../../hooks/use-toggleBasket";


const ProductPageBody = ({card}) => {
    const {id, images, name, price, color} = card;
    const {handleRemCard, handleAddCard, isItemInCart} = useToggleBasket({card, id});

    const {descriptionData} = ProductPageDescriptionData()
    const descriptionString = descriptionData()

    const {
        isActiveFirstCollapse, isActiveSecondCollapse, isActiveThirdCollapse,
        handleClickFirstCollapse, handleClickSecondCollapse, handleClickThirdCollapse
    } = ProductPageData();
    const {
        isValueBtn, handleSelectedSizeXS, handleSelectedSizeS, handleSelectedSizeM, handleSelectedSizeL,
        handleSelectedSizeXL, handleSelectedSizeXXL, SizesArray
    } = ProductPageSizeData()

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

                        {isValueBtn === SizesArray[0] ?
                            (<BtnListSizeActive
                                onClick={handleSelectedSizeXS}>{SizesArray[0]}</BtnListSizeActive>) :
                            (<BtnListSize onClick={handleSelectedSizeXS}>{SizesArray[0]}</BtnListSize>)
                        }
                        {isValueBtn === SizesArray[1] ?
                            (<BtnListSizeActive
                                onClick={handleSelectedSizeS}>{SizesArray[1]}</BtnListSizeActive>) :
                            (<BtnListSize onClick={handleSelectedSizeS}>{SizesArray[1]}</BtnListSize>)
                        }
                        {isValueBtn === SizesArray[2] ?
                            (<BtnListSizeActive
                                onClick={handleSelectedSizeM}>{SizesArray[2]}</BtnListSizeActive>) :
                            (<BtnListSize onClick={handleSelectedSizeM}>{SizesArray[2]}</BtnListSize>)
                        }
                        {isValueBtn === SizesArray[3] ?
                            (<BtnListSizeActive
                                onClick={handleSelectedSizeL}>{SizesArray[3]}</BtnListSizeActive>) :
                            (<BtnListSize onClick={handleSelectedSizeL}>{SizesArray[3]}</BtnListSize>)
                        }
                        {isValueBtn === SizesArray[4] ?
                            (<BtnListSizeActive
                                onClick={handleSelectedSizeXL}>{SizesArray[4]}</BtnListSizeActive>) :
                            (<BtnListSize onClick={handleSelectedSizeXL}>{SizesArray[4]}</BtnListSize>)
                        }
                        {isValueBtn === SizesArray[5] ?
                            (<BtnListSizeActive
                                onClick={handleSelectedSizeXXL}>{SizesArray[5]}</BtnListSizeActive>) :
                            (<BtnListSize onClick={handleSelectedSizeXXL}>{SizesArray[5]}</BtnListSize>)
                        }

                    </ItemSize>
                    <Flex>
                        {isItemInCart ?
                            <ItemButton onClick={handleRemCard} padding='13px 24px'>
                                {saleBtnCardTextRemove}
                            </ItemButton>
                            :
                            <ItemButton onClick={handleAddCard} padding='13px 24px'>
                                {saleBtnCardTextAdd}
                            </ItemButton>
                        }
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