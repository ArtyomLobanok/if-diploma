import visaImg from "../../assets/img/ic_visa.png"
import maestroImg from "../../assets/img/ic_maestro.png"
import {
    BasketStoreBodyBtn,
    BasketStoreBodyContainer,
    BasketStoreBodyFooter,
    BasketStoreBodyHeader,
    BasketStoreBodyHeaderValueItems,
    BasketStoreBodyMain,
    BasketStoreBodyPayCard,
    BasketStoreBodyPayCardWrapper,
    BasketTotalPriceValue,
} from "../Styled-Components/styleBasketPage";
import {
    BasketButtonProceedToCheckoutText,
    BasketStoreBodyOneUnitText,
    BasketStoreBodySubTitle,
    BasketStoreBodyUnitText,
    BasketTotalPriceText,
} from "../../configs/stringsDataConfig";
import {Container} from "../Styled-Components/General";
import BasketStoreBodyCard from "./BasketStoreBodyCard";
import {useDispatch, useSelector} from "react-redux";
import {calcTotalPrice} from "../utils";
import {deleteItemFromBasket} from "../../redux/cart/basketReducer";


const BasketStoreBody = () => {
    const items = useSelector(state => state.basket.itemsInBasket);
    console.log(items)
    const dispatch = useDispatch();
    const handleRemoveFromBasket = (id) => {
        dispatch(deleteItemFromBasket(id))
    }
    return (
        <>
            <Container>
                <BasketStoreBodyContainer>
                    <BasketStoreBodyHeader>
                        <p>{BasketStoreBodySubTitle}</p>
                        {
                            items.length <= 1 ?
                                <p>
                                    <BasketStoreBodyHeaderValueItems>
                                        {items.length}
                                    </BasketStoreBodyHeaderValueItems>
                                    {BasketStoreBodyOneUnitText}
                                </p> :
                                <p>
                                    <BasketStoreBodyHeaderValueItems>
                                        {items.length}
                                    </BasketStoreBodyHeaderValueItems>
                                    {BasketStoreBodyUnitText}
                                </p>
                        }
                    </BasketStoreBodyHeader>
                    <BasketStoreBodyMain>
                        {items.length > 0 ?
                            items.map(item => (
                                <BasketStoreBodyCard
                                    handleRemoveFromBasket={handleRemoveFromBasket}
                                    key={item.id}
                                    card={item}/>))
                            : <h4 style={{margin: '20px auto'}}>Ваша корзина пуста!
                                Пожалуйста вернитесь на главную страницу и добавте товары в корзину что-бы оформить
                                заказ</h4>
                        }
                    </BasketStoreBodyMain>
                    {items.length > 0 ?
                        <BasketStoreBodyFooter>
                            <p>
                                {BasketTotalPriceText}
                                <BasketTotalPriceValue>
                                    {calcTotalPrice(items)}
                                </BasketTotalPriceValue>
                            </p>
                            <BasketStoreBodyBtn
                                onClick={e => e.preventDefault()}>{BasketButtonProceedToCheckoutText}</BasketStoreBodyBtn>
                            <BasketStoreBodyPayCardWrapper>
                                <BasketStoreBodyPayCard>
                                    <img src={maestroImg} alt='maestro'/>
                                </BasketStoreBodyPayCard>
                                <BasketStoreBodyPayCard>
                                    <img src={visaImg} alt='visa'/>
                                </BasketStoreBodyPayCard>
                            </BasketStoreBodyPayCardWrapper>
                        </BasketStoreBodyFooter>
                        : null
                    }
                </BasketStoreBodyContainer>
            </Container>
        </>
    )
}
export default BasketStoreBody;