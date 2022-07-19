import React from "react";
import MobileFooterListData from "./MobileFooterListData";
import {
    FooterListTextAbout,
    FooterListTextCareers,
    FooterListTextCompany,
    FooterListTextContact, FooterListTextContactUs,
    FooterListTextCustomer,
    FooterListTextDelivery,
    FooterListTextFacebook,
    FooterListTextFAQ,
    FooterListTextFollow,
    FooterListTextGift,
    FooterListTextInstagram,
    FooterListTextOdnoklassniki,
    FooterListTextPayment,
    FooterListTextPolicies,
    FooterListTextReturn,
    FooterListTextSize,
    FooterListTextTrack
} from "../../configs/stringsDataConfig";
import {
    FooterCollapseChanger,
    FooterCollapseList,
    FooterCollapsesWrapper,
    FooterCollapseWrapper,
    MobileItemIconClose,
    MobileItemIconOpen
} from "../StyledComponents/styledMobileFooterList";
import {FooterIcon} from "../StyledComponents/styledFooterList";
import {Flex} from "../StyledComponents/General";


const MobileFooterLists = () => {
    const {
        isActiveFirstFooterCollapse,
        isActiveSecondFooterCollapse,
        isActiveThirdFooterCollapse,
        isActiveFourthFooterCollapse,
        handleClickFirstFooterCollapse,
        handleClickSecondFooterCollapse,
        handleClickThirdFooterCollapse,
        handleClickFourthFooterCollapse,
    } = MobileFooterListData();
    return (
        <FooterCollapsesWrapper>
            <FooterCollapseWrapper>
                <FooterCollapseChanger>
                    {
                        isActiveFirstFooterCollapse ?
                            <Flex>
                                <MobileItemIconClose onClick={handleClickFirstFooterCollapse}>
                                    <use href="#collapse"></use>
                                </MobileItemIconClose>
                                <button onClick={handleClickFirstFooterCollapse}>{FooterListTextCustomer}</button>
                            </Flex>
                            :
                            <Flex>
                                <MobileItemIconOpen onClick={handleClickFirstFooterCollapse}>
                                    <use href="#cross"></use>
                                </MobileItemIconOpen>
                                <button onClick={handleClickFirstFooterCollapse}>{FooterListTextCustomer}</button>
                            </Flex>
                    }
                </FooterCollapseChanger>
                <FooterCollapseList>
                    {
                        isActiveFirstFooterCollapse &&
                        <ul>
                            <li>{FooterListTextContact}</li>
                            <li>{FooterListTextTrack}</li>
                            <li>{FooterListTextDelivery}</li>
                            <li>{FooterListTextPayment}</li>
                            <li>{FooterListTextReturn}</li>
                            <li>{FooterListTextFAQ}</li>
                        </ul>
                    }
                </FooterCollapseList>
            </FooterCollapseWrapper>
            <FooterCollapseWrapper>
                <FooterCollapseChanger>
                    {
                        isActiveSecondFooterCollapse ?
                            <Flex>
                                <MobileItemIconClose onClick={handleClickSecondFooterCollapse}>
                                    <use href="#collapse"></use>
                                </MobileItemIconClose>
                                <button onClick={handleClickSecondFooterCollapse}>{FooterListTextCompany}</button>
                            </Flex>
                            :
                            <Flex>
                                <MobileItemIconOpen onClick={handleClickSecondFooterCollapse}>
                                    <use href="#cross"></use>
                                </MobileItemIconOpen>
                                <button onClick={handleClickSecondFooterCollapse}>{FooterListTextCompany}</button>
                            </Flex>
                    }
                </FooterCollapseChanger>
                <FooterCollapseList>
                    {
                        isActiveSecondFooterCollapse &&
                        <ul>
                            <li>{FooterListTextGift}</li>
                            <li>{FooterListTextSize}</li>
                            <li>{FooterListTextCareers}</li>
                            <li>{FooterListTextAbout}</li>
                            <li>{FooterListTextPolicies}</li>
                        </ul>
                    }
                </FooterCollapseList>
            </FooterCollapseWrapper>
            <FooterCollapseWrapper>
                <FooterCollapseChanger>
                    {
                        isActiveThirdFooterCollapse ?
                            <Flex>
                                <MobileItemIconClose onClick={handleClickThirdFooterCollapse}>
                                    <use href="#collapse"></use>
                                </MobileItemIconClose>
                                <button onClick={handleClickThirdFooterCollapse}>{FooterListTextFollow}</button>
                            </Flex>
                            :
                            <Flex>
                                <MobileItemIconOpen onClick={handleClickThirdFooterCollapse}>
                                    <use href="#cross"></use>
                                </MobileItemIconOpen>
                                <button onClick={handleClickThirdFooterCollapse}>{FooterListTextFollow}</button>
                            </Flex>
                    }
                </FooterCollapseChanger>
                <FooterCollapseList>
                    {
                        isActiveThirdFooterCollapse &&
                        <ul>
                            <li>
                                <Flex>
                                    <FooterIcon>
                                        <use href="#facebook"></use>
                                    </FooterIcon>
                                    {FooterListTextFacebook}
                                </Flex>
                            </li>
                            <li>
                                <Flex>
                                    <FooterIcon>
                                        <use href="#odnaclassniki"></use>
                                    </FooterIcon>
                                    {FooterListTextOdnoklassniki}
                                </Flex>
                            </li>
                            <li>
                                <Flex>
                                    <FooterIcon>
                                        <use href="#instagram"></use>
                                    </FooterIcon>
                                    {FooterListTextInstagram}
                                </Flex>
                            </li>
                        </ul>
                    }
                </FooterCollapseList>
            </FooterCollapseWrapper>
            <FooterCollapseWrapper>
                <FooterCollapseChanger>
                    {
                        isActiveFourthFooterCollapse ?
                            <Flex>
                                <MobileItemIconClose onClick={handleClickFourthFooterCollapse}>
                                    <use href="#collapse"></use>
                                </MobileItemIconClose>
                                <button onClick={handleClickFourthFooterCollapse}>{FooterListTextContactUs}</button>
                            </Flex>
                            :
                            <Flex>
                                <MobileItemIconOpen onClick={handleClickFourthFooterCollapse}>
                                    <use href="#cross"></use>
                                </MobileItemIconOpen>
                                <button onClick={handleClickFourthFooterCollapse}>{FooterListTextContactUs}</button>
                            </Flex>
                    }
                </FooterCollapseChanger>
                <FooterCollapseList>
                    {
                        isActiveFourthFooterCollapse &&
                        <ul>
                            <li>{FooterListTextTrack}</li>
                            <li>{FooterListTextDelivery}</li>
                            <li>{FooterListTextPayment}</li>
                            <li>{FooterListTextReturn}</li>
                            <li>{FooterListTextFAQ}</li>
                        </ul>
                    }
                </FooterCollapseList>
            </FooterCollapseWrapper>
        </FooterCollapsesWrapper>
    )
};
export default MobileFooterLists;