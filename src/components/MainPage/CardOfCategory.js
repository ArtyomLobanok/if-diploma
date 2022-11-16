import React from "react";
import {
    Flex,
} from "../StyledComponents/General"
import {
    FullPriceText,
    CardWrapper,
    CardContentWrapper,
    CardImgWrapper,
    CardBtnWrapper,
    CardIconWrapper,
    CardsButton,
    SaleLinkCard,
} from "../StyledComponents/styledSaleCard";
import {saleBtnCardTextAdd, saleBtnCardTextRemove} from "../../configs/stringsDataConfig";
import useToggleBasket from "../../hooks/use-toggleBasket";
import useGetId from "../../hooks/use-tekeId";
import LikeWhite from "../../assets/img/LikeIconWhite.svg";
import useToggleFavorites from "../../hooks/use-toggleFavorites";
import LikeRed from "../../assets/img/LikeImg.svg";

const CategoryCard = ({card}) => {
    const {id, images, price} = card;
    const {handleGetId} = useGetId(id);
    const {handleRemCard, handleAddCard, isItemInCart,} = useToggleBasket({card, id});
    const {handleAddToFavorites, handleRemFromFavorites, isItemInFavorites,} = useToggleFavorites({card, id});
    return (
        <>
            <SaleLinkCard to={`/product/${id}`} onClick={handleGetId}>
                <CardWrapper>
                    <CardContentWrapper>
                        <CardImgWrapper>
                            <img src={images[0]} alt="Pictures"/>
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
                    </CardContentWrapper>
                    <Flex align='center'>
                        <FullPriceText decoration='initial'>${price.value}</FullPriceText>
                    </Flex>
                </CardWrapper>
            </SaleLinkCard>
        </>
    )
}
export default CategoryCard;