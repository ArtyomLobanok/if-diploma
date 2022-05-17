import React from "react";
import {
    Flex, LikeIcon,
} from "./Styled-Components/General"
import {
    FullPriceText, LikeIconWrapper,
    SalePercentTextWrapper,
    SalePriceText,
    SliderCardWrapper,
    SliderImg
} from "./Styled-Components/styledSaleCard";
import {salePercent} from "../configs/stringsData";


const saleCard = props => {
    const {images, price} = props.card;
    const salePrice = Math.round(price.value / 100 * salePercent);
    return (
        <SliderCardWrapper>
            <Flex position='relative' margin='0 0 27px 0'>
                <SliderImg src={images[0]} alt='picture'/>
                <LikeIconWrapper>
                    <LikeIcon width='42px' height='38px'>
                        <use href="#likeIcon"></use>
                    </LikeIcon>
                </LikeIconWrapper>
                <SalePercentTextWrapper>
                    <span>-{salePercent}%</span>
                </SalePercentTextWrapper>
            </Flex>
            <Flex align='center'>
                <FullPriceText>${price.value}</FullPriceText>
                <SalePriceText>${salePrice}</SalePriceText>
            </Flex>
        </SliderCardWrapper>

    )
}
export default saleCard;