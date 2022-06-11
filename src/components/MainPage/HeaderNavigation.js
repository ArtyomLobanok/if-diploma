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
import {useDispatch} from 'react-redux';
import {removeUser} from '../../redux/slices/userSlice'
import {showSearch} from "../../redux/actions";

const HeaderNavigation = () => {
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
                    <li>{navLinkTextBag}</li>
                    <li>
                        <LikeIcon>
                            <use href="#likeIcon"></use>
                        </LikeIcon>
                    </li>
                </ul>
            </Navigation>

        </Container>
    )
}

export default HeaderNavigation;