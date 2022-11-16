import {Container, Section} from "../components/StyledComponents/General";
import FooterForm from "../components/MainPage/FooterForm";
import FooterLists from "../components/MainPage/FooterList";
import Media from "react-media";
import MobileFooterLists from "../components/MainPage/MobileFootelList";

const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterForm/>
                <Media query={{maxWidth: 376}}>
                    {matches =>
                        matches ? (
                            <MobileFooterLists/>
                        ) : (
                            <FooterLists/>
                        )
                    }
                </Media>

            </Container>
        </Section>
    )
}

export default Footer;