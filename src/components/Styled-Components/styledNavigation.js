import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

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
      cursor: pointer;
      position: relative;
      &:hover:after {
        opacity: 1;
        transition: 0.5s ease;
      }
      &:after {
        background-color:${props => props.color || "#FFFFFF"};
        border-color: ${props => props.color || "#FFFFFF"};
        content: "";
        display: block;
        width: 100%;
        bottom: -5px;
        position: absolute;
        border-width: 1px;
        border-style: solid;
        opacity: 0;
        z-index: 1;
        transition: opacity 0.1s ease;
      }

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
  width: ${props => props.width || '21px'};
  height: ${props => props.height || '21px'};
`
export const LikeIcon = styled.svg`
  display: block;
  fill: ${props => props.fill || "#FFFFFF"};
  width: ${props => props.width || '21px'};
  height: ${props => props.height || '21px'};
`

export const HeaderTitle = styled.h1`
  color: ${props => props.color || "#FFFFFF"};
  margin-bottom: 28.5px;
  font-size: 57px;
  font-weight: 700;
`
export const HeaderSubTitle = styled.h2`
  color: ${props => props.color || "#FFFFFF"};
  margin-bottom: 45px;
  font-size: 24px;
  font-weight: 400;
`
export const HeaderButton = styled.button`
  color: ${props => props.color || "#FFFFFF"};
  background-color: ${props => props.color || "initial"};
  border-color: ${props => props.color || "#FFFFFF"};
  border-width: 1px;
  border-style: solid;
  padding: 25.5px 61.5px;
  font-size: 32px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.color || "#FFFFFF"};
    color: ${props => props.color || "#333333"};
    outline: none;
    transition: 0.5s ease;
  }
`