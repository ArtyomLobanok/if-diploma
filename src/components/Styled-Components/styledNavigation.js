import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 40px 0 758px;

  ul {
    color: ${props => props.color || "#FFFFFF"};
    display: flex;
    align-items: center;
    margin: 0;
    padding: 4px;
    font-size: 18px;

    li {
      display: flex;
      align-items: center;
      margin-right: 60px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export const LogotypeIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '354px'};
  height: ${props => props.height || '40.5px'};
`
export const SearchIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '28px'};
  height: ${props => props.height || '28px'};
`
export const LikeIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '28px'};
  height: ${props => props.height || '28px'};
`

export const HeaderTitle = styled.h1`
  color: ${props => props.color || "#FFFFFF"};
`