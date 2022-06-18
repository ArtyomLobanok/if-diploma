import {Container} from "../Styled-Components/General";
import {
    BasketStoreBodyContainer,
    BasketStoreBodyHeader,
    BasketStoreBodyHeaderValueItems,
    BasketStoreBodyMain,
} from "../Styled-Components/styleBasketPage";
import {
    BasketStoreBodyOneUnitText,
    BasketStoreBodyUnitText,
    FavoritesIsEmptyText,
    FavoritesStoreBodySubTitle,
} from "../../configs/stringsDataConfig";
import {useSelector} from "react-redux";
import FavoritesStoreBodyCard from "./FavoritesStoreBodyCard";


const FavoritesStoreBody = () => {
    const favoritesItems = useSelector(state => state.favorites.itemsInFavorites);
    return (
        <>
            <Container>
                <BasketStoreBodyContainer>
                    <BasketStoreBodyHeader>
                        <p>{FavoritesStoreBodySubTitle}</p>
                        {
                            favoritesItems.length <= 1 ?
                                <p>
                                    <BasketStoreBodyHeaderValueItems>
                                        {favoritesItems.length}
                                    </BasketStoreBodyHeaderValueItems>
                                    {BasketStoreBodyOneUnitText}
                                </p> :
                                <p>
                                    <BasketStoreBodyHeaderValueItems>
                                        {favoritesItems.length}
                                    </BasketStoreBodyHeaderValueItems>
                                    {BasketStoreBodyUnitText}
                                </p>
                        }
                    </BasketStoreBodyHeader>
                    <BasketStoreBodyMain>
                        {favoritesItems.length > 0 ?
                            favoritesItems.map(item => (
                                <FavoritesStoreBodyCard
                                    key={item.id}
                                    card={item}/>))
                            : <h4>
                                {FavoritesIsEmptyText}
                            </h4>
                        }
                    </BasketStoreBodyMain>
                </BasketStoreBodyContainer>
            </Container>
        </>
    )
}

export default FavoritesStoreBody;