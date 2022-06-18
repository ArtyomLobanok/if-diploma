import {
    navLinkTextArrivals, navLinkTextBag,
    navLinkTextCollections,
    navLinkTextSearch,
    navLinkTextShop,
    navLinkTextSignIn, navLinkTextSignOut
} from "../../configs/stringsDataConfig";
import {LogotypeIcon, Navigation, SearchIcon} from "../Styled-Components/styledNavigation";
import {Container, LikeIcon} from "../Styled-Components/General";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import {useDispatch, useSelector} from 'react-redux';
import {removeUser} from '../../redux/slices/userSlice'
import {showSearch} from "../../redux/actions";

const HeaderNavigation = () => {
    const itemsBasket = useSelector(state => state.basket.itemsInBasket);
    const itemsFavorites = useSelector(state => state.favorites.itemsInFavorites);

    const {isAuth} = useAuth();
    const dispatch = useDispatch();

    const handleClickToOpenSearch = () => {
        dispatch(showSearch(true))
    }

    const handleLogOut = () => {
        dispatch(removeUser({}))
    }
    return (
        <Container>
            <Navigation>
                <ul>
                    <li>{navLinkTextArrivals}</li>
                    <li>{navLinkTextShop}</li>
                    <li>{navLinkTextCollections}</li>
                </ul>
                <Link to="/">
                    <LogotypeIcon>
                        <use href="#logotypeIcon"></use>
                    </LogotypeIcon>
                </Link>
                <ul>
                    <li onClick={handleClickToOpenSearch}>
                        <SearchIcon>
                            <use href="#searchIcon"></use>
                        </SearchIcon>
                        {navLinkTextSearch}
                    </li>
                    {isAuth ?
                        <li onClick={handleLogOut}>{navLinkTextSignOut}</li> :
                        <li><Link to="/Login">{navLinkTextSignIn}</Link></li>
                    }
                    <li>
                        <Link to="/basket">
                            {navLinkTextBag}
                        </Link>
                        {
                            itemsBasket.length !== 0 &&
                            <span>({itemsBasket.length})</span>
                        }
                    </li>
                    <li>
                        <Link to="/favorites">
                            <LikeIcon>
                                <use href="#likeIcon"></use>
                            </LikeIcon>
                        </Link>
                        {
                            itemsFavorites.length !== 0 &&
                            <span>({itemsFavorites.length})</span>
                        }
                    </li>
                </ul>
            </Navigation>

        </Container>
    )
}

export default HeaderNavigation;