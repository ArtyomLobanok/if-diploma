import React from "react";
import {Flex, StyledLinkCard} from "../Styled-Components/General";
import LikeWhite from "../../assets/img/LikeIconWhite.svg"
import {
    FullPriceText,
    SalePercentTextWrapper,
    SalePriceText,
    CardWrapper,
    CardContentWrapper,
    CardImgWrapper,
    CardBtnWrapper,
    CardIconWrapper,
    CardsButton,
} from "../Styled-Components/styledSaleCard";
import {saleBtnCardTextAdd, saleBtnCardTextRemove, salePercent} from "../../configs/stringsDataConfig";
import useToggleBasket from "../../hooks/use-toggleBasket";
import useGetId from "../../hooks/use-tekeId";

const SaleCard = ({card}) => {
    const {id, images, price} = card;
    const salePrice = Math.round(price.value / 100 * salePercent);
    const {handleRemCard, handleAddCard, isItemInCart,} = useToggleBasket({card, id});
    const {handleGetId} = useGetId(id);
    return (
        <>
            <StyledLinkCard to={`/product/${id}`} onClick={handleGetId}>
                <CardWrapper>
                    <CardContentWrapper>
                        <CardImgWrapper>
                            <img id={id} src={images[0]} alt="Pictures"/>
                        </CardImgWrapper>
                        <CardIconWrapper>
                            <img src={LikeWhite} alt="likeIcon"/>
                        </CardIconWrapper>
                        <CardBtnWrapper>
                            {isItemInCart ?
                                <CardsButton onClick={handleRemCard}>
                                    {saleBtnCardTextRemove}
                                </CardsButton>
                                :
                                <CardsButton onClick={handleAddCard}>
                                    {saleBtnCardTextAdd}
                                </CardsButton>
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
            </StyledLinkCard>
        </>
    )
}
export default SaleCard;