import React from "react";
import {
    Flex, LikeIcon,
} from "../Styled-Components/General"
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
import {saleBtnCardTextAdd, salePercent} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";

const saleCard = ({card, handleSetId}) => {
    const {id, images, price} = card;
    const salePrice = Math.round(price.value / 100 * salePercent);
    return (
        <CardWrapper onClick={handleSetId}>
            <CardContentWrapper>
                <Link to={`/product/${id}`}>
                    <CardImgWrapper>
                        <img id={id} src={images[0]} alt="Pictures"/>
                    </CardImgWrapper>
                </Link>
                <CardIconWrapper>
                    <LikeIcon width='42px' height='38px'>
                        <use href="#likeIcon"></use>
                    </LikeIcon>
                </CardIconWrapper>
                <CardBtnWrapper>
                    <CardButton onClick={(e)=>e.preventDefault()} padding='13px 24px'>{saleBtnCardTextAdd}</CardButton>
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

    )
}
export default saleCard;