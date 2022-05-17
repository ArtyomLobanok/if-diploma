import styled from "styled-components";
import backgroundImage from "../../assets/img/image-placeholder.png"

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
  min-height: 56.25rem;
  background-size: cover;
  padding: 25px 0 122px;
`

const StyledFlex = styled.div`
  position: ${props => props.position || 'initial'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || '100%'};
`

export const Flex = (props) => {
    return <StyledFlex {...props}/>
}

export const Section = styled.section`
  background: ${props => props.color || "#FFFFFF"};
  padding: 120px 0;
  display: flex;
`
export const SectionTitleWrapper = styled.div`
  color: ${props => props.color || "#000F08"};
  display: flex;
  margin: 0 auto 110px;
  font-size: 46px;
  text-decoration: none;
`
export const SectionTitle = styled.h3`
  margin-right: ${props => props.marginRight || "0"};
  font-weight: 400;
`
export const SectionTitleBold = styled.h3`
  font-weight: 700;
`

export const LikeIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '18px'};
  z-index: 1000;
`