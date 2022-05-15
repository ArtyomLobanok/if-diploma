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
  padding: 40px 0 200px;
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
  padding: 180px 0;
  display: flex;
`

export const SectionTitle = styled.h3`
  color: ${props => props.color || "#000F08"};
  font-weight: 700;
  font-size: 51px;
  text-decoration: none;
`