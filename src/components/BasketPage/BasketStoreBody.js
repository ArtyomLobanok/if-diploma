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
    BasketButtonTotalPriceText,
    BasketStoreBodySubTitle,
    BasketStoreBodyUnitText,
    BasketTotalPriceText,
} from "../../configs/stringsDataConfig";
import {Container} from "../Styled-Components/General";
import BasketStoreBodyCard from "./BasketStoreBodyCard";

const BasketStoreBody = () => {
    return (
        <>
            <Container>
                <BasketStoreBodyContainer>
                    <BasketStoreBodyHeader>
                        <p>{BasketStoreBodySubTitle}</p>
                        <p>
                            <BasketStoreBodyHeaderValueItems>
                                2
                            </BasketStoreBodyHeaderValueItems>
                            {BasketStoreBodyUnitText}
                        </p>
                    </BasketStoreBodyHeader>
                    <BasketStoreBodyMain>

                        <BasketStoreBodyCard/>

                    </BasketStoreBodyMain>
                    <BasketStoreBodyFooter>
                        <p>
                            {BasketTotalPriceText}
                            <BasketTotalPriceValue>
                                340
                            </BasketTotalPriceValue>
                        </p>
                        <BasketStoreBodyBtn>{BasketButtonTotalPriceText}</BasketStoreBodyBtn>
                        <BasketStoreBodyPayCardWrapper>
                            <BasketStoreBodyPayCard>
                                <img src={maestroImg} alt='maestro'/>
                            </BasketStoreBodyPayCard>
                            <BasketStoreBodyPayCard>
                                <img src={visaImg} alt='visa'/>
                            </BasketStoreBodyPayCard>
                        </BasketStoreBodyPayCardWrapper>
                    </BasketStoreBodyFooter>
                </BasketStoreBodyContainer>
            </Container>
        </>
    )
}
export default BasketStoreBody;