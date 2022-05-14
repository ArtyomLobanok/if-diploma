import {
    headerTextTitle,
} from "../configs/stringsData";
import {HeaderTitle} from "./Styled-Components/styledNavigation";
import {Container} from "./Styled-Components/General";
import {HeaderWrapper} from "./Styled-Components/styledHeaderIntro";

const HeaderIntro = () => {
    return (
        <Container>
            <HeaderWrapper>
                 <HeaderTitle>{headerTextTitle}</HeaderTitle>
            </HeaderWrapper>
        </Container>
    )
}

export default HeaderIntro;