import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import {HeaderSection} from "../components/Styled-Components/General"
import Svg from "../assets/svg";
import React from "react";
import HeaderIntro from "../components/MainPage/HeaderIntro";
import HeaderDropdownSearch from "../components/MainPage/HeaderDropdownSearch";
import Media from 'react-media';

const Header = () => {
    return (
        <>
            <HeaderDropdownSearch/>
            <HeaderSection>
                <Svg/>
                <HeaderNavigation/>
                <Media query="(min-width: 375px)" render={() =>
                    (
                <HeaderIntro/>
                    )}
                />
            </HeaderSection>
        </>
    )
}
export default Header;