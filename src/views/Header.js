import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import {HeaderSection} from "../components/StyledComponents/General"
import Svg from "../assets/svg";
import React from "react";
import HeaderIntro from "../components/MainPage/HeaderIntro";
import HeaderSearch from "../components/MainPage/HeaderSearch";
import Media from 'react-media';

const Header = () => {
    return (
        <>
            <HeaderSearch/>
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