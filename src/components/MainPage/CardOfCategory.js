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

const categoryCard = ({card, handleGetId}) => {
    const {id, images, price} = card;
    const handleSetId = (e) => {
        e.preventDefault();
        console.log(id)
    }
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
                            <CardButton onClick={handleSetId} padding='13px 24px'>{saleBtnCardTextAdd}</CardButton>
                        </CardBtnWrapper>
                    </CardContentWrapper>
                    <Flex align='center'>
                        <FullPriceText decoration='initial'>${price.value}</FullPriceText>
                    </Flex>
                </CardWrapper>
            </Link>
        </>
    )
}
export default categoryCard;