import HeaderNavigation from "../components/MainPage/HeaderNavigation";
import {HeaderSection} from "../components/Styled-Components/General"
import Svg from "../assets/svg";
import React from "react";
import HeaderIntro from "../components/MainPage/HeaderIntro";
const Header = () => {
    return (
        <HeaderSection>
            <Svg/>
            <HeaderNavigation/>
            <HeaderIntro/>
        </HeaderSection>
    )
}
export default Header;