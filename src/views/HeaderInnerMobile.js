import HeaderIntro from "../components/MainPage/HeaderIntro";
import React from "react";
import {HeaderMobileIntroWrapper} from "../components/Styled-Components/styledNavigation";
import Media from 'react-media';

const HeaderIntroForMobile = () => {
    return (
        <>
            <Media query="(max-width: 376px)" render={() =>
                (
                    <HeaderMobileIntroWrapper>
                        <HeaderIntro/>
                    </HeaderMobileIntroWrapper>
                )}
            />
        </>
    )
}

export default HeaderIntroForMobile;