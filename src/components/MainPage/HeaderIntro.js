import {
    headerTextButton,
    headerTextSubTitlePartOne, headerTextSubTitlePartSecond,
    headerTextTitle,
} from "../../configs/stringsDataConfig";
import {HeaderButton, HeaderSubTitle, HeaderTitle} from "../Styled-Components/styledNavigation";
import {Container} from "../Styled-Components/General";
import {HeaderWrapper} from "../Styled-Components/styledHeaderIntro";

const HeaderIntro = () => {
    return (
        <Container>
            <HeaderWrapper>
                 <HeaderTitle>{headerTextTitle}</HeaderTitle>
                <HeaderSubTitle>{headerTextSubTitlePartOne}<br/>{headerTextSubTitlePartSecond}</HeaderSubTitle>
                <HeaderButton>{headerTextButton}</HeaderButton>
            </HeaderWrapper>
        </Container>
    )
}

export default HeaderIntro;