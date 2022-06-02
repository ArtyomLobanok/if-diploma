import {
    navLinkTextArrivals, navLinkTextBag,
    navLinkTextCollections,
    navLinkTextSearch,
    navLinkTextShop,
    navLinkTextSignIn
} from "../configs/stringsDataConfig";
import {LogotypeIcon, Navigation, SearchIcon} from "./Styled-Components/styledNavigation";
import {Container, LikeIcon} from "./Styled-Components/General";
import {Link} from "react-router-dom";

const HeaderNavigation = () => {
    return (
        <Container>
            <Navigation>
                <ul>
                    <li>{navLinkTextArrivals}</li>
                    <li>{navLinkTextShop}</li>
                    <li>{navLinkTextCollections}</li>
                </ul>
                <LogotypeIcon>
                    <use href="#logotypeIcon"></use>
                </LogotypeIcon>
                <ul>
                    <li>
                        <SearchIcon>
                            <use href="#searchIcon"></use>
                        </SearchIcon>
                        {navLinkTextSearch}
                    </li>
                    <li><Link to="/Login">{navLinkTextSignIn}</Link></li>
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