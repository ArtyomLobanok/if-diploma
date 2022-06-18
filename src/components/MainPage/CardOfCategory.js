import React from "react";
import {
    Flex,
    StyledLinkCard,
} from "../Styled-Components/General"
import {
    FullPriceText,
    CardWrapper,
    CardContentWrapper,
    CardImgWrapper,
    CardBtnWrapper,
    CardIconWrapper,
    CardsButton,
} from "../Styled-Components/styledSaleCard";
import {saleBtnCardTextAdd, saleBtnCardTextRemove} from "../../configs/stringsDataConfig";
import useToggleBasket from "../../hooks/use-toggleBasket";
import useGetId from "../../hooks/use-tekeId";
import LikeWhite from "../../assets/img/LikeIconWhite.svg";

const CategoryCard = ({card}) => {
    const {id, images, price} = card;
    const {handleGetId} = useGetId(id);
    const {handleRemCard, handleAddCard, isItemInCart,} = useToggleBasket({card, id});
    return (
        <>
            <StyledLinkCard to={`/product/${id}`} onClick={handleGetId}>
                <CardWrapper>
                    <CardContentWrapper>
                        <CardImgWrapper>
                            <img src={images[0]} alt="Pictures"/>
                        </CardImgWrapper>

                        <CardIconWrapper>
                            <img src={LikeWhite} alt="likeIcon"/>
                        </CardIconWrapper>
                        <CardBtnWrapper>
                            {isItemInCart ?
                                <CardsButton onClick={handleRemCard} padding='13px 24px'>
                                    {saleBtnCardTextRemove}
                                </CardsButton>
                                :
                                <CardsButton onClick={handleAddCard} padding='13px 24px'>
                                    {saleBtnCardTextAdd}
                                </CardsButton>
                            }
                        </CardBtnWrapper>
                    </CardContentWrapper>
                    <Flex align='center'>
                        <FullPriceText decoration='initial'>${price.value}</FullPriceText>
                    </Flex>
                </CardWrapper>
            </StyledLinkCard>
        </>
    )
}
export default CategoryCard;