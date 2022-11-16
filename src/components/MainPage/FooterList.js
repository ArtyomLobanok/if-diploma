import {Flex} from "../StyledComponents/General"
import {
    FooterListTextAbout, FooterListTextCareers, FooterListTextContact, FooterListTextContactUs,
    FooterListTextCustomer, FooterListTextDelivery, FooterListTextEmail, FooterListTextFacebook,
    FooterListTextFAQ, FooterListTextFollow, FooterListTextGift, FooterListTextInfo, FooterListTextInstagram,
    FooterListTextOdnoklassniki, FooterListTextPayment, FooterListTextPolicies, FooterListTextReturn,
    FooterListTextSize, FooterListTextTel, FooterListTextTrack, FooterListTextVisit,
} from "../../configs/stringsDataConfig";
import {FooterIcon, FooterList} from "../StyledComponents/styledFooterList";

const FooterLists = () => {
    return (
        <Flex>
            <FooterList>
                <li>{FooterListTextCustomer}</li>
                <li>{FooterListTextContact}</li>
                <li>{FooterListTextTrack}</li>
                <li>{FooterListTextDelivery}</li>
                <li>{FooterListTextPayment}</li>
                <li>{FooterListTextReturn}</li>
                <li>{FooterListTextFAQ}</li>
            </FooterList>
            <FooterList>
                <li>{FooterListTextInfo}</li>
                <li>{FooterListTextGift}</li>
                <li>{FooterListTextSize}</li>
                <li>{FooterListTextCareers}</li>
                <li>{FooterListTextAbout}</li>
                <li>{FooterListTextPolicies}</li>
            </FooterList>
            <FooterList>
                <li>{FooterListTextFollow}</li>
                <li>
                    <FooterIcon>
                        <use href="#facebook"></use>
                    </FooterIcon>
                    {FooterListTextFacebook}
                </li>
                <li>
                    <FooterIcon>
                        <use href="#odnaclassniki"></use>
                    </FooterIcon>
                    {FooterListTextOdnoklassniki}
                </li>
                <li>
                    <FooterIcon>
                        <use href="#instagram"></use>
                    </FooterIcon>
                    {FooterListTextInstagram}
                </li>
            </FooterList>
            <FooterList>
                <li>{FooterListTextContactUs}</li>
                <li>{FooterListTextEmail}</li>
                <li>{FooterListTextTel}</li>
                <li>{FooterListTextVisit}</li>
            </FooterList>
        </Flex>
    )
}
export default FooterLists;