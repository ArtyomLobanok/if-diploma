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
} from "../StyledComponents/styleBasketPage";
import {
    BagIsEmptyText,
    BasketButtonProceedToCheckoutText,
    BasketStoreBodyOneUnitText,
    BasketStoreBodySubTitle,
    BasketStoreBodyUnitText,
    BasketTotalPriceText,
} from "../../configs/stringsDataConfig";
import {Container} from "../StyledComponents/General";
import BasketStoreBodyCard from "./BasketStoreBodyCard";
import {calcTotalPrice} from "../utils";
import BasketData from "./BasketData";


const BasketStoreBody = () => {
    const {handleProceedToCheckout, responseData, basketItems} = BasketData()
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
                                        basketItems.length <= 1 ?
                                            <p>
                                                <BasketStoreBodyHeaderValueItems>
                                                    {basketItems.length}
                                                </BasketStoreBodyHeaderValueItems>
                                                {BasketStoreBodyOneUnitText}
                                            </p> :
                                            <p>
                                                <BasketStoreBodyHeaderValueItems>
                                                    {basketItems.length}
                                                </BasketStoreBodyHeaderValueItems>
                                                {BasketStoreBodyUnitText}
                                            </p>
                                    }
                                </BasketStoreBodyHeader>
                                <BasketStoreBodyMain>
                                    {basketItems.length > 0 ?
                                        basketItems.map(item => (
                                            <BasketStoreBodyCard
                                                key={item.id}
                                                card={item}/>))
                                        : <h4>
                                            {BagIsEmptyText}
                                        </h4>
                                    }
                                </BasketStoreBodyMain>
                                {basketItems.length > 0 ?
                                    <BasketStoreBodyFooter>
                                        <p>
                                            {BasketTotalPriceText}
                                            <BasketTotalPriceValue>
                                                {calcTotalPrice(basketItems)}
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