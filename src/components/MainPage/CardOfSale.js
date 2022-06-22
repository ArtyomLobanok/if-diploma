import React from "react";
import {Flex, StyledLinkCard} from "../StyledComponents/General";
import LikeWhite from "../../assets/img/LikeIconWhite.svg"
import LikeRed from "../../assets/img/LikeImg.svg"
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
                <CardWrapper>
                    <CardContentWrapper>
                        <CardImgWrapper>
                            <img id={id} src={images[0]} alt="Pictures"/>
                        </CardImgWrapper>
                        <CardIconWrapper>
                            {isItemInFavorites ?
                                <button onClick={handleRemFromFavorites}>
                                    <img src={LikeRed} alt="likeActiveIcon"/>
                                </button>
                                :
                                <button onClick={handleAddToFavorites}>
                                    <img src={LikeWhite} alt="likeNonActiveIcon"/>
                                </button>
                            }
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