import visaImg from "../../assets/img/ic_visa.png"
import maestroImg from "../../assets/img/ic_maestro.png"
import {
    BasketSendSuccess,
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
    BagIsEmptyText,
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
import {basket} from "../../redux/actions";


const BasketStoreBody = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.basket.itemsInBasket);
    const responseData = useSelector(state => state.idLoadReducer);
    const idArray = items.map(item => item.id);
    const handleProceedToCheckout = (e) => {
        e.preventDefault()
        dispatch(basket(idArray))
    }
    return (
        <>
            <Container>


                <BasketStoreBodyContainer>
                    {
                        responseData.length !== 0 ?
                            <BasketSendSuccess>{responseData.message}...</BasketSendSuccess> :
                            <>
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
                                                key={item.id}
                                                card={item}/>))
                                        : <h4>
                                            {BagIsEmptyText}
                                        </h4>
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
                                            onClick={handleProceedToCheckout}>{BasketButtonProceedToCheckoutText}</BasketStoreBodyBtn>
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
                            </>
                    }
                </BasketStoreBodyContainer>
            </Container>
        </>
    )
}
export default BasketStoreBody;