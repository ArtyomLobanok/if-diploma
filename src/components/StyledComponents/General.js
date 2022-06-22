import styled from "styled-components";
import backgroundImage from "../../assets/img/image-placeholder.png"
import {Link} from "react-router-dom";
import backgroundImageMobile from "../../assets/img/375/mobileBackground.png"

export const StyledLinkCard = styled(Link)`
  text-decoration: none;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1642px;
  padding: 0 1rem;
  margin: 0 auto;
  overflow: hidden;
`

export const HeaderSection = styled.section`
  position: relative;
  background-image: url(${backgroundImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  min-height: 56.25rem;
  background-size: cover;
  padding: 25px 0 122px;
  @media (max-width: 376px) {
    height: 388px;
    width: 375px;
    min-height: auto;
    background-image: url(${backgroundImageMobile});
    padding: 12px 0;
  }
`

const StyledFlex = styled.div`
  position: ${props => props.position || 'initial'};
  display: flex;
  flex-wrap: ${props => props.wrap || 'initial'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || '100%'};
  overflow: hidden;
`

export const Flex = (props) => {
    return <StyledFlex {...props}/>
}

export const Section = styled.section`
  background: ${props => props.color || "#FFFFFF"};
  padding: 120px 0;
  display: flex;
  @media (max-width: 376px) {
    padding-top: 36px;
    padding-bottom: 0;
  }
`
export const SectionTitleWrapper = styled.div`
  color: ${props => props.color || "#000F08"};
  display: flex;
  margin: 0 auto 110px;
  font-size: 46px;
  text-decoration: none;
  @media (max-width: 376px) {
    font-size: 28px;
    margin: 0 auto 36px;
  }
`
export const SectionTitle = styled.h3`
  margin-right: ${props => props.marginRight || "0"};
  font-weight: 400;
  @media (max-width: 376px) {
    font-size: 28px;
  }
`
export const SectionTitleBold = styled.h3`
  font-weight: 700;
  @media (max-width: 376px) {
    font-size: 28px;
  }
`

export const LikeIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '18px'};
  margin: ${props => props.margin || '0'};
  z-index: 1000;
`

