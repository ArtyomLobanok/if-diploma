import {Container, Section} from "../components/Styled-Components/General";
import FooterForm from "../components/FooterForm";
import FooterLists from "../components/FooterList";

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