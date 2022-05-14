import styled, {keyframes} from "styled-components";
import backgroundImage from "../../assets/img/image-placeholder.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 165rem;
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
  background: ${props => props.theme.BACKGROUND_COLOR_SECTION};
  padding: 120px 0;
  display: flex;
`

export const Title = styled.p`
  color: ${props => props.theme.COLOR_TITLE};
  font-size: ${props => props.little ? "18px" : "24px"};
  font-weight: ${props => props.bold ? "500" : "400"};
  margin: ${props => props.margin || '0'};
  text-decoration: none;
`