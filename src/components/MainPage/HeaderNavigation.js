import {
    navLinkTextArrivals, navLinkTextBag,
    navLinkTextCollections,
    navLinkTextSearch,
    navLinkTextShop,
    navLinkTextSignIn, navLinkTextSignOut
} from "../../configs/stringsDataConfig";
import {
    LogotypeIcon,
    NavBurgerBtn,
    NavBurgerMenu, NavButtonBasket, NavButtonFavorites, NavButtonSearch,
    Navigation,
    NavMobButtonWrapper,
    SearchIcon
} from "../StyledComponents/styledNavigation";
import {Container, LikeIcon} from "../StyledComponents/General";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import {useDispatch, useSelector} from 'react-redux';
import {removeUser} from '../../redux/slices/userSlice'
import {showSearch} from "../../redux/actions";
import Media from 'react-media';

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
                <Media query={{maxWidth: 376}}>
                    {matches =>
                        matches ? (
                            <NavBurgerMenu>
                                <NavBurgerBtn/>
                            </NavBurgerMenu>
                        ) : (
                            <ul>
                                <li>{navLinkTextArrivals}</li>
                                <li>{navLinkTextShop}</li>
                                <li>{navLinkTextCollections}</li>
                            </ul>
                        )
                    }
                </Media>

                <Link to="/">
                    <LogotypeIcon>
                        <use href="#logotypeIcon"></use>
                    </LogotypeIcon>
                </Link>

                <Media query={{maxWidth: 376}}>
                    {matches =>
                        matches ? (
                            <NavMobButtonWrapper>
                                <NavButtonSearch onClick={handleClickToOpenSearch}/>
                                <Link to="/basket">
                                    <NavButtonBasket/>
                                </Link>
                                <Link to="/favorites">
                                    <NavButtonFavorites/>
                                </Link>
                            </NavMobButtonWrapper>
                        ) : (
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
                        )
                    }
                </Media>
            </Navigation>

        </Container>
    )
}

export default HeaderNavigation;