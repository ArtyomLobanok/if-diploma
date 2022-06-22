import {
    headerTextButton,
    headerTextSubTitlePartOne, headerTextSubTitlePartSecond,
    headerTextTitle, headerTextTitleForMobile, navLinkTextArrivals, navLinkTextCollections, navLinkTextShop,
} from "../../configs/stringsDataConfig";
import {
    HeaderButton,
    HeaderSubTitle,
    HeaderTitle,
    HeaderWrapper, NavBurgerBtn,
    NavBurgerMenu
} from "../Styled-Components/styledNavigation";
import {Container} from "../Styled-Components/General";
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
                <HeaderSubTitle>{headerTextSubTitlePartOne}<br/>{headerTextSubTitlePartSecond}</HeaderSubTitle>
                <HeaderButton>{headerTextButton}</HeaderButton>
            </HeaderWrapper>
        </Container>

    )
}

export default HeaderIntro;