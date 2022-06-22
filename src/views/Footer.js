import {Container, Section} from "../components/StyledComponents/General";
import FooterForm from "../components/MainPage/FooterForm";
import FooterLists from "../components/MainPage/FooterList";

const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterForm/>
                <FooterLists/>
            </Container>
        </Section>
    )
}

export default Footer;