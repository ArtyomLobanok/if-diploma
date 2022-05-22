import React from "react";
import {
    Flex,
    LikeIcon,
} from "./Styled-Components/General"
import {
    FullPriceText,
    CardWrapper,
    CardContentWrapper,
    CardImgWrapper,
    CardBtnWrapper,
    CardIconWrapper,
    CardButton,
} from "./Styled-Components/styledSaleCard";
import {saleBtnCardTextAdd} from "../configs/stringsData";


const categoryCard = props => {
    const {images, price} = props.card;
    return (
        <CardWrapper width='24%'>
            <CardContentWrapper>
                <CardImgWrapper>
                    <img src={images[0]} alt="Pictures"/>
                </CardImgWrapper>
                <CardIconWrapper>
                    <LikeIcon width='42px' height='38px'>
                        <use href="#likeIcon"></use>
                    </LikeIcon>
                </CardIconWrapper>
                <CardBtnWrapper>
                    <CardButton padding='13px 24px'>{saleBtnCardTextAdd}</CardButton>
                </CardBtnWrapper>
            </CardContentWrapper>
            <Flex align='center'>
                <FullPriceText decoration='initial'>${price.value}</FullPriceText>
            </Flex>
        </CardWrapper>
    )
}
export default categoryCard;