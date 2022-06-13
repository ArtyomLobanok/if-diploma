import {
    BasketItem,
    BasketItemImgWrapper,
    BasketItemInformation,
    BasketItemNameInformation,
    BasketItemPriceInformation, BasketItemRemoveBtn, BasketItemRemoveBtnWrapper,
    BasketItemTheRestInformation,
    BasketItemTheRestInformationDropdown,
    BasketItemTheRestInformationValue, BasketItemWrapper
} from "../Styled-Components/styleBasketPage";
import plugImg1 from "../../assets/img/basketImg1.png";
import {
    ItemBasketRemoveBtnText,
    ItemBasketTextColor,
    ItemBasketTextQuantity,
    ItemBasketTextSize
} from "../../configs/stringsDataConfig";

const BasketStoreBodyCard = ({card,handleRemoveFromBasket}) => {
    const {id, images, price} = card;
    const handleClickRemoveThisCard = () => {
        handleRemoveFromBasket(id)
    }
    return (
        <>
            <BasketItem>
                <BasketItemWrapper>
                    <BasketItemImgWrapper>
                        <img src={plugImg1} alt="img"/>
                    </BasketItemImgWrapper>
                    <BasketItemInformation>
                        <BasketItemNameInformation>
                            WHITE BEAUTY MRS BLONDES MID
                            <br/> LENGTH DENIM SHORT
                        </BasketItemNameInformation>
                        <BasketItemPriceInformation>
                            USD $340.00
                        </BasketItemPriceInformation>
                        <BasketItemTheRestInformation>
                            {ItemBasketTextColor}
                            <BasketItemTheRestInformationValue>
                                WHITE
                            </BasketItemTheRestInformationValue>
                            <BasketItemTheRestInformationDropdown>
                                <use href="#dropDown"/>
                            </BasketItemTheRestInformationDropdown>
                        </BasketItemTheRestInformation>
                        <BasketItemTheRestInformation>
                            {ItemBasketTextSize}
                            <BasketItemTheRestInformationValue>
                                2
                            </BasketItemTheRestInformationValue>
                            <BasketItemTheRestInformationDropdown>
                                <use href="#dropDown"/>
                            </BasketItemTheRestInformationDropdown>
                        </BasketItemTheRestInformation>
                        <BasketItemTheRestInformation>
                            {ItemBasketTextQuantity}
                            <BasketItemTheRestInformationValue>
                                1
                            </BasketItemTheRestInformationValue>
                            <BasketItemTheRestInformationDropdown>
                                <use href="#dropDown"/>
                            </BasketItemTheRestInformationDropdown>
                        </BasketItemTheRestInformation>
                    </BasketItemInformation>
                </BasketItemWrapper>
                <BasketItemRemoveBtnWrapper>
                    <BasketItemRemoveBtn onClick={handleClickRemoveThisCard}>
                        <svg>
                            <use href="#closeSearchForm"/>
                        </svg>
                        {ItemBasketRemoveBtnText}
                    </BasketItemRemoveBtn>
                </BasketItemRemoveBtnWrapper>
            </BasketItem>
        </>
    )
}
export default BasketStoreBodyCard;