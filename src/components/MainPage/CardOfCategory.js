import React from "react";
import {
    Flex,
    LikeIcon,
} from "../Styled-Components/General"
import {
    FullPriceText,
    CardWrapper,
    CardContentWrapper,
    CardImgWrapper,
    CardBtnWrapper,
    CardIconWrapper,
    CardButton,
} from "../Styled-Components/styledSaleCard";
import {saleBtnCardTextAdd} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";

const categoryCard = ({card,handleSetId}) => {
    const {id, images, price} = card;
    return (
        <CardWrapper onClick={handleSetId} width='24%'>
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