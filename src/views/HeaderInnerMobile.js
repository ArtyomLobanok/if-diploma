import HeaderIntro from "../components/MainPage/HeaderIntro";
import React from "react";
import {HeaderMobileIntroWrapper} from "../components/StyledComponents/styledNavigation";
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