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
    CardIconWrapper,
    CardButton,
} from "../Styled-Components/styledSaleCard";
import {saleBtnCardTextAdd, saleBtnCardTextRemove, salePercent} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";
import useToggleBasket from "../../hooks/use-toggleBasket";
import useGetId from "../../hooks/use-tekeId";

const SaleCard = ({card}) => {
    const {id, images, price} = card;
    const salePrice = Math.round(price.value / 100 * salePercent);
    const {handleRemCard, handleAddCard, isItemInCart,} = useToggleBasket({card, id});
    const {handleGetId} = useGetId(id);
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
export default SaleCard;