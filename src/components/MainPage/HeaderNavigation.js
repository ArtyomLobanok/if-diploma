import {
    FavoritesStoreBodySubTitle,
    navLinkTextArrivals, navLinkTextBag,
    navLinkTextCollections,
    navLinkTextSearch,
    navLinkTextShop,
    navLinkTextSignIn, navLinkTextSignOut
} from "../../configs/stringsDataConfig";
import {
    LogotypeIcon,
    LogotypeIconHamburger,
    NavBurgerBtn,
    NavBurgerMenu,
    NavButtonBasket,
    NavButtonFavorites,
    NavButtonSearch,
    Navigation, NavigationHamburgerClose,
    NavigationHamburgerList,
    NavigationHamburgerListHeader,
    NavigationHamburgerListWrapper,
    NavigationHamburgerShadowBox,
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
import {
    DropdownNavList,
} from "./HeaderNavigationHamburgerList";

const HeaderNavigation = () => {
    const itemsBasket = useSelector(state => state.basket.itemsInBasket);
    const itemsFavorites = useSelector(state => state.favorites.itemsInFavorites);
    const {isAuth} = useAuth();
    const dispatch = useDispatch();
    const {isDropdown, handleClickCloseList, handleClickDropdownList} = DropdownNavList();
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
                            <>
                                <NavBurgerMenu>
                                    <NavBurgerBtn onClick={handleClickDropdownList}>
                                        <svg>
                                            <use href="#mobileHamburger"></use>
                                        </svg>
                                    </NavBurgerBtn>
                                </NavBurgerMenu>
                            </>
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
                                <NavButtonSearch onClick={handleClickToOpenSearch}>
                                    <svg>
                                        <use href="#mobileSearch"/>
                                    </svg>
                                </NavButtonSearch>
                                <Link to="/basket">
                                    <NavButtonBasket>
                                        <svg>
                                            <use href="#mobileBasket"/>
                                        </svg>
                                    </NavButtonBasket>
                                </Link>
                                <Link to="/favorites">
                                    <NavButtonFavorites>
                                        <svg>
                                            <use href="#mobileWishList"/>
                                        </svg>
                                    </NavButtonFavorites>
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
                                {
                                    isAuth ?
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
            <div>
                {
                    isDropdown && (
                        <NavigationHamburgerShadowBox>
                            <NavigationHamburgerListWrapper>
                                <Container>
                                    <NavigationHamburgerListHeader>

                                            <NavigationHamburgerClose onClick={handleClickCloseList}>
                                                <use href="#closeSearchForm"/>
                                            </NavigationHamburgerClose>

                                            <Link to="/">
                                                <LogotypeIconHamburger fill='#000F08'>
                                                    <use href="#logotypeIcon"></use>
                                                </LogotypeIconHamburger>
                                            </Link>


                                            <SearchIcon onClick={handleClickToOpenSearch} fill='#000F08' width='24px'
                                                        height='24px'>
                                                <use href="#searchIcon"></use>
                                            </SearchIcon>

                                    </NavigationHamburgerListHeader>
                                    <NavigationHamburgerList>

                                        <li>{navLinkTextArrivals}</li>
                                        <li>{navLinkTextShop}</li>
                                        <li>{navLinkTextCollections}</li>
                                        <li>
                                            <Link to="/favorites">
                                                {FavoritesStoreBodySubTitle}
                                            </Link>
                                            {
                                                itemsFavorites.length !== 0 &&
                                                <span>({itemsFavorites.length})</span>
                                            }
                                        </li>
                                        <li>
                                            <Link to="/basket">
                                                {navLinkTextBag}
                                            </Link>
                                            {
                                                itemsBasket.length !== 0 &&
                                                <span>({itemsBasket.length})</span>
                                            }
                                        </li>
                                        {
                                            isAuth ?
                                                <li onClick={handleLogOut}>{navLinkTextSignOut}</li> :
                                                <li><Link to="/Login">{navLinkTextSignIn}</Link></li>
                                        }
                                    </NavigationHamburgerList>

                                </Container>
                            </NavigationHamburgerListWrapper>
                        </NavigationHamburgerShadowBox>
                    )
                }
            </div>
        </Container>
    )
}

export default HeaderNavigation;