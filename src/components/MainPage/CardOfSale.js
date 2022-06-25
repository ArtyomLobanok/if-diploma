import React from "react";
import {Flex, StyledLinkCard} from "../StyledComponents/General";
import LikeWhite from "../../assets/img/LikeIconWhite.svg"
import LikeRed from "../../assets/img/LikeImg.svg"
import {
    FullPriceText,
    SalePercentTextWrapper,
    SalePriceText,
    CardSaleWrapper,
    CardContentWrapper,
    CardImgWrapper,
    CardBtnWrapper,
    SaleCardIconWrapper,
    SaleCardsButton,
} from "../StyledComponents/styledSaleCard";
import {saleBtnCardTextAdd, saleBtnCardTextRemove, salePercent} from "../../configs/stringsDataConfig";
import useToggleBasket from "../../hooks/use-toggleBasket";
import useGetId from "../../hooks/use-tekeId";
import useToggleFavorites from "../../hooks/use-toggleFavorites";



const SaleCard = ({card}) => {
    const {id, images, price} = card;
    const salePrice = Math.round(price.value / 100 * salePercent);
    const {handleRemCard, handleAddCard, isItemInCart,} = useToggleBasket({card, id});
    const {handleAddToFavorites, handleRemFromFavorites, isItemInFavorites,} = useToggleFavorites({card, id});
    const {handleGetId} = useGetId(id);
    return (
        <>
            <StyledLinkCard to={`/product/${id}`} onClick={handleGetId}>
                <CardSaleWrapper>
                    <CardContentWrapper>
                        <CardImgWrapper>
                            <img id={id} src={images[0]} alt="Pictures"/>
                        </CardImgWrapper>
                        <SaleCardIconWrapper>
                            {isItemInFavorites ?
                                <button onClick={handleRemFromFavorites}>
                                    <img src={LikeRed} alt="likeActiveIcon"/>
                                </button>
                                :
                                <button onClick={handleAddToFavorites}>
                                    <img src={LikeWhite} alt="likeNonActiveIcon"/>
                                </button>
                            }
                        </SaleCardIconWrapper>
                        <CardBtnWrapper>
                            {isItemInCart ?
                                <SaleCardsButton onClick={handleRemCard}>
                                    {saleBtnCardTextRemove}
                                </SaleCardsButton>
                                :
                                <SaleCardsButton onClick={handleAddCard}>
                                    {saleBtnCardTextAdd}
                                </SaleCardsButton>
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
                </CardSaleWrapper>
            </StyledLinkCard>
        </>
    )
}
export default SaleCard;