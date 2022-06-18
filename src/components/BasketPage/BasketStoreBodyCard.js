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
import {
    ItemBasketRemoveBtnText,
    ItemBasketTextColor,
    ItemBasketTextQuantity,
    ItemBasketTextSize
} from "../../configs/stringsDataConfig";
import {randomQuantity} from "../utils";
import {useDispatch} from "react-redux";
import {deleteItemFromBasket} from "../../redux/cart/basketReducer";

const BasketStoreBodyCard = ({card}) => {
    const {id, images, price,name,color,availableSizes} = card;
    const arrayOfArrays = availableSizes.toString().split(',');
    const dispatch = useDispatch();
    const handleRemoveFromBasket = (id) => {
        dispatch(deleteItemFromBasket(id))
    }
    const handleClickRemoveThisCard = () => {
        handleRemoveFromBasket(id)
    }
    return (
        <>
            <BasketItem>
                <BasketItemWrapper>
                    <BasketItemImgWrapper>
                        {<img src={images[0]} alt="img"/>}
                    </BasketItemImgWrapper>
                    <BasketItemInformation>
                        <BasketItemNameInformation>
                            {name}
                        </BasketItemNameInformation>
                        <BasketItemPriceInformation>
                            {`${price.currency} $${price.value}`}
                        </BasketItemPriceInformation>
                        <BasketItemTheRestInformation>
                            {ItemBasketTextColor}
                            <BasketItemTheRestInformationValue>
                                {(color.name).toUpperCase()}
                            </BasketItemTheRestInformationValue>
                            <BasketItemTheRestInformationDropdown>
                                <use href="#dropDown"/>
                            </BasketItemTheRestInformationDropdown>
                        </BasketItemTheRestInformation>
                        <BasketItemTheRestInformation>
                            {ItemBasketTextSize}
                            <BasketItemTheRestInformationValue>
                                {arrayOfArrays.length}
                            </BasketItemTheRestInformationValue>
                            <BasketItemTheRestInformationDropdown>
                                <use href="#dropDown"/>
                            </BasketItemTheRestInformationDropdown>
                        </BasketItemTheRestInformation>
                        <BasketItemTheRestInformation>
                            {ItemBasketTextQuantity}
                            <BasketItemTheRestInformationValue>
                                {randomQuantity}
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