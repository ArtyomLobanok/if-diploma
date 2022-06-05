import styled from "styled-components";
import {Flex} from "../Styled-Components/General"
import {
    FooterListTextAbout, FooterListTextCareers, FooterListTextContact, FooterListTextContactUs,
    FooterListTextCustomer, FooterListTextDelivery, FooterListTextEmail, FooterListTextFacebook,
    FooterListTextFAQ, FooterListTextFollow, FooterListTextGift, FooterListTextInfo, FooterListTextInstagram,
    FooterListTextOdnoklassniki, FooterListTextPayment, FooterListTextPolicies, FooterListTextReturn,
    FooterListTextSize, FooterListTextTel, FooterListTextTrack, FooterListTextVisit,
} from "../../configs/stringsDataConfig";

export const FooterList = styled.ul`
  color: ${props => props.color || "#000F08"};
  width: 25%;
  white-space: pre-line;

  &:nth-child(4) {
    li {
      margin-bottom: 12px;
    }
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    
    &:hover {
      text-decoration: underline;
    }

    &:first-child {
      margin-bottom: 36px;
      font-size: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }
  
`
export const FooterIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#000000"};
  width: ${props => props.width || '16px'};
  height: ${props => props.height || '17px'};
  margin-right: 13px;
`

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