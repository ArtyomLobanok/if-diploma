import BasketData from "../BasketPage/BasketData";
import {Container} from "../Styled-Components/General";
import {
    BasketSendSuccess,
    BasketStoreBodyContainer,
    BasketStoreBodyHeader,
    BasketStoreBodyHeaderValueItems,
    BasketStoreBodyMain,
} from "../Styled-Components/styleBasketPage";
import {
    BagIsEmptyText,
    BasketStoreBodyOneUnitText,
    BasketStoreBodySubTitle,
    BasketStoreBodyUnitText,
} from "../../configs/stringsDataConfig";
import BasketStoreBodyCard from "../BasketPage/BasketStoreBodyCard";


const FavoritesStoreBody = () => {
    const {responseData, basketItems} = BasketData()
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
                            </>
                    }
                </BasketStoreBodyContainer>
            </Container>
        </>
    )
}

export default FavoritesStoreBody;