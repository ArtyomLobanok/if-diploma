import styled from "styled-components";

export const BtnCategoryWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  width: 100%;
  `

export const BtnCategory = styled.button`
  color: ${props => props.color || "#000F08"};
  background-color: ${props => props.background || "#EDE7F0"};

  display: flex;
  width: 100%;
  margin-right: 20px;
  border: none;
  outline: none;
  font-size: 32px;
  align-items: center;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${props => props.background || "#E9D6F2"};
    transition: 0.5s ease;
  }
  @media (max-width: 376px) {
    width: 47%;
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 18px;
    padding: 0;
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(6) {
      margin-right: 0;
    }
    &:nth-child(5),
    &:nth-child(6){
      margin-bottom: 0;
    }
  }
`

export const StyledSvgCategory = styled.svg`
  display: block;
  fill: ${props => props.fill || "#000F08"};
  width: ${props => props.width || '64px'};
  height: ${props => props.height || '64px'};
  margin: 28px 12px;
  @media (max-width: 376px) {
    width: ${props => props.width || '24px'};
    height: ${props => props.height || '38px'};
    margin: 18px 15px;
  }
`

export const StyledBtnShowMoreItemCategory = styled.button`
  color: ${props => props.color || "#000F08"};
  background: ${props => props.background || "initial"};
  display: block;
  margin: 80px auto 0;
  padding: 18px 95px;
  border: 1px solid #000F08;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    color: ${props => props.color || "#FFFFFF"};
    background: ${props => props.background || "#000F08"};
    transition: ease 0.5s;
  }
`
export const ShopCategoryNotFound = styled.h1`
    font-size: 46px;
    margin: 0 auto;
    font-weight: 700;
`

