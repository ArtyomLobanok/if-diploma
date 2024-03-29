import styled from "styled-components";
import {LikeIcon} from "./General";

export const ItemBodyWrapper = styled.div`
  display: flex;
  @media (max-width: 376px) {
    flex-direction: column;
    width: 100%;
  }
`

export const ItemHeaderWrapper = styled.div`
  background-color: ${props => props.color || "#FFFFFF"};
  padding: 20px 0;

  div {
    svg {
      fill: ${props => props.fill || "#000F08"};
    }

    ul {
      li {
        &:after {
          background-color: ${props => props.color || "#000F08"};
          border-color: ${props => props.color || "#000F08"};
        }

        color: ${props => props.color || "#000F08"};

        a {
          color: ${props => props.color || "#000F08"};
        }
      }
    }
  }
`
export const ItemImgWrapper = styled.div`
  display: flex;
  width: 75%;
  margin-right: 80px;

  img {
    display: block;
    object-fit: contain;
    max-width: 690px;
    max-height: 1070px;
    width: 50%;
    height: 100vh;
  }
  @media (max-width: 376px) {
    margin: 16px 0 54px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`
export const ItemInfoWrapper = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  font-size: 16px;
  font-weight: 300;
  @media (max-width: 376px) {
    width: 100%;
  }
`
export const ItemTitle = styled.h3`
  color: ${props => props.color || "#000F08"};
  font-size: 20px;
  font-weight: 400;
  margin: 50px 0 30px;
  @media (max-width: 376px) {
    width: 100%;
    margin: 0 0 18px;
    font-size: 16px;
  }
`
export const ItemPrice = styled.div`
  color: ${props => props.color || "#000F08"};
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  span {
    color: ${props => props.color || "#000F08"};
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.color || "#8C8C8C"};
  }
`
export const ItemColor = styled.div`
  margin-bottom: 64px;

  p {
    color: ${props => props.color || "#8C8C8C"};
    margin-bottom: 20px;
    font-weight: 300;
  }
  @media (max-width: 376px) {
    margin-bottom: 24px;
    p{
      margin-bottom: 10px;
    }
  }
`

export const ButtonColor = styled.button`
  background-color: ${props => props.color || "initial"};
  width: 40px;
  height: 40px;
  padding: 3px;
  border: solid 1px #000F08;
  cursor: pointer;

  &:hover {
    transition: 0.5s ease;
    box-shadow: rgba(0, 15, 8, 0.6);
  }
`
export const ItemSize = styled.div`
  margin-bottom: 54px;

  p {
    color: ${props => props.color || "#8C8C8C"};
    margin-bottom: 24px;
  }
  @media (max-width: 376px) {
    p {
      margin-bottom: 10px;
    }
  }
`

export const BtnListSize = styled.button`
  padding: 0 6px;
  margin-right: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  background: initial;
  border-bottom: 1px solid #FFFFFF;

  &:hover {
    border-bottom: 1px solid #000F08;
    transition: 0.5s ease;
  }
`
export const BtnListSizeActive = styled(BtnListSize)`
  border: none;
  color: ${props => props.color || "#FFFFFF"};
  background-color: ${props => props.background || "#000F08"}
`

export const ItemBtnWrapper = styled.div`
  display: flex;
  @media (max-width: 376px) {
    justify-content: center;
    width: 100%;
  }
`

export const ItemButton = styled.button`
  background-color: ${props => props.color || "#000F08"};
  color: ${props => props.color || "#FFFFFF"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 62px;
  margin: 0 1px 53px 0;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.color || "#FFFFFF"};
    color: ${props => props.color || "#000F08"};
    transition: 0.5s ease;
  }
`

export const ItemButtonLike = styled.button`
  background-color: ${props => props.color || "#000F08"};
  color: ${props => props.color || "#FFFFFF"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 53px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.color || "#FFFFFF"};
    color: ${props => props.color || "#000F08"};
    transition: 0.5s ease;

    svg {
      transition: 0.5s ease;
      fill: red;
    }
  }
`
export const LikeIconItemPage = styled(LikeIcon)`
  width: 24px; 
  height: 24px;
`

export const ItemIconOpen = styled.svg`
  display: block;
  fill: ${props => props.fill || "#000F08"};
  width: ${props => props.width || '9px'};
  height: ${props => props.height || '18px'};
  margin-right: 22px;
  cursor: pointer;
`

export const ItemIconClose = styled(ItemIconOpen)`
  width: ${props => props.width || '30px'};
  height: ${props => props.height || '18px'};
  position: relative;
  bottom: -2px;
`

export const ItemFooterWrapper = styled.div`
  font-weight: 300;
`
export const ItemFooterContent = styled.div`
  p {
    color: ${props => props.color || "#8C8C8C"};
    font-weight: 400;
    margin: 22px 0 6px;
    transition: 0.5s ease;
  }
`