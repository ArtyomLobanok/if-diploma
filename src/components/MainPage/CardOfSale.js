import React from "react";
import {Flex, LikeIcon,} from "../Styled-Components/General";

import {
    FullPriceText,
    SalePercentTextWrapper,
    SalePriceText,
    CardWrapper,
    CardContentWrapper,
    CardImgWrapper,
    CardBtnWrapper,
    CardIconWrapper, CardButton,

} from "../Styled-Components/styledSaleCard";
import {saleBtnCardTextAdd, saleBtnCardTextRemove, salePercent} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";

const saleCard = ({card, handleGetId, handleAddToBasket, items, handleRemoveFromBasket}) => {
    const {id, images, price} = card;
    const isItemInCart = items.some(item => item.id === id)
    console.log(isItemInCart)
    const handleAddCard = (e) => {
        e.stopPropagation();
        e.preventDefault();
        handleAddToBasket(card)
        console.log(id)
    }
    const handleRemCard = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isItemInCart) {
            handleRemoveFromBasket(id)
        } else {
            handleAddToBasket(card)
        }
    }
    const handleClickRemoveThisCard = () => {
        handleRemoveFromBasket(id)
    }

    const salePrice = Math.round(price.value / 100 * salePercent);
    return (
        <>
            <Link to={`/product/${id}`} onClick={handleGetId}>
                <CardWrapper>
                    <CardContentWrapper>

                        <CardImgWrapper>
                            <img id={id} src={images[0]} alt="Pictures"/>
                        </CardImgWrapper>

                        <CardIconWrapper>
                            <LikeIcon width='42px' height='38px'>
                                <use href="#likeIcon"></use>
                            </LikeIcon>
                        </CardIconWrapper>
                        <CardBtnWrapper>
                            {isItemInCart ?
                                <CardButton onClick={handleRemCard} padding='13px 24px'>
                                    {saleBtnCardTextRemove}
                                </CardButton>
                                :
                                <CardButton onClick={handleAddCard} padding='13px 24px'>
                                    {saleBtnCardTextAdd}
                                </CardButton>
                            }
                        </CardBtnWrapper>
                        <SalePercentTextWrapper>
                            <span>-{salePercent}%</span>
                        </SalePercentTextWrapper>
                    </CardContentWrapper>
                    <Flex align='center'>
                        <FullPriceText>${price.value}</FullPriceText>
                        <SalePriceText>${salePrice}</SalePriceText>
                    </Flex>
                </CardWrapper>
            </Link>

        </>
    )
}
export default saleCard;