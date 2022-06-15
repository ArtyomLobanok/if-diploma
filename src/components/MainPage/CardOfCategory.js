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
import {saleBtnCardTextAdd, saleBtnCardTextRemove} from "../../configs/stringsDataConfig";
import {Link} from "react-router-dom";
import useToggleBasket from "../../hooks/use-toggleBasket";
import useGetId from "../../hooks/use-tekeId";

const CategoryCard = ({card}) => {
    const {id, images, price} = card;
    const {handleGetId} = useGetId(id);
    const {handleRemCard, handleAddCard, isItemInCart,} = useToggleBasket({card, id});
    return (
        <>
            <Link to={`/product/${id}`} onClick={handleGetId}>
                <CardWrapper>
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
                    </CardContentWrapper>
                    <Flex align='center'>
                        <FullPriceText decoration='initial'>${price.value}</FullPriceText>
                    </Flex>
                </CardWrapper>
            </Link>
        </>
    )
}
export default CategoryCard;