import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import {HeaderSection} from "../components/StyledComponents/General"
import Svg from "../assets/svg";
import HeaderIntro from "../components/MainPage/HeaderIntro";
import HeaderSearch from "../components/MainPage/HeaderSearch";
import Media from 'react-media';

const Header = ({searchResultRef}) => {
    return (
        <>
            <HeaderSearch searchResultRef={searchResultRef}/>
            <HeaderSection>
                <Svg/>
                <HeaderNavigation/>
                <Media query="(min-width: 376px)" render={() =>
                    (
                        <HeaderIntro/>
                    )}
                />
            </HeaderSection>
        </>
    )
}

export default Header;