import {
    headerTextButton, headerTextInnerForMobile,
    headerTextSubTitlePartOne, headerTextSubTitlePartSecond,
    headerTextTitle, headerTextTitleForMobile, navLinkTextArrivals, navLinkTextCollections, navLinkTextShop,
} from "../../configs/stringsDataConfig";
import {
    HeaderButton,
    HeaderSubTitle,
    HeaderTitle,
    HeaderWrapper, NavBurgerBtn,
    NavBurgerMenu
} from "../StyledComponents/styledNavigation";
import {Container} from "../StyledComponents/General";
import Media from "react-media";


const HeaderIntro = () => {
    return (
        <Container>
            <HeaderWrapper>
                <Media query={{maxWidth: 376}}>
                    {matches =>
                        matches ? (
                            <HeaderTitle>{headerTextTitleForMobile}</HeaderTitle>

                        ) : (
                            <HeaderTitle>{headerTextTitle}</HeaderTitle>
                        )
                    }
                </Media>
                <HeaderSubTitle>{headerTextInnerForMobile}</HeaderSubTitle>
                <HeaderButton>{headerTextButton}</HeaderButton>
            </HeaderWrapper>
        </Container>

    )
}

export default HeaderIntro;